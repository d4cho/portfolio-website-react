import React from 'react';
import { useMediaQuery } from 'react-responsive';
import logo from '../../Assets/logo.png';
import './LoadingPage.css';
import BarLoader from 'react-spinners/BarLoader';

const LoadingPage = () => {
  // media query hook
  const isSmallScreen = useMediaQuery({
    query: '(max-width: 960px)'
  });

  return (
    <div className='Background'>
      <div className='Container'>
        <div className='Items'>
          <img src={logo} style={{ width: '150px' }} />
        </div>
        <div className='Items'>
          <BarLoader
            height={3}
            width={isSmallScreen ? 200 : 800}
            color={'#69C9D0'}
            loading={true}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
