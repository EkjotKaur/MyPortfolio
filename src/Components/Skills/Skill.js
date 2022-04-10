import './Skills.css';
import { Container, Row } from 'react-bootstrap';
import SkillSet from './SkillSet/SkillSet';
import SkillsData from '../../Data/Skills/Skills';
import Heading from '../Heading/Heading';

const Skills = () => {

    return (
        <div className="Skills mt-5">
            <Container>
                {/* <h1>Skills</h1> */}
                <Heading name="Skills" />
                <div className='Skills-div'>
                    <Row className='flex-column '>
                        {SkillsData.map(data => <SkillSet data={data} />)}
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Skills;
