import "./ProfilePic.css";
import { Col, Row } from "react-bootstrap";
import Profile from "../../../assets/images/about/Ekjot.jpg";
import Base from "../../../assets/images/about/base.png";

const ProfilePic = () => {
    return (
        <Col className="leftabout col-md-4">
            <img className="myPicBackground" src={Base} alt="Base" />

            <Row className="justify-content-center flex-column lefttaboutrow">
                <img className="mypic" src={Profile} alt="mypic" />
            </Row>
        </Col>
    );
};

export default ProfilePic;
