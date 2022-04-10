import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProjectCard from './ProjectList/ProjectCard/ProjectCard';
import ProjectData from '../../Data/Projects/Projects';
import './Projects.css'
import Heading from '../Heading/Heading';

const Projects = () => {
    return (
        <div className="py-5 mt-5">
            <Container>
                {/* <ProjectList /> */}
                <Heading name="Projects" />
                <Row className="projects-row">
                    {ProjectData.map((data) => <ProjectCard data={data} />)}
                </Row>
            </Container>

        </div>

    )
}

export default Projects;