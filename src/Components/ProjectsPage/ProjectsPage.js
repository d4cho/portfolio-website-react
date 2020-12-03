import React from 'react';
import workoutPic from '../../Assets/workout.png';
import twentyFortyEightPic from '../../Assets/2048.png';
import catanPic from '../../Assets/catan.png';
import opggPic from '../../Assets/opgg.png';
import tttPic from '../../Assets/ttt.JPG';

import Tabs from './Sections/Tabs';

const IMAGES = [workoutPic, opggPic, twentyFortyEightPic, catanPic, tttPic];

const ProjectsPage = () => {
  return (
    <div className='Container-project-page'>
      <span className='Greeting-child-project-page'>
        <span className='Heading-animated'>M</span>
        <span className='Heading-animated'>y</span>
        <span className='Heading-animated'>&nbsp;</span>
        <span className='Heading-animated'>p</span>
        <span className='Heading-animated'>r</span>
        <span className='Heading-animated'>o</span>
        <span className='Heading-animated'>j</span>
        <span className='Heading-animated'>e</span>
        <span className='Heading-animated'>c</span>
        <span className='Heading-animated'>t</span>
        <span className='Heading-animated'>s</span>
      </span>
      <Tabs images={IMAGES} />
    </div>
  );
};

export default ProjectsPage;
