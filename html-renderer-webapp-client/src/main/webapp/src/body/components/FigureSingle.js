import React, { Component } from "react";

import Figure from "./Figure";

class SingleFigure extends Component {
  render() {
    return (
      <div className='table-container'>
        {/* <img src='img/chart-1.svg' alt='chart' /> */}
        <Figure />
      </div>
    );
  }
}

export default SingleFigure;
