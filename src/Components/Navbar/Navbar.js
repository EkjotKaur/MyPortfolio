import "./Navbar.css";
import "./Navbar.scss";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoMdSchool } from "react-icons/io";
import { RiFolderOpenFill } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";
import { FaFileDownload } from "react-icons/fa";
import { MdLaptopMac, MdOutlineEmail } from "react-icons/md";

const Navbar = () => {
    // const navigate = useNavigate()
    return (
        <Row className="flex-column Navbar justify-content-center">
            <a href={`/#skills`} className="navlinks">
                <span className="hover-navlink-hide">
                    <GiProgression />
                </span>{" "}
                <div className="hover-navlink">Skills</div>{" "}
            </a>
            {/* <a href={`/#skills`} className="navlinks">
                <span className="hover-navlink-hide">
                    <IoMdSchool />
                </span>{" "}
                <div className="hover-navlink">Education</div>{" "}
            </a> */}
            <a href={`/#experience`} className="navlinks">
                <span className="hover-navlink-hide">
                    <MdLaptopMac />
                </span>{" "}
                <div className="hover-navlink">Experience</div>{" "}
            </a>
            <a href={`/#projects`} className="navlinks">
                <span className="hover-navlink-hide">
                    <RiFolderOpenFill />
                </span>{" "}
                <div className="hover-navlink">Projects</div>{" "}
            </a>
            <a href={`/#contact`} className="navlinks">
                <span className="hover-navlink-hide">
                    <MdOutlineEmail />
                </span>{" "}
                <div className="hover-navlink">Contact</div>{" "}
            </a>
            <a rel="noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/1iZ-4zqOzEJQls2yUy7hOBrUJk0fmezmD/view?usp=sharing" className="navlinks">
                <span className="hover-navlink-hide">
                    <FaFileDownload />
                </span>{" "}
                <div className="hover-navlink">
                    Resume
                </div>{" "}
            </a>
        </Row>
    );
};

export default Navbar;
