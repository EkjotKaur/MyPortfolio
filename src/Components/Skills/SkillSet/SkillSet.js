import './SkillSet.css';
import { Col, ProgressBar, Row } from 'react-bootstrap';
import Circle from '../Progess/Circle';

const SkillSet = ({ data }) => {

    return (
        <Col className="SkillSet py-md-3 py-2">
            <Row className="justify-content-between">
                <Col className="col-lg-2 col-md-3 col-12">
                    <Row className="justify-content-center">
                        <Col>
                            <Row className="flex-column  align-items-center">
                                <Circle value={data.value} />
                                <Col className="skillSetName pb-md-3 pb-4">{data.name}</Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col className="col-md-9 col-12">
                    <Row>
                        {data.skills.map(skill => (<Col className="col-6 pb-4">
                            <ProgressBar className="skillsValue" animated now={skill.value} />
                            <Col className="skillName">{skill.name}</Col>
                        </Col>))}
                    </Row>

                </Col>
            </Row>
        </Col>
    );
}

export default SkillSet;
