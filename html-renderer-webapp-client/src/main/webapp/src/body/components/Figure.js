import React from "react";
import Header3figure from './Header3figure';
// FUNCTIONAL component
const Figure = () => {
  return (
    <figure className='figure-container'>
      <Header3figure />
      {/* <h3 className='figure-header'>Figure 1. Nomophobia illustrated.</h3> */}
      <a href='#img-1'>
        {/* <img src='img/map1.svg' alt='map' /> */}
        <img src='img/nomophobia.png' alt="info graphic" />
        <span className='expand-image'>
          <svg className='icn' style={{ fill: "#fff" }}>
            <title>Expand</title>
            <use xlinkHref='#arrows-open' />
          </svg>
        </span>
      </a>
    </figure>
  );
};

export default Figure;
