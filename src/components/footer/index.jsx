import MenuIcon from '@mui/icons-material/Menu';
import './index.css';
import profile from '../../assets/profilr-pic-linkedin.jpg';
import side_img from '../../assets/services-img-1.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Button from '@mui/material/Button';

const Footer = () => {
  return (
    <div className="service">
      <div className="container add-on-skill-container">
        <div className="into-service add-on-footer-cls">
          <div className="footer-name-bar">
            <h2>Prakash Sekar</h2>
          </div>

          <div className="footer-secondary-bar">
            <Button variant="outlined" className="btn btn-primary btn-outline">
              About
            </Button>
            <Button variant="outlined" className="btn btn-primary btn-outline">
              Services
            </Button>
            <Button variant="outlined" className="btn btn-primary btn-outline">
              Projects
            </Button>
            {/* <a href="/">
              <span role="img" aria-label="about us"></span>
              About
            </a>
            <a href="/">
              <span role="img" aria-label="price"></span>
              Services
            </a>
            <a href="/">
              <span role="img" aria-label="contact"></span>
              Projects
            </a> */}
          </div>
          <div className="social-media-icons add-on-footer-cls-social-media">
            <GitHubIcon />
            <LinkedInIcon />
            <TwitterIcon />
          </div>
          <div className="footer-rights">
            <CopyrightIcon />
            <h4>All Rights Reserved</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
