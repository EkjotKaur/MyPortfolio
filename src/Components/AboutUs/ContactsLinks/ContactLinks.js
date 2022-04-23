import "./ContactLinks.css";
import { Col, Row } from "react-bootstrap";
import { BsLinkedin, BsGithub, BsTwitter, BsFacebook } from "react-icons/bs";
import { SiLeetcode, SiLinktree } from "react-icons/si";



const ContactLinks = () => {
    return (
        <Col className="col-md-1 rightmost">
            <Row className="flex-column align-items-end justify-content-center followmerow">
                <Row className="flex-column justify-content-center followmebox">
                    {/* <div className="FollowMe">Follow Me</div> */}
                    <div className="followmelinks"><BsLinkedin /></div>
                    <div className="followmelinks"><BsGithub /></div>
                    <div className="followmelinks"><BsTwitter /></div>
                    <div className="followmelinks"><SiLeetcode /></div>
                    <div className="followmelinks"><SiLinktree /></div>
                    <div className="followmelinks"><BsFacebook /></div>
                </Row>

            </Row>
        </Col>

    );
};

export default ContactLinks;
