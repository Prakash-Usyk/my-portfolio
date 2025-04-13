import React from 'react';
import About from '../components/about';
import Header from '../components/header';
import Services from '../components/services';
import Skill from '../components/skills';
import './index.css';
import Footer from '../components/footer';

const HomePage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Skill />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
