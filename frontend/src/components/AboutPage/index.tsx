import React from 'react';
import './AboutStyle.scss';
import NavBar from '../Navbar';
import Footer from '../Footer';
import GeneralInfo from '../GeneralInfoClass';

const AboutPage: React.FC = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <NavBar />
      <div className="aboutpage-container">
        <div id="quote">quote</div>
        <div id="mission">mission</div>
        <div id="algorithm">algorithm</div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
