import "./Details.css";
import { Col, Container, Row } from "react-bootstrap";

const Details = () => {
    return (
        <Col className="rightabout col-md-7">
            <Row className="justify-content-center flex-column rightaboutrow">
                <div className="box"></div>
                <Container className="container-box">
                    <div className="details">
                        <div className="myname pb-2">EKJOT KAUR</div>
                    </div>
                    <div className="details">
                        <Row>
                            <div className="title-profile px-0">
                                <div className="kaaaam pb-4">Software Developer</div>
                            </div>
                            <Col className="hrline">
                                <span></span>
                            </Col>
                        </Row>
                        {/* <div className="kaaaam pb-4">Software Developer <span></span></div> */}

                        {/* <div className="info">
                                    I'm a Computer Science Engineer from Guru Gobind Singh
                                    Indraprastha University and Full Stack Developer.
                                </div> */}
                        <div className='info'>
                            I'm keen to solve real life problems by putting all skills together to present amazing results.
                            Programming expertise in addition to active understanding for problem solving situations with joint efforts and cooperation. Have the ability to learn advanced concepts by adapting the innovative ways to work with efficiency and industrious behaviour. Progressing experience and fabulous communication skills add to leadership qualities.
                        </div>
                        <div className="info">
                            Programming expertise in addition to active understanding for
                            problem solving situations with joint efforts and cooperation.
                            Have the ability to learn advanced concepts by adapting the
                            innovative ways to work with efficiency and industrious
                            behaviour. Progressing experience and fabulous communication
                            skills add to leadership qualities.
                        </div>
                        <div className="bottomline pt-3">
                            <span></span>
                        </div>
                    </div>

                </Container>
            </Row>
        </Col>
    );
};

export default Details;
