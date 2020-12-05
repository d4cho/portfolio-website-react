import React, { useState } from 'react';

import ProjectCard from './ProjectCard';

const Tabs = (props) => {
  console.log(props);

  const [activeTab, setActiveTab] = useState(1);

  const tabClickedHandler = (event) => {
    setActiveTab(event.currentTarget.id);
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <div className='tabs-container'>
        <div
          onClick={tabClickedHandler}
          id={1}
          style={
            activeTab == 1
              ? { color: 'black', backgroundColor: '#08fdd8' }
              : null
          }>
          Workout Social Site
        </div>
        <div
          onClick={tabClickedHandler}
          id={2}
          style={
            activeTab == 2
              ? { color: 'black', backgroundColor: '#08fdd8' }
              : null
          }>
          OP.GG Clone (League of Legends)
        </div>
        <div
          onClick={tabClickedHandler}
          id={3}
          style={
            activeTab == 3
              ? { color: 'black', backgroundColor: '#08fdd8' }
              : null
          }>
          2048 Game Clone
        </div>
        <div
          onClick={tabClickedHandler}
          id={4}
          style={
            activeTab == 4
              ? { color: 'black', backgroundColor: '#08fdd8' }
              : null
          }>
          Catan Card Tracker
        </div>
        <div
          onClick={tabClickedHandler}
          id={5}
          style={
            activeTab == 5
              ? { color: 'black', backgroundColor: '#08fdd8' }
              : null
          }>
          Tic Tac Toe
        </div>
      </div>
      <div className='Projects-parent-project-page'>
        <ProjectCard image={props.images[activeTab - 1]} />
      </div>
    </div>
  );
};

export default Tabs;
