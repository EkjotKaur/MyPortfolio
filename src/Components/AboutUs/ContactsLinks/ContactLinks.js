import "./ContactLinks.css";
import { Col, Row } from "react-bootstrap";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";


const ContactLinks = () => {
    return (
        <Col className="col-md-1 rightmost">
            <Row className="flex-column align-items-end justify-content-center followmerow">
                <Row className="flex-column justify-content-center followmebox">
                    <div className="followmelinks"><BsLinkedin /></div>
                    <div className="followmelinks"><BsGithub /></div>
                    <div className="followmelinks"><BsTwitter /></div>
                </Row>

            </Row>
        </Col>

    );
};

export default ContactLinks;
