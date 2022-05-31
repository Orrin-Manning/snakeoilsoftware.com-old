import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ContactForm from "../../components/contactForm";
import { fetchAPI } from "../../lib/api";

const Contact = ({ hero, contactCard }) => {
  return (
    <Container as="main">
      <Head>
        <title>Contact Us</title>
      </Head>
      <h1 className="text-center">{hero.heading}</h1>
      <Row as="section" className="justify-content-around mb-3">
        <Col md={12} lg={4}>
          <p>{hero.body}</p>
        </Col>
        <Col md={8} lg={6}>
          <ContactForm />
        </Col>
      </Row>

      <hr />

      <Row className="justify-content-center">
        <Col md={8} lg={5}>
          <Card body className="text-dark">
            <Card.Title>{contactCard.heading}</Card.Title>
            <Card.Text>{contactCard.body}</Card.Text>
            <Card.Text>
              Email:&ensp;
              <Card.Link href={`mailto:${contactCard.emailAddress}`}>
                {contactCard.emailAddress}
              </Card.Link>
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export async function getStaticProps() {
  const contactRes = await fetchAPI("/contact", {
    populate: {
      hero: "*",
      contactCard: "*",
    },
  });
  const { hero, contactCard } = contactRes.data.attributes;

  return {
    props: {
      hero: hero,
      contactCard: contactCard,
    },
  };
}

export default Contact;
