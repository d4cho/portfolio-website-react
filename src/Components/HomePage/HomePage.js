import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='Background'>
      <div className='Main'>
        <div className='Greeting'>
          <span className='Greeting-child'>
            <span className='Text-animated'>H</span>
            <span className='Text-animated'>i</span>
            <span className='Text-animated-special'>,</span>
          </span>
          <span className='Greeting-child'>
            <span className='Text-animated'>I</span>
            <span className='Text-animated-special'>'</span>
            <span className='Text-animated'>m</span>
            <span className='Text-animated'>&nbsp;</span>
            <span className='Text-animated-special'>D</span>
            <span className='Text-animated'>a</span>
            <span className='Text-animated'>n</span>
            <span className='Text-animated'>i</span>
            <span className='Text-animated'>e</span>
            <span className='Text-animated'>l</span>
            <span className='Text-animated-special'>,</span>
          </span>
          <span className='Greeting-child'>
            <span className='Text-animated'>w</span>
            <span className='Text-animated'>e</span>
            <span className='Text-animated'>b</span>
            <span className='Text-animated'>&nbsp;</span>
            <span className='Text-animated'>d</span>
            <span className='Text-animated'>e</span>
            <span className='Text-animated'>v</span>
            <span className='Text-animated'>e</span>
            <span className='Text-animated'>l</span>
            <span className='Text-animated'>o</span>
            <span className='Text-animated'>p</span>
            <span className='Text-animated'>e</span>
            <span className='Text-animated'>r</span>
            <span className='Text-animated-special'>.</span>
          </span>
        </div>
        <br />
        <div className='Title'>React Developer / Full Stack</div>
        <br />
        <br />
        <Link to='/loading' style={{ textDecoration: 'none' }}>
          <div className='Contact'>Contact me!</div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
