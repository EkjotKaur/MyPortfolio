import "./About.css";
import { Col, Container, Row } from "react-bootstrap";
import ProfilePic from "./ProfilePic/ProfilePic";
import Details from "./Details/Details";
import ContactLinks from "./ContactsLinks/ContactLinks";

const About = () => {
    return (
        <div className="About" id="home">
            <Row >
                <ProfilePic />
                <Details />
                <ContactLinks />
            </Row>
            <div className="bottomabout ps-5"></div>
        </div>
    );
};

export default About;
