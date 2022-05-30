import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { fetchAPI } from "../lib/api";

const Home = ({ homepage }) => {
  return (
    <Container fluid as="main">
      <Head>
        <title>Snake Oil Software</title>
      </Head>
      <Container className="text-center">
        <h1 className="display-5 fw-bold">
          {homepage.attributes.hero.heading}
        </h1>
        <ReactMarkdown className="lead">
          {homepage.attributes.hero.body}
        </ReactMarkdown>
      </Container>
      <Row className="justify-content-center">
        <Col xs={11} sm={10} md={9} lg={8} xl={6} xxl={5}>
          <Card className="text-dark text-center px-3 py-4">
            <Card.Title>{homepage.attributes.cta.title}</Card.Title>
            <Card.Text>{homepage.attributes.cta.body}</Card.Text>
            <Container fluid className="text-center">
              <Link href="/contact" passHref>
                <Button variant="primary">
                  {homepage.attributes.cta.button}
                </Button>
              </Link>
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export async function getStaticProps() {
  const homepageRes = await fetchAPI("/homepage", {
    populate: {
      hero: "*",
      cta: "*",
    },
  });

  return {
    props: {
      homepage: homepageRes.data,
    },
  };
}

export default Home;
