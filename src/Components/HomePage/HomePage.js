import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='Background'>
      <div className='Main'>
        <div className='Greeting'>
          <div className='Greeting-child'>
            <div className='Text-animated'>H</div>
            <div className='Text-animated'>i</div>
            <div className='Text-animated'>,</div>
          </div>
          <div className='Greeting-child'>
            <div className='Text-animated'>I</div>
            <div className='Text-animated'>'</div>
            <div className='Text-animated'>m</div>
            &nbsp;
            <div className='Text-animated'>D</div>
            <div className='Text-animated'>a</div>
            <div className='Text-animated'>n</div>
            <div className='Text-animated'>i</div>
            <div className='Text-animated'>e</div>
            <div className='Text-animated'>l</div>
            <div className='Text-animated'>,</div>
          </div>
          <div className='Greeting-child'>
            <div className='Text-animated'>w</div>
            <div className='Text-animated'>e</div>
            <div className='Text-animated'>b</div>
            &nbsp;
            <div className='Text-animated'>d</div>
            <div className='Text-animated'>e</div>
            <div className='Text-animated'>v</div>
            <div className='Text-animated'>e</div>
            <div className='Text-animated'>l</div>
            <div className='Text-animated'>o</div>
            <div className='Text-animated'>p</div>
            <div className='Text-animated'>e</div>
            <div className='Text-animated'>r</div>
            <div className='Text-animated'>.</div>
          </div>
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
