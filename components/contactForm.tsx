import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

type contactFormError = {
  name?: String;
  email?: String;
  organization?: String;
  role?: String;
  description?: String;
};

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
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
    <Form
      action="includes/form.inc.php"
      method="post"
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
          Submit
        </Button>
      </Container>
    </Form>
  );
}
