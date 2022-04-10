import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from '../../Styling/ChangingProgressProvider';
import './Circle.css';

const Circle = ({ value, text }) => {

    return (
        <div className='circle-progress'>
            <ChangingProgressProvider values={[0, value]}>
                {percentage => (
                    <CircularProgressbar value={percentage} text={`${percentage}%`}
                        strokeWidth={20}
                        styles={buildStyles({
                            textColor: "white",
                            pathColor: "#1e847f",
                            trailColor: "white",
                            strokeLinecap: 'butt',
                        })} />
                )}
            </ChangingProgressProvider>

        </div>
    );
}

export default Circle;
