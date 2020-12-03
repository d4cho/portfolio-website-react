import React, { useState } from 'react';

import ProjectCard from './ProjectCard';

const Tabs = (props) => {
  console.log(props);

  const [activeTab, setActiveTab] = useState(1);

  const tabClickedHandler = (event) => {
    setActiveTab(event.currentTarget.id);
  };

  return (
    <div>
      <div className='tabs-container'>
        <div
          onClick={tabClickedHandler}
          id={1}
          style={
            activeTab == 1
              ? { color: 'black', backgroundColor: '#08fdd8' }
              : null
          }>
          project 1
        </div>
        <div
          onClick={tabClickedHandler}
          id={2}
          style={
            activeTab == 2
              ? { color: 'black', backgroundColor: '#08fdd8' }
              : null
          }>
          project 2
        </div>
        <div
          onClick={tabClickedHandler}
          id={3}
          style={
            activeTab == 3
              ? { color: 'black', backgroundColor: '#08fdd8' }
              : null
          }>
          project 3
        </div>
        <div
          onClick={tabClickedHandler}
          id={4}
          style={
            activeTab == 4
              ? { color: 'black', backgroundColor: '#08fdd8' }
              : null
          }>
          project 4
        </div>
        <div
          onClick={tabClickedHandler}
          id={5}
          style={
            activeTab == 5
              ? { color: 'black', backgroundColor: '#08fdd8' }
              : null
          }>
          project 5
        </div>
      </div>
      <div className='Projects-parent-project-page'>
        <ProjectCard image={props.images[activeTab - 1]} />
      </div>
    </div>
  );
};

export default Tabs;
