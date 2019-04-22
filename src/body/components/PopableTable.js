import React, { Component } from 'react';

class PopableTable extends Component {
  render() {
    return (
      <div className="table-container popable">
        <figure className="figure-container">
          <h3 className="figure-header">
            Figure 1. An eccentric view of the USA
          </h3>
          <a href="#img-1">
            <img src="img/map1.svg" alt="map" />
            <span className="expand-image">
              <svg className="icn">
                <title>Expand</title>
                <use xlinkHref="#arrows-open" />
              </svg>
            </span>
          </a>
        </figure>
        <p className="caption">
          Caption text Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Unde nesciunt nemo est optio laudantium sed eveniet praesentium maxime
          fuga eaque, corrupti reiciendis ipsum sit quo veritatis, voluptatibus
          corporis dolorum ex!
        </p>
        <p className="caption source">Source: Banque de France</p>
      </div>
    );
  }
}

export default PopableTable;