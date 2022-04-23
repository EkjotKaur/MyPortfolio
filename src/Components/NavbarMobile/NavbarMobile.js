import React, { useState } from 'react'
import { Row } from 'react-bootstrap';
import "./NavbarMobile.scss";
import { BsLinkedin, BsGithub, BsTwitter, BsFacebook } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { SiLeetcode, SiLinktree, SiCodechef, SiCodeforces } from "react-icons/si";


const NavbarMobile = () => {
    const [show, setShow] = useState(0);

    const changeState = () => setShow(prev => !prev)
    return (
        <div>
            <div> <HiMenu className="slideButton" onClick={changeState} /></div>
            {show ? <div className="NavbarMobileSlide">
                <div className="NavbarMobileSlide__links">
                    <div className="NavbarMobileSlide__link main-links">Skills</div>
                    <div className="NavbarMobileSlide__link main-links">Experience</div>
                    <div className="NavbarMobileSlide__link main-links">Projects</div>
                    <div className="NavbarMobileSlide__link main-links">Contact</div>
                </div>
                <div>
                    <Row className="flex-column">
                        <Row className="flex-column justify-content-center followmebox">
                            <div className="NavbarMobileSlide__link"><BsLinkedin /></div>
                            <div className="NavbarMobileSlide__link"><BsGithub /></div>
                            <div className="NavbarMobileSlide__link"><BsTwitter /></div>
                            <div className="NavbarMobileSlide__link"><BsFacebook /></div>
                            <div className="NavbarMobileSlide__link"><SiLeetcode /></div>
                            <div className="NavbarMobileSlide__link"><SiLinktree /></div>
                        </Row>

                    </Row>
                </div>
            </div> : ""}

        </div>
    );
};

export default NavbarMobile;
