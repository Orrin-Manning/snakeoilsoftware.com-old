import Head from "next/head";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Modal } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type contactForm = {
  firstname: String;
  lastname: String;
  email: String;
  organization: String;
  role: String;
  description: String;
};

type contactFormError = {
  firstname?: String;
  lastname?: String;
  email?: String;
  organization?: String;
  role?: String;
  description?: String;
  token?: String;
};

export default function ContactForm() {
  const contentType = "application/json";
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [buttonDissabled, setButtonDisabled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState<contactFormError>({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    organization: "",
    role: "",
    description: "",
  });

  const [captchaToken, setCaptchaToken] = useState<String | null>(null);

  const postData = async (form: contactForm, captchaToken: String) => {
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify({
          form: form,
          token: captchaToken,
        }),
      });

      // Throw error with status code in case Fetcch API req failed
      if (!res.ok) {
        throw new Error(res.status.toString());
      }

      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setShowModal(true), 1000);
    } catch (error) {
      setMessage("Failed to add contact");
      setSubmitting(false);
      setButtonDisabled(false);
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
    setButtonDisabled(true);
    const errs = formValidate();
    if (Object.keys(errs).length === 0 && captchaToken) {
      setSubmitting(true);
      postData(form, captchaToken);
    } else {
      setErrors(errs);
      setButtonDisabled(false);
    }
  };

  const formValidate = () => {
    let err: contactFormError = {};
    if (!form.firstname) err.firstname = "First name is required";
    if (!form.lastname) err.lastname = "Last name is required";
    if (!form.email) err.email = "Email is required";
    if (!form.organization) err.organization = "Organization name is required";
    if (!form.role) err.role = "Role is required";
    if (!form.description) err.description = "Description is required";
    if (!captchaToken) err.token = "ReCAPTCHA verification is required";
    return err;
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://www.google.com" />
        <link
          rel="preconnect"
          href="https://www.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <Form
        onSubmit={handleSubmit}
        className="contact-form text-dark"
        id="contact-form"
      >
        <FloatingLabel
          label="First Name"
          controlId="firstname"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="firstname"
            value={form.firstname}
            onChange={handleChange}
            placeholder="John"
          />
        </FloatingLabel>
        <FloatingLabel label="Last Name" controlId="lastname" className="mb-3">
          <Form.Control
            type="text"
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
            placeholder="Doe"
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
        <Container fluid className="d-flex flex-column align-items-center">
          <ReCAPTCHA
            className="mb-3"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={(token) => setCaptchaToken(token)}
          />
          <Button variant="light" type="submit" disabled={buttonDissabled}>
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
        {Object.values(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
      <Modal show={showModal} centered className="text-dark">
        <Modal.Header className="justify-content-center">
          <Modal.Title>Thank you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            We have recieved your information and will be in touch shortly! You
            should recieve a confirmation email in a few moments. If the email
            doesn&apos;t show up, be sure to check your spam folder. In the
            meantime, the button below will redirect you back to the homepage.
          </p>
          <Container fluid className="d-flex justify-content-center">
            <Link href="/" passHref>
              <Button variant="primary">Return Home</Button>
            </Link>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}
