import { useEffect } from 'react';
import './index.css';
import CircularWithValueLabel from './progressbar';
import { useInView } from 'react-intersection-observer';

const Skill = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only run once
    threshold: 0.3, // 30% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      const start = performance.now();
      const animate = (now) => {
        const elapsed = now - start;
        const progressValue = Math.min((elapsed / duration) * target, target);
        setProgress(progressValue);
        if (progressValue < target) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView]);

  return (
    <div className="service" ref={ref}>
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
            <h4 className="progress-bar">Graphic Design</h4>
            <div className="progress-bar">
              <CircularWithValueLabel value={75} color="success" />
            </div>
          </div>
          <div>
            <h4 className="progress-bar">Front End</h4>
            <div className="progress-bar">
              <CircularWithValueLabel value={90} color="warning" />
            </div>
          </div>
          <div>
            <h4 className="progress-bar">Back End</h4>
            <div className="progress-bar">
              <CircularWithValueLabel value={80} color="primary" />
            </div>
          </div>
          <div>
            <h4 className="progress-bar">DevOps</h4>
            <div className="progress-bar">
              <CircularWithValueLabel value={60} color="secondary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
