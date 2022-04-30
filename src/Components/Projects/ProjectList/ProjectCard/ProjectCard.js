import React from 'react';
import { Col, Card } from 'react-bootstrap';
import './ProjectCard.scss';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
// import {  } from 'ui-neumorphism';

const StackIcons = ({ data }) => {
    const icons = data.map((item) => {
        return (
            <div key={item} className="icon">
                <span className={item}><span /></span>
            </div>
        );
    });

    return (
        <div> {icons} </div>
    )
}

const ProjectCard = ({ data }) => {
    return (
        <Col className='col-lg-4 col-md-6 col-12 card-col'>
            <Card>
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                    <Card.Title>
                        <StackIcons data={data.stack} />
                        <div className="project-title pt-3">
                            {/* {this.props.data.project} */}
                            {data.title}
                            {/* <BsThreeDotsVertical className='threedotsicon' /> */}
                            {/* <i className="material-icons right">more_vert</i> */}
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <div className="project-body">
                            {data.body.map(item => <div className="py-1"> <IoIosArrowDroprightCircle class="icon-exp icon-project" /> {item} </div>
                            )}
                        </div>
                        <div>
                            {data.website && (<span className='pe-3 project-link'><a href={data.website}><AiOutlineLink /></a></span>)}
                            {data.github && (<span className="project-link"><a href={data.github}><AiFillGithub /></a></span>)}
                        </div>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>


        </Col >

    )
}

export default ProjectCard;