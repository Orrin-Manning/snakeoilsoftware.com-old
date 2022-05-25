import Head from "next/head";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { fetchAPI } from "../../lib/api";

const About = ({ about }) => {
  return (
    <Container fluid as="main">
      <Head>
        <title>About Snake Oil Software</title>
      </Head>
      <Container as="section">
        <h1 className="text-center">{about.attributes.hero.heading}</h1>
        <p>{about.attributes.hero.body}</p>
      </Container>
      <Container as="section">
        <h1 className="text-center">Our Team</h1>
        <Row>
          <Col md={6} lg={4}>
            <Card className="text-dark p-3">
              <Row className="align-items-center">
                <Col xs={4}>
                  <Image
                    src="/orrin-headshot.jpg"
                    alt="Headshot of Orrin Manning"
                    layout="responsive"
                    width={128}
                    height={128}
                    className="rounded-circle"
                  />
                </Col>
                <Col
                  xs={8}
                  className="d-flex flex-column justify-content-center ps-0"
                >
                  <Card.Title>Orrin Manning</Card.Title>
                  <Card.Subtitle>Founder, Full Stack Developer</Card.Subtitle>
                </Col>
              </Row>
              <hr />
              <Card.Text>
                Studied computer science at the University of Texas at Arlington
                and professional physics at Texas Tech University, before
                dropping out to found Snake Oil Software.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export async function getStaticProps() {
  const aboutRes = await fetchAPI("/about", {
    populate: {
      hero: "*",
    },
  });

  return {
    props: {
      about: aboutRes.data,
    },
  };
}

export default About;
