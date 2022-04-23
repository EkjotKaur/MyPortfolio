import "./Timeline.scss";
import { Row, Col } from 'react-bootstrap'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const Timeline = ({ experience, title }) => {
    return (
        <div className="Timeline">
            <div class="timeline">
                {experience.map((exp, i) => {
                    if (i % 2 === 1) {
                        return (
                            <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                                <div class="timeline__event__icon">
                                    {/* <img src={exp.img} alt="" className="avatar-exp" /> */}
                                </div>
                                <div class="timeline__event__date">
                                    <div>{exp.start}</div>
                                    {exp.start !== exp.end && <div class="exp-to px-lg-0 px-3">to</div>}
                                    {exp.start !== exp.end && <div class="exp-end">{exp.end}</div>}
                                    {/* <div>to</div>
                                <div>{exp.end}</div> */}
                                </div>
                                <div class="timeline__event__content">
                                    <div className="row-exp">
                                        <div className="logo-exp me-3"><img src={exp.img} alt="logo" className="avatar-exp" /></div>
                                        <div className="heading-exp">
                                            <div class="timeline__event__title">{exp.title}</div>
                                            <div class="timeline__event__position">{exp.position}</div>
                                        </div>
                                    </div>
                                    <div class="timeline__event__description">
                                        <div>
                                            {exp.body.map((body) => (
                                                <div className="py-1"> <IoIosArrowDroprightCircle class="icon-exp" /> {body} </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    return (
                        <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                            <div class="timeline__event__icon">
                                <div class="timeline__event__icon">
                                    {/* <img src={exp.img} alt="" className="avatar-exp" /> */}
                                </div>
                            </div>
                            <div class="timeline__event__date">
                                <div>{exp.start}</div>
                                {exp.start !== exp.end && <div class="exp-to px-lg-0 px-3">to</div>}
                                {exp.start !== exp.end && <div class="exp-end">{exp.end}</div>}
                                {/* <div>to</div>
                            <div>{exp.end}</div> */}
                            </div>
                            <div class="timeline__event__content">
                                <div className="row-exp">
                                    <div className="logo-exp me-3"><img src={exp.img} alt="logo" className="avatar-exp" /></div>
                                    <div className="heading-exp">
                                        <div class="timeline__event__title">{exp.title}</div>
                                        <div class="timeline__event__position">{exp.position}</div>
                                    </div>
                                </div>
                                <div class="timeline__event__description">
                                    <div>
                                        {exp.body.map((body) => (
                                            <div className="py-1"> <IoIosArrowDroprightCircle class="icon-exp" /> {body} </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;
