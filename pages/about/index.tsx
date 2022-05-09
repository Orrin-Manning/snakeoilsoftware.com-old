import Container from "react-bootstrap/Container";

export default function About() {
  return (
    <main>
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
      </Container>
    </main>
  );
}
