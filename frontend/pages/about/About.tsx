import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileCard from "../../components/profileCard";
import { fetchAPI } from "../../lib/api";

const About = ({ hero, ourTeam }) => {
  return (
    <Container fluid as="main">
      <Head>
        <title>About Snake Oil Software</title>
      </Head>
      <Container as="section">
        <h1 className="text-center">{hero.heading}</h1>
        <p>{hero.body}</p>
      </Container>
      <Container as="section">
        <h1 className="text-center">{ourTeam.heading}</h1>
        <Row>
          {ourTeam.profiles.map((profile) => (
            <Col md={6} lg={4} key={profile.name}>
              <ProfileCard profile={profile} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export async function getStaticProps() {
  const aboutRes = await fetchAPI("/about", {
    populate: {
      hero: "*",
      ourTeam: {
        populate: ["*", "profiles.picture"],
      },
    },
  });
  const { hero, ourTeam } = aboutRes.data.attributes;

  return {
    props: {
      hero: hero,
      ourTeam: ourTeam,
    },
  };
}

export default About;
