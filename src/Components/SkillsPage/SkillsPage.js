import React from 'react';
import { Link } from 'react-router-dom';

import SkillsGraph from './sections/SkillsGraph';

const SkillsPage = () => {
  return (
    <div className='Background-skills-page'>
      <div className='Main-skills-page'>
        <div className='Greeting-skills-page'>
          <span className='Greeting-child-skills-page'>
            <span className='Heading-animated'>S</span>
            <span className='Heading-animated'>k</span>
            <span className='Heading-animated'>i</span>
            <span className='Heading-animated'>l</span>
            <span className='Heading-animated'>l</span>
            <span className='Heading-animated'>s</span>
            <span className='Heading-animated'>&nbsp;</span>
            <span className='Heading-animated-red'>&amp;</span>
          </span>
          <span className='Greeting-child-skills-page'>
            <span className='Heading-animated'>E</span>
            <span className='Heading-animated'>x</span>
            <span className='Heading-animated'>p</span>
            <span className='Heading-animated'>e</span>
            <span className='Heading-animated'>r</span>
            <span className='Heading-animated'>i</span>
            <span className='Heading-animated'>e</span>
            <span className='Heading-animated'>n</span>
            <span className='Heading-animated'>c</span>
            <span className='Heading-animated'>e</span>
          </span>
          <div className='About-me-p-container'>
            <p className='About-me-p'>
              React, Javascript, CSS, HTML, building small and medium-sized full
              stack apps.
            </p>
            <p className='About-me-p'>
              Experienced with MERN stack applications.
            </p>
            <p className='About-me-p'>
              Check out my{' '}
              {
                <a href='https://github.com/d4cho' style={{ color: '#08fdd8' }}>
                  github
                </a>
              }{' '}
              or{' '}
              {
                <Link to='/contact' style={{ color: '#08fdd8' }}>
                  contact
                </Link>
              }{' '}
              me.
            </p>
          </div>
        </div>
        <br />
        <br />
        <Link to='/projects' style={{ textDecoration: 'none' }}>
          <div className='Contact'>My work</div>
        </Link>
      </div>
      <div className='Chart-skills-page'>
        <SkillsGraph />
      </div>
    </div>
  );
};

export default SkillsPage;
