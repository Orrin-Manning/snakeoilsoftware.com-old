import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NextImage from "./image";

export interface ProfileCardProps {
  profile: {
    name: string;
    title: string;
    bio: string;
    picture: {
      data: {
        attributes: {
          url: URL;
          alternativeText: string;
          width: number;
          height: number;
        };
      };
    };
  };
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <Card className="text-dark p-3">
      <Row className="align-items-center">
        <Col xs={4}>
          <NextImage image={profile.picture} className="rounded-circle" />
        </Col>
        <Col xs={8} className="d-flex flex-column justify-content-center ps-0">
          <Card.Title>{profile.name}</Card.Title>
          <Card.Subtitle>{profile.title}</Card.Subtitle>
        </Col>
      </Row>
      <hr />
      <Card.Text>{profile.bio}</Card.Text>
    </Card>
  );
};

export default ProfileCard;
