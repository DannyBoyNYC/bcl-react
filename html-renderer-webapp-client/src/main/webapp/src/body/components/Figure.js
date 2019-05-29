import React from 'react';
import Header3figure from './Header3figure';
import ImageExpandIcon from './ImageExpandIcon';
import Caption from './Caption';

// Note FUNCTIONAL component
const Figure = () => {
  return (
    <figure className="figure-container">
      <Header3figure />
      {/* <img src='img/map1.svg' alt='map' /> */}
      {/* <img src="img/chart-1.svg" alt="chart" /> */}
      <img src="img/nomophobia.png" alt="info graphic" />
      <ImageExpandIcon />
      <Caption />
    </figure>
  );
};

export default Figure;
