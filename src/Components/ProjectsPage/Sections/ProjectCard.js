import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';

import DescriptionCard from './DescriptionCard';

const ProjectCard = (props) => {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  return (
    <div onClick={() => setFlipped(!flipped)}>
      <a.div
        className='flipping-pic'
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}>
        <img className='img' src={props.image} alt='img' />
      </a.div>
      <a.div
        className='flipping-pic'
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`)
        }}>
        <DescriptionCard
          title={props.title}
          date={props.date}
          description={props.description}
          purpose={props.purpose}
          link={props.link}
        />
      </a.div>
    </div>
  );
};

export default ProjectCard;
