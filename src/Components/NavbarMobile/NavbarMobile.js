import React, { useState } from "react";
import { Row } from "react-bootstrap";
import "./NavbarMobile.scss";
import { BsLinkedin, BsGithub, BsTwitter, BsFacebook } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import {
  SiLeetcode,
  SiLinktree,
  SiCodechef,
  SiCodeforces,
} from "react-icons/si";

const NavbarMobile = () => {
  const [show, setShow] = useState(0);

  const changeState = () => setShow((prev) => !prev);
  return (
    <div>
      <div>
        {" "}
        <HiMenu className="slideButton" onClick={changeState} />
      </div>
      {show ? (
        <div className="NavbarMobileSlide">
          <div className="NavbarMobileSlide__links">
            <a onClick={changeState} href={`/#skills`}>
              <div className="NavbarMobileSlide__link main-links">Skills</div>{" "}
            </a>
            <a onClick={changeState} href={`/#experience`}>
              <div className="NavbarMobileSlide__link main-links">
                Experience
              </div>{" "}
            </a>
            <a onClick={changeState} href={`/#projects`}>
              <div className="NavbarMobileSlide__link main-links">Projects</div>{" "}
            </a>
            <a onClick={changeState} href={`/#contact`}>
              <div className="NavbarMobileSlide__link main-links">Contact</div>{" "}
            </a>
            <a
              onClick={changeState}
              rel="noreferrer"
              target="_blank"
              href="https://drive.google.com/file/d/1iZ-4zqOzEJQls2yUy7hOBrUJk0fmezmD/view?usp=sharing"
            >
              <div className="NavbarMobileSlide__link main-links">Resume</div>{" "}
            </a>
          </div>
          <div>
            <Row className="flex-column">
              <Row className="flex-column justify-content-center followmebox">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/ekjot-kaur13/"
                >
                  {" "}
                  <div className="NavbarMobileSlide__link">
                    <BsLinkedin />
                  </div>{" "}
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/EkjotKaur"
                >
                  {" "}
                  <div className="NavbarMobileSlide__link">
                    <BsGithub />
                  </div>{" "}
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/EkjotKaurK13"
                >
                  {" "}
                  <div className="NavbarMobileSlide__link">
                    <BsTwitter />
                  </div>{" "}
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/ekjot.kaur.330467"
                >
                  {" "}
                  <div className="NavbarMobileSlide__link">
                    <BsFacebook />
                  </div>{" "}
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://leetcode.com/ekjotkaurk13/"
                >
                  {" "}
                  <div className="NavbarMobileSlide__link">
                    <SiLeetcode />
                  </div>{" "}
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://linktr.ee/Ekjot_Kaur"
                >
                  {" "}
                  <div className="NavbarMobileSlide__link">
                    <SiLinktree />
                  </div>{" "}
                </a>
              </Row>
            </Row>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavbarMobile;
