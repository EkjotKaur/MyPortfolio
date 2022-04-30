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
                    <a href="https://www.linkedin.com/in/ekjot-kaur13/" target="_blank" rel="noreferrer"> <div className="followmelinks"><BsLinkedin /></div></a>
                    <a href="https://github.com/EkjotKaur" target="_blank" rel="noreferrer" > <div className="followmelinks"><BsGithub /></div></a>
                    <a href="https://twitter.com/EkjotKaurK13" target="_blank" rel="noreferrer" > <div className="followmelinks"><BsTwitter /></div></a>
                    <a href="https://leetcode.com/ekjotkaurk13/" target="_blank" rel="noreferrer" > <div className="followmelinks"><SiLeetcode /></div></a>
                    <a href="https://linktr.ee/Ekjot_Kaur" target="_blank" rel="noreferrer" > <div className="followmelinks"><SiLinktree /></div></a>
                    <a href="https://www.facebook.com/ekjot.kaur.330467" target="_blank" rel="noreferrer" > <div className="followmelinks"><BsFacebook /></div></a>
                </Row>

            </Row>
        </Col>

    );
};

export default ContactLinks;
