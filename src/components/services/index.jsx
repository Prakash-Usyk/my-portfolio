import MenuIcon from '@mui/icons-material/Menu';
import './index.css';
import profile from '../../assets/profilr-pic-linkedin.jpg';
import side_img from '../../assets/services-img.jpg';

const Services = () => {
  return (
    <div className="service">
      <div className="row text-center">
        <h2 className="header add-on-background-txt">Services</h2>
      </div>
      <div className="container add-on-service-container">
        <div className="service-container-left">
          <div className="into-service">
            <span className="into-service-card">My Services</span>
            <h2>Here Are Some of My Skills</h2>
          </div>
          <div>
            <div className="services-skills-tab1">
              <div className="services-animate-box">
                <h3>1 - Graphic Design</h3>
                <ul>
                  <li>UI Design</li>
                  <li>Website &amp; Digital Design</li>
                  <li>Brading &amp; Visual Identity</li>
                  <li>Print Design</li>
                </ul>
              </div>

              <div className="services-animate-box">
                <h3>1 - Graphic Design</h3>
                <ul>
                  <li>UI Design</li>
                  <li>Website &amp; Digital Design</li>
                  <li>Brading &amp; Visual Identity</li>
                  <li>Print Design</li>
                </ul>
              </div>
            </div>
            <div className="services-skills-tab2">
              <div className="services-animate-box">
                <h3>1 - Graphic Design</h3>
                <ul>
                  <li>UI Design</li>
                  <li>Website &amp; Digital Design</li>
                  <li>Brading &amp; Visual Identity</li>
                  <li>Print Design</li>
                </ul>
              </div>
              <div className="services-animate-box">
                <h3>1 - Graphic Design</h3>
                <ul>
                  <li>UI Design</li>
                  <li>Website &amp; Digital Design</li>
                  <li>Brading &amp; Visual Identity</li>
                  <li>Print Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="service-container-right">
          <img src={side_img} alt="Profile" className="profile-pic" />
        </div>
      </div>
    </div>
  );
};

export default Services;
