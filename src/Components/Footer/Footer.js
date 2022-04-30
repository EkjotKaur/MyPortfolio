import "./Footer.css";
import React from "react";
import { Col, Row, Button, Container } from "react-bootstrap";
import { SiLeetcode, SiLinktree, SiGmail } from "react-icons/si";
import { FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import {
    BsLinkedin,
    BsInstagram,
    BsTwitter,
    BsFacebook,
    BsGithub,
    BsFillTelephoneFill,
} from "react-icons/bs";
// import { Button } from "bootstrap";

const Footer = () => {
    return (
        <div className="Footer">
            <Container>
                <Row className="justify-content-md-between m-0">
                    <div className="footer-col">
                        <Row className="flex-column">
                            <div className="footer-line"> </div>
                            <Col className="portfolioLinks-Footer">
                                {" "}
                                <a href={`/#home`}>Home</a>
                            </Col>
                            <Col className="portfolioLinks-Footer">
                                <a href={`/#skills`}>Skills </a>
                            </Col>
                            <Col className="portfolioLinks-Footer">
                                <a href={`/#experience`}>Experience</a>
                            </Col>
                            <Col className="portfolioLinks-Footer">
                                <a href={`/#projects`}>Projects</a>
                            </Col>
                            <Col className="portfolioLinks-Footer">
                                <a href={`/#contact`}>Contact Us</a>
                            </Col>
                        </Row>
                    </div>
                    <div className="footer-col">
                        <Row className="flex-column">
                            <div className="footer-line"> </div>
                            <Col className="socialLinks-footer ">
                                <FaMapMarkerAlt /> New Delhi, India
                            </Col>
                            <Col className="socialLinks-footer ">
                                <SiGmail /> ekjotkaurk13@gmail.com
                            </Col>
                            <Col className="socialLinks-footer ">
                                <BsFillTelephoneFill /> +91 8700415131
                            </Col>
                            <Col className="socialLinks-footer">
                                <a
                                    href="https://www.linkedin.com/in/ekjot-kaur13/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <BsLinkedin /> LinkedIn </a>
                            </Col>
                            <Col className="socialLinks-footer  mt-2 footer-btn">
                                <Button variant="light">
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://drive.google.com/file/d/1iZ-4zqOzEJQls2yUy7hOBrUJk0fmezmD/view?usp=sharing"
                                    >
                                        Resume
                                    </a>
                                </Button>
                            </Col>
                        </Row>
                    </div>
                    <div className="footer-col">
                        <Row className="flex-column">
                            <div className="footer-line"> </div>
                            {/* <Col className="socialLinks-footer"><BsFacebook /> Facebook</Col> */}
                            <Col className="socialLinks-footer">
                                <a
                                    href="https://twitter.com/EkjotKaurK13"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {" "}
                                    <BsTwitter /> Twitter
                                </a>
                            </Col>
                            <Col className="socialLinks-footer">
                                <a href="" target="_blank" rel="noreferrer">
                                    {" "}
                                    <BsInstagram /> Instagram
                                </a>
                            </Col>
                            <Col className="socialLinks-footer">
                                <a
                                    href="https://linktr.ee/Ekjot_Kaur"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {" "}
                                    <SiLinktree /> LinkTree
                                </a>
                            </Col>
                            <Col className="socialLinks-footer">
                                <a
                                    href="https://leetcode.com/ekjotkaurk13/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {" "}
                                    <SiLeetcode /> Leetcode
                                </a>
                            </Col>
                            <Col className="socialLinks-footer">
                                <a
                                    href="https://github.com/EkjotKaur"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {" "}
                                    <BsGithub /> GitHub
                                </a>
                            </Col>
                        </Row>
                    </div>
                </Row>
                <div className="bottom-footer mt-4 py-4 text-center">
                    <div>
                        Made by <FaHeart className="mx-1 faheart" /> Ekjot Kaur
                    </div>
                    <div>
                        Copyright <BiCopyright /> 2022 Ekjot Kaur
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
