import React from 'react';
import About from '../components/about';
import Header from '../components/header';
import Services from '../components/services';
import Skill from '../components/skills';
import './index.css';
import Footer from '../components/footer';

const ServicesPage = () => {
  return (
    <div>
      <div>
        <Header renderbackground={false} />
      </div>

      <div className="extra-margin">
        <Services />
      </div>
      <div>
        <Skill />
      </div>
      <div className="footer-cls">
        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
