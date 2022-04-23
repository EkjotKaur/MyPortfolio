import "./Footer.css";
import React from "react";
import { Col, Row, Button, Container } from "react-bootstrap";
import { SiLeetcode, SiLinktree, SiGmail } from "react-icons/si";
import { FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import { BsLinkedin, BsInstagram, BsTwitter, BsFacebook, BsGithub, BsFillTelephoneFill } from "react-icons/bs";
// import { Button } from "bootstrap";


const Footer = () => {
    return (
        <div className="Footer">
            <Container>
                <Row className="justify-content-md-between m-0">
                    <div className="footer-col">
                        <Row className="flex-column">
                            <div className="footer-line">{" "}</div>
                            <Col className="portfolioLinks-Footer">Home</Col>
                            <Col className="portfolioLinks-Footer">Skills</Col>
                            <Col className="portfolioLinks-Footer">Experience</Col>
                            <Col className="portfolioLinks-Footer">Projects</Col>
                            <Col className="portfolioLinks-Footer">Contact Us</Col>
                        </Row>
                    </div>
                    <div className="footer-col">
                        <Row className="flex-column">
                            <div className="footer-line">{" "}</div>
                            <Col className="socialLinks-footer "><FaMapMarkerAlt /> New Delhi, India</Col>
                            <Col className="socialLinks-footer "><SiGmail /> ekjotkaurk13@gmail.com</Col>
                            <Col className="socialLinks-footer "><BsFillTelephoneFill /> +91 8700415131</Col>
                            <Col className="socialLinks-footer"><BsLinkedin /> LinkedIn</Col>
                            <Col className="socialLinks-footer  mt-2 footer-btn"> <Button variant="light">Download Resume</Button>{' '}</Col>
                        </Row>
                    </div>
                    <div className="footer-col">
                        <Row className="flex-column">
                            <div className="footer-line">{" "}</div>
                            {/* <Col className="socialLinks-footer"><BsFacebook /> Facebook</Col> */}
                            <Col className="socialLinks-footer"><BsTwitter /> Twitter</Col>
                            <Col className="socialLinks-footer"><BsInstagram /> Instagram</Col>
                            <Col className="socialLinks-footer"><SiLinktree /> LinkTree</Col>
                            <Col className="socialLinks-footer"><SiLeetcode /> Leetcode</Col>
                            <Col className="socialLinks-footer"> <BsGithub /> GitHub</Col>
                        </Row>
                    </div>
                </Row>
                <div className="bottom-footer mt-4 py-4 text-center">
                    <div>Made by <FaHeart className="mx-1 faheart" /> Ekjot Kaur</div>
                    <div>Copyright <BiCopyright /> 2022 Ekjot Kaur</div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
