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
      <Container className="text-center">
        <h1 className="display-5 fw-bold">
          Independent Website and Mobile App Development
        </h1>
        <p className="lead">
          Snake Oil Software is proudly owned and operated in&nbsp;
          <span className="fst-italic">Lubbock, Texas</span>&nbsp; with the aim
          of providing hands-on development services to individuals and small
          businesses in the west Texas region. The last few years have shown us
          all how vital a digital presence is, and we want to help bring you or
          your business up to date with the current industry standards.
        </p>
      </Container>
      <Row className="justify-content-center">
        <Col xs={11} sm={10} md={9} lg={8} xl={6} xxl={5}>
          <Card className="text-dark text-center px-3 py-4">
            <Card.Title>Let&apos;s get in touch!</Card.Title>
            <Card.Text>
              We would love to hear more about you and the technological needs
              of your business! Complete the form on our contact page so we can
              reach out to you and establish a personalized plan of action.
            </Card.Text>
            <Container fluid className="text-center">
              <Link href="/contact" passHref>
                <Button variant="primary">Contact Us Today</Button>
              </Link>
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
