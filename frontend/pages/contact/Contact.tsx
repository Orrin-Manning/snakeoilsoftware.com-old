import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ContactForm from "../../components/contactForm";
import { fetchAPI } from "../../lib/api";

const Contact = ({ hero }) => {
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
};

export async function getStaticProps() {
  const contactRes = await fetchAPI("/contact", {
    populate: {
      hero: "*",
    },
  });
  const { hero } = contactRes.data.attributes;

  return {
    props: {
      hero: hero,
    },
  };
}

export default Contact;
