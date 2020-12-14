import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LoadingPage from '../LoadingPage/LoadingPage';

const AboutPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  // const resumeClicked = () => {
  //   setIsLoading(true);
  //   setTimeout(function () {
  //     setIsLoading(false);
  //   }, 2000);
  // };

  return (
    <div>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className='Background'>
          <div className='Main'>
            <div className='Greeting'>
              <span className='Greeting-child'>
                <span className='Heading-animated'>A</span>
                <span className='Heading-animated'>b</span>
                <span className='Heading-animated'>o</span>
                <span className='Heading-animated'>u</span>
                <span className='Heading-animated'>t</span>
                <span className='Heading-animated'>&nbsp;</span>
                <span className='Heading-animated'>m</span>
                <span className='Heading-animated'>e</span>
              </span>
              <div className='About-me-p-container'>
                <p className='About-me-p'>
                  Professionally experienced in diverse industries and driven to
                  succeed in web development and information technology.
                </p>
                <p className='About-me-p'>
                  Quick self-learner, well-organized person, problem solver with
                  high attention to detail. Fan of lifting weights, video games,
                  and recently, outdoor camping.
                </p>
                <p className='About-me-p'>
                  Interested in the entire spectrum from frontend to backend and
                  working on ambitious projects with positive people.
                </p>
              </div>
            </div>
            <br />
            <br />
            {/* <div className='Contact' onClick={resumeClicked}>
              <a href='../../Assets/Daniel_Cho_Resume.pdf'>Resume</a>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
