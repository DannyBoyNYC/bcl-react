import React from "react";
// FUNCTIONAL component
const Figure = () => {
  // const renderOverlay = event => {
  //   console.log("made it");
  // };
  return (
    <figure className='figure-container'>
      <h3 className='figure-header'>Figure 1. An eccentric view of the USA</h3>
      <a href='#img-1'>
        {/* <img src='img/map1.svg' alt='map' /> */}
        <img src='img/nomophobia.png' />
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
