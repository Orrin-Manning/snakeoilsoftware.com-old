import { useRouter } from "next/router";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

type contactForm = {
  name: String;
  email: String;
  organization: String;
  role: String;
  description: String;
};

type contactFormError = {
  name?: String;
  email?: String;
  organization?: String;
  role?: String;
  description?: String;
};

export default function ContactForm() {
  const contentType = "application/json";
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    description: "",
  });

  const postData = async (form: contactForm) => {
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetcch API req failed
      if (!res.ok) {
        throw new Error(res.status.toString());
      }

      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2000);
    } catch (error) {
      setMessage("Failed to add contact");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      postData(form);
    } else {
      setErrors({ errs });
    }
  };

  const formValidate = () => {
    let err: contactFormError = {};
    if (!form.name) err.name = "Name is required";
    if (!form.email) err.email = "Email is required";
    if (!form.organization) err.organization = "Organization name is required";
    if (!form.role) err.role = "Role is required";
    if (!form.description) err.description = "Description is required";
    return err;
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className="contact-form text-dark"
        id="contact-form"
      >
        <FloatingLabel label="Name" controlId="name" className="mb-3">
          <Form.Control
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </FloatingLabel>
        <FloatingLabel label="Email Address" controlId="email" className="mb-3">
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <FloatingLabel
          label="Organization"
          controlId="organization"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="organization"
            value={form.organization}
            onChange={handleChange}
            placeholder="Company"
          />
        </FloatingLabel>
        <FloatingLabel
          label="Role"
          controlId="role"
          className="form-floating mb-3"
        >
          <Form.Control
            type="text"
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Technical Director"
          />
        </FloatingLabel>
        <FloatingLabel
          label="Description"
          controlId="description"
          className="form-floating mb-3"
        >
          <Form.Control
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe your needs here"
            as="textarea"
            style={{ height: "150px" }}
          />
        </FloatingLabel>
        <Container fluid className="text-center">
          <Button variant="light" type="submit">
            {submitted ? (
              <>
                <FontAwesomeIcon icon={faCircleCheck} className="me-2" />
                Submitted!
              </>
            ) : submitting ? (
              <>
                <Spinner
                  animation="border"
                  size="sm"
                  role="status"
                  className="me-2"
                />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </Container>
      </Form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  );
}
