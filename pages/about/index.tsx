import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "next/image";

export default function About() {
  return (
    <Container fluid as="main">
      <Container as="section">
        <h1 className="text-center">About Us</h1>
        <p>
          Snake Oil Software was founded by former Texas Tech students and
          Lubbock locals. Our aim is to provide hands on software development
          services to small businesses in the West Texas region. We believe that
          proximity and open communication are crucial to satisying the complex
          techincal needs of our clients. We stand behind our services 100% and
          pledge to deliver quality products.
        </p>
      </Container>
      <Container as="section">
        <h1 className="text-center">Our Team</h1>
        <Row>
          <Col md={6} lg={4}>
            <Card className="text-dark p-3">
              <Row className="align-items-center">
                <Col xs={3}>
                  <Image
                    src="/IMG_0465.jpg"
                    alt="Headshot of Orrin Manning"
                    layout="responsive"
                    width={128}
                    height={128}
                    className="rounded-circle"
                  />
                </Col>
                <Col
                  xs={9}
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
}
