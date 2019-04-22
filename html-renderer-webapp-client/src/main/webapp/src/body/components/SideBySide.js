import React, { Component } from 'react';

import Figure from './Figure';

class SideBySide extends Component {
  render() {
    return (
      <div className="side-by-side-container">
        <div className="sidebyside first">
          <Figure />
        </div>
        <div className="sidebyside">
          <Figure />
        </div>
      </div>
    );
  }
}

export default SideBySide;
