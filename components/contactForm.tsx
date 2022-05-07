import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function ContactForm() {
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
          placeholder="John Doe"
          form="contact-form"
        />
      </FloatingLabel>
      <FloatingLabel label="Email Address" controlId="email" className="mb-3">
        <Form.Control
          className="form-control"
          type="email"
          name="email"
          placeholder="name@example.com"
          form="contact-form"
        />
      </FloatingLabel>
      <FloatingLabel
        label="Organization"
        controlId="organization"
        className="mb-3"
      >
        <Form.Control
          className="form-control"
          type="text"
          name="organization"
          placeholder="Company"
          form="contact-form"
        />
      </FloatingLabel>
      <FloatingLabel
        label="Role"
        controlId="role"
        className="form-floating mb-3"
      >
        <Form.Control
          className="form-control"
          type="text"
          name="role"
          placeholder="Technical Director"
          form="contact-form"
        />
      </FloatingLabel>
      <FloatingLabel
        label="Description"
        controlId="description"
        className="form-floating mb-3"
      >
        <Form.Control
          className="form-control"
          type="text"
          name="description"
          placeholder="Describe your needs here"
          as="textarea"
          style={{ height: "150px" }}
          form="contact-form"
        />
      </FloatingLabel>
      <Button
        className="contact-submit-btn"
        type="submit"
        name="submit"
        value="submit"
        form="contact-form"
      >
        Submit
      </Button>
    </Form>
  );
}
