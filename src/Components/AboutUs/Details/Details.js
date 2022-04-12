import "./Details.css";
import { Col, Container, Row } from "react-bootstrap";
import ProfilePicSq from "../../../assets/images/about/Ekjot-Square.jpg";
import ProfilePicHori from "../../../assets/images/about/Ekjot-horizontal.jpg";

const Details = () => {
    return (
        <Col className="rightabout col-md-7">
            <Row className="justify-content-center flex-column rightaboutrow">
                <div><img src={ProfilePicSq} alt="profile" className="img-sq" /></div>
                <div><img src={ProfilePicHori} alt="profile" className="img-h" /></div>
                <div className="box"></div>
                <Container className="container-box pb-5">
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

                        <div className="info">
                            {/* Aspiring CS Engineer. */}
                            I'm a Computer Science Engineer from Guru Gobind Singh
                            Indraprastha University and Software Developer.
                        </div>
                        <div className="info">
                            I love to generate new ideas and devise feasible solutions to
                            broadly relevent problems. I define myself by the work I want to
                            do. Skills can be taught, personality is inherent. I prefer to
                            keep learning, continue challenging myself, and do interesting
                            things that matter.
                            {/* I'm keen to solve real life problems by putting all skills together to present amazing results.
                            Programming expertise in addition to active understanding for problem solving situations with joint efforts and cooperation. Have the ability to learn advanced concepts by adapting the innovative ways to work with efficiency and industrious behaviour. Progressing experience and fabulous communication skills add to leadership qualities. */}
                        </div>
                        <div className="info">
                            Fueled by high energy levels and boundless enthusiasm, I’m easily
                            inspired and more then willing to follow my fascinations wherever
                            they take me. I’m passionate, expressive, multi-talented spirit
                            with a natural ability to entertain and inspire. I’m never
                            satisfied to just come up with ideas. Instead I have an almost
                            impulsive need to act on them.
                            {/* Programming expertise in addition to active understanding for
                            problem solving situations with joint efforts and cooperation.
                            Have the ability to learn advanced concepts by adapting the
                            innovative ways to work with efficiency and industrious
                            behaviour. Progressing experience and fabulous communication
                            skills add to leadership qualities. */}
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
