import React, { useState } from 'react';
import {
  YAxis,
  XAxis,
  BarSeries,
  Rectangle,
  Tooltip,
  ChartProvider
} from 'rough-charts';

const data = [
  {
    name: 'React',
    x: 4,
    level: 'Advanced'
  },
  {
    name: 'Javascript',
    x: 4,
    level: 'Advanced'
  },
  {
    name: 'CSS',
    x: 3,
    level: 'Intermediate'
  },
  {
    name: 'HTML',
    x: 2,
    level: 'Beginner'
  }
];

const colors = ['#08fdd8'];

const SkillsGraph = (props) => {
  const [activeIndex, setIndex] = useState(-1);
  return (
    <ChartProvider data={data} {...props}>
      <YAxis tickCount={5} />
      <XAxis dataKey='name' />
      <BarSeries dataKey='x' options={{ fill: colors[0] }}>
        {(item, itemProps, index) => (
          <Rectangle
            key={index}
            {...itemProps}
            onMouseOver={() => {
              setIndex(index);
            }}
            options={{
              ...itemProps.options,
              fillStyle: activeIndex === index ? 'solid' : 'hachure',
              roughness: activeIndex === index ? 1 : 2
            }}
            onMouseOut={() => setIndex(-1)}
          />
        )}
      </BarSeries>
      <Tooltip>{({ name, level }) => `${name}: ${level}`}</Tooltip>
    </ChartProvider>
  );
};

export default SkillsGraph;
