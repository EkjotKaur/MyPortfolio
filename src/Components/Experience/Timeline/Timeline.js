import "./Timeline.scss";

const Timeline = ({ experience, title }) => {
    return (
        <div className="Timeline">
            <div class="timeline">
                {experience.map((exp, i) => {
                    if (i % 2 === 1) {
                        return (
                            <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                                <div class="timeline__event__icon">
                                    <img src={exp.img} alt="" className="avatar-exp" />
                                </div>
                                <div class="timeline__event__date">
                                    <div>{exp.start}</div>
                                    {/* <div>to</div>
                                <div>{exp.end}</div> */}
                                </div>
                                <div class="timeline__event__content">
                                    <div class="timeline__event__title">{exp.title}</div>
                                    <div class="timeline__event__position">{exp.position}</div>
                                    <div class="timeline__event__description">
                                        <div>
                                            {exp.body.map((body) => (
                                                <li class="six"> {body} </li>
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
                                    <img src={exp.img} alt="" className="avatar-exp" />
                                </div>
                            </div>
                            <div class="timeline__event__date">
                                <div>{exp.start}</div>
                                {/* <div>to</div>
                            <div>{exp.end}</div> */}
                            </div>
                            <div class="timeline__event__content">
                                <div class="timeline__event__title">{exp.title}</div>
                                <div class="timeline__event__position">{exp.position}</div>
                                <div class="timeline__event__description">
                                    <div>
                                        {exp.body.map((body) => (
                                            <li class="six"> {body} </li>
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
