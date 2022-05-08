import Container from "react-bootstrap/Container";

export default function About() {
  return (
    <Container as="main">
      <main>
        <section>
          <h1 className="text-center">About Us</h1>
          <p className="text-center">
            Snake Oil Software was founded by a mix of Texas Tech students and
            Lubbock locals.
          </p>
        </section>
        <section>
          <h1 className="text-center">Our Mission</h1>
        </section>
      </main>
    </Container>
  );
}
