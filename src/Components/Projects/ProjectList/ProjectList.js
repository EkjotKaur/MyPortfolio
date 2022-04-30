import React from 'react';
import './ProjectList.scss';
import { BsThreeDotsVertical } from "react-icons/bs";


function Layout(props) {
    return (
        <div className="row">{props.children}</div>
    )
}

class Card extends React.Component {
    render() {
        const style = {
            img: {
                maxWidth: "400px"
            }
        }
        return (
            <div className="col-md-4">
                <div className="card hoverable">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img style={style.img} className="activator" src={this.props.data.image} />
                    </div>
                    <div className="card-content">
                        <div>
                            <StackIcons data={this.props.data.stack} />
                        </div>
                        <span className="card-title activator grey-text text-darken-4">
                            {this.props.data.project}
                            {this.props.data.website}
                            <BsThreeDotsVertical className='right' />
                            {/* <i className="material-icons right">more_vert</i> */}
                        </span>
                        <div>
                            {this.props.data.website && this.props.data.website !== "" && <span><a href={this.props.data.website}>Website</a></span>}
                            {this.props.data.github && this.props.data.github !== "" && <span><a className="github" href={this.props.data.github}>Github {this.props.data.github}</a></span>}
                        </div>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">{this.props.data.project}<i className="material-icons right">close</i></span>
                        <div><span className="status">{this.props.data.status}</span></div>
                        <p>{this.props.data.description}</p>
                        <p><strong>Need:</strong></p>
                        <p>{this.props.data.needs}</p>
                    </div>
                </div>
            </div>
        )
    }
}

// Note: Empty span tag on line 115 is there as placeholder for
// the custom CSS to inject text based on stack item.
function StackIcons(props) {
    const array = props.data;
    const icons = array.map((item) => {
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

function Projects(props) {
    const projects = [];
    const data = props.data;
    console.log(data);
    data.forEach((item) => { projects.push(<Card data={item} />) });
    return (
        <div className='row'>{projects}</div>
    )
}

const ProjectList = () => {
    return <Layout children={<Projects />} />
}

export default ProjectList;


