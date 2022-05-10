import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ContactForm from "../../components/contactForm";

export default function Contact() {
  return (
    <Container as="main">
      <h1 className="text-center">Contact Us</h1>
      <Row as="section" className="justify-content-around mb-3">
        <Col md={12} lg={4}>
          <p>
            Due to the varied technological needs of our clients, service will
            be evaluated on a case-by-case basis. Please complete this
            questionnaire, and we will reach out to you to create a personalized
            plan of action for your business needs.
          </p>
        </Col>
        <Col md={8} lg={6}>
          <ContactForm />
        </Col>
      </Row>

      <hr />

      <Row className="justify-content-center">
        <Col md={8} lg={5}>
          <Card body className="text-dark">
            <Card.Title>Have Questions?</Card.Title>
            <Card.Text>
              You may also contact us via email and we will be happy to answer
              any questions you may have.
            </Card.Text>
            <Card.Text>
              Email:&ensp;
              <Card.Link href="mailto:contact@snakeoilsoftware.com">
                contact@snakeoilsoftware.com
              </Card.Link>
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
