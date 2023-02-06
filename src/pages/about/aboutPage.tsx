import React from 'react';
import './aboutstyle.css';

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className='flex'>
      <div className="animated-title">
        <div className="text-top">
          <div>
            <span>Hi! I am Shrddha Thakker</span>
          </div>
        </div>
        <div className="text-bottom">
          <div> SOFTWARE ENGINEER</div>
        </div>
      </div>
      <div className='alignImg'>
        <img src={require('../../assets/images/shrddhaimg.jpg')} width="250" height="300" />
      </div>
    </div>
  );
};

export default AboutPage;