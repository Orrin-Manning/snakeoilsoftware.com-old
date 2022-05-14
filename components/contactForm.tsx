import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    description: "",
  });
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
          placeholder="John Doe"
        />
      </FloatingLabel>
      <FloatingLabel label="Email Address" controlId="email" className="mb-3">
        <Form.Control
          type="email"
          name="email"
          value={form.email}
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
