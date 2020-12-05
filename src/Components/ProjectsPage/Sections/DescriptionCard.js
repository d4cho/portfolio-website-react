import React from 'react';

const DescriptionCard = (props) => {
  return (
    <div className='Description-container'>
      <div style={{ fontSize: '2rem', color: '#08fdd8' }}>{props.title}</div>
      <div>{props.date}</div>
      <div>{props.description}</div>
      <div>{props.purpose}</div>
      <div>
        Check out{' '}
        <a href={props.link} target='_blank' style={{ color: '#08fdd8' }}>
          this project
        </a>
        .
      </div>
    </div>
  );
};

export default DescriptionCard;
