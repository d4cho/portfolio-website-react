import React from 'react';
import workoutPic from '../../Assets/workout.png';
import twentyFortyEightPic from '../../Assets/2048.png';
import catanPic from '../../Assets/catan.png';
import opggPic from '../../Assets/opgg.png';
import vueBucketList from '../../Assets/vue_bucketlist.png';

import Tabs from './Sections/Tabs';

const IMAGES_AND_INFO = [
  {
    image: workoutPic,
    title: 'Workout Social Site',
    date: 'September 2020',
    description:
      'Social media website to share anything workout related; an application to track and analyze workouts.',
    purpose: 'React application using MERN stack.',
    link: 'https://pure-lowlands-51212.herokuapp.com/'
  },
  {
    image: opggPic,
    title: 'OP.GG Clone',
    date: 'June 2020',
    description:
      'Clone of a popular statistics website for the game, League of Legends. Search for "Wire Cutter" to check out in-game stats.',
    purpose:
      'The purpose of this project was to learn how to use public APIs, promise based HTTP requests, and implement a backend server.',
    link: 'https://floating-eyrie-52053.herokuapp.com/'
  },
  {
    image: twentyFortyEightPic,
    title: '2048 Game Clone',
    date: 'May 2020',
    description:
      'Clone of a game called 2048. The goal is to merge like-number tiles together to reach 2048.',
    purpose: 'First use of animations and other npm packages.',
    link: 'https://limitless-earth-37528.herokuapp.com/'
  },
  {
    image: catanPic,
    title: 'Catan Card Tracker',
    date: 'April 2020',
    description:
      'React application to track resource cards and development cards in a popular board game, Catan',
    purpose: '',
    link: 'https://infinite-fjord-57078.herokuapp.com/'
  },
  {
    image: vueBucketList,
    title: 'Mini Bucket List App',
    date: 'January 2021',
    description: 'A Simple bucket list app created with Vue.js and Express',
    purpose: '',
    link: 'https://mevn-simple-bucket-list-app.herokuapp.com/'
  }
];

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
      <Tabs info={IMAGES_AND_INFO} />
    </div>
  );
};

export default ProjectsPage;
