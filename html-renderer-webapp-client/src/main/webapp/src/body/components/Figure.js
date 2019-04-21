import React, { Component } from "react";

class Figure extends Component {
  render() {
    return (
      <figure className='figure-container'>
        <h3 className='figure-header'>
          Figure 1. An eccentric view of the USA
        </h3>
        <a href='#img-1'>
          <img src='img/map1.svg' alt='map' />
          <span className='expand-image'>
            <svg className='icn' style={{ fill: "#fff" }}>
              <title>Expand</title>
              <use xlinkHref='#arrows-open' />
            </svg>
          </span>
        </a>
      </figure>
    );
  }
}

export default Figure;
