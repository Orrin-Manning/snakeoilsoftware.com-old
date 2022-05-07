import Container from "react-bootstrap/Container";
import ContactForm from "../../components/contactForm";

export default function Contact() {
  return (
    <Container as="main" className="px-4">
      <h1 className="text-center">Contact Us</h1>
      <section>
        <p>
          Due to the varied technological needs of our clients, service will be
          evaluated on a case-by-case basis. Please complete this questionnaire,
          and we will reach out to you to create a personalized plan of action
          for your business needs.
        </p>
        <ContactForm />
      </section>

      <Card body className="text-dark">
        <Card.Text>
          You may also contact us via email and we will be happy to answer any
          questions you may have.
        </Card.Text>
        <Card.Text>
          Email:&ensp;
          <Card.Link href="mailto:orrin.manning@protonmail.com">
            orrin.manning@protonmail.com
          </Card.Link>
        </Card.Text>
      </Card>
    </Container>
  );
}
