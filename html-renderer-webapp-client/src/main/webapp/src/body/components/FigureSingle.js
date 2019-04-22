import React, { Component } from 'react';

import Figure from './Figure';
import Caption from './Caption';

class SingleFigure extends Component {
  render() {
    return (
      <div className="table-container">
        <Figure />
      </div>
    );
  }
}

export default SingleFigure;
