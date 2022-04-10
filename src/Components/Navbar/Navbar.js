import "./Navbar.css";
import './Navbar.scss';
import { Col, Row } from "react-bootstrap";
import { IoMdSchool } from "react-icons/io";
import { RiFolderOpenFill } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";
import { MdLaptopMac, MdOutlineEmail } from "react-icons/md";


const Navbar = () => {
    return (
        <Row className="flex-column Navbar justify-content-center">
            <div className="navlinks"><span className="hover-navlink-hide"><GiProgression /></span> <div className="hover-navlink">Skills</div> </div>
            <div className="navlinks"><span className="hover-navlink-hide"><IoMdSchool /></span> <div className="hover-navlink">Education</div> </div>
            <div className="navlinks"><span className="hover-navlink-hide"><MdLaptopMac /></span> <div className="hover-navlink">Experience</div> </div>
            <div className="navlinks"><span className="hover-navlink-hide"><RiFolderOpenFill /></span> <div className="hover-navlink">Projects</div> </div>
            <div className="navlinks"><span className="hover-navlink-hide"><MdOutlineEmail /></span> <div className="hover-navlink">Contact</div> </div>
        </Row>
    );
};

export default Navbar;
