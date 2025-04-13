import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import './index.css';
import ChangingProgressProvider from './ChangingProgressProvider';

const Skill = () => {
  return (
    <div className="service">
      {/* <div className="row text-center">
        <h2 className="header add-on-background-txt">Services</h2>
      </div> */}
      <div className="container add-on-skill-container">
        <div className="into-service add-on-into-service">
          <span className="into-service-card add-on-into-service-card">
            Skills
          </span>
          <h2>My Skills</h2>
        </div>
        <div className="skills-progress-bar-container">
          <div>
            <h4>Graphic Design</h4>

            <div style={{ width: 100, height: 100 }}>
              <ChangingProgressProvider values={[0, 20, 80]}>
                {(value) => (
                  <CircularProgressbar
                    value={90}
                    text={`${90}%`}
                    circleRatio={0.4}
                    styles={buildStyles({
                      rotation: 1 / 2 + 1 / 8,
                      strokeLinecap: 'butt',
                      trailColor: '#eee',
                      textColor: '#049dff',
                      pathColor: '#049dff',
                    })}
                  />
                )}
              </ChangingProgressProvider>
            </div>
          </div>
          <div>
            <h4>Front End</h4>
            <div style={{ width: 100, height: 100 }}>
              <ChangingProgressProvider values={[0, 20, 80]}>
                {(value) => (
                  <CircularProgressbar
                    value={90}
                    text={`${90}%`}
                    circleRatio={0.4}
                    styles={buildStyles({
                      rotation: 1 / 2 + 1 / 8,
                      strokeLinecap: 'butt',
                      trailColor: '#eee',
                      textColor: '#ed687c',
                      pathColor: '#ed687c',
                    })}
                  />
                )}
              </ChangingProgressProvider>
            </div>
          </div>
          <div>
            <h4>Back End</h4>
            <div style={{ width: 100, height: 100 }}>
              <ChangingProgressProvider values={[0, 20, 80]}>
                {(value) => (
                  <CircularProgressbar
                    value={100}
                    text={`${100}%`}
                    circleRatio={0.4}
                    styles={buildStyles({
                      rotation: 1 / 2 + 1 / 8,
                      strokeLinecap: 'butt',
                      trailColor: '#eee',
                      textColor: '#ed687c',
                      pathColor: '#ed687c',
                    })}
                  />
                )}
              </ChangingProgressProvider>
            </div>
          </div>
          <div>
            <h4>DevOps</h4>
            <div style={{ width: 100, height: 100 }}>
              <ChangingProgressProvider values={[0, 20, 80]}>
                {(value) => (
                  <CircularProgressbar
                    value={90}
                    text={`${90}%`}
                    circleRatio={0.4}
                    styles={buildStyles({
                      rotation: 1 / 2 + 1 / 8,
                      // strokeLinecap: 'butt',
                      trailColor: '#eee',
                      textColor: '#1abc9c',
                      pathColor: '#1abc9c',
                    })}
                  />
                )}
              </ChangingProgressProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
