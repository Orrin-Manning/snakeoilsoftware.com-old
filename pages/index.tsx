import Head from "next/head";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <Container fluid as="main">
      <Head>
        <title>Snake Oil Software</title>
      </Head>
      <Row className="justify-content-around">
        <Col md={6} className="text-center">
          <h1 className="display-5 fw-bold">
            Independent Website and Mobile App Development
          </h1>
          <p className="lead">
            Snake Oil Software is proudly owned and operated in&nbsp;
            <span className="fw-bolder fst-italic">Lubbock, Texas</span>&nbsp;
            with the aim of providing hands-on development services to
            individuals and small businesses in the west Texas region. The last
            few years have shown us all how vital a digital presence is, and we
            want to help bring you or your business up to date with the current
            industry standards.
          </p>
        </Col>
        <Col md={5}>
          <Card className="text-dark text-center px-3 py-4">
            <Card.Title>Let&apos;s get in touch!</Card.Title>
            <Card.Text>
              We would love to hear more about you and the technological needs
              of your business! Complete the form on our contact page so we can
              reach out to you and establish a personalized plan of action.
            </Card.Text>
            <Container fluid className="text-center">
              <Link href="/contact" passHref>
                <Button variant="dark">Contact Us Today</Button>
              </Link>
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
