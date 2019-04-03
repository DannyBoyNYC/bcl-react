import React, { Component } from 'react';

class SideBySide extends Component {
  render() {
    return (
      <div className="side-by-side-container">
        <div className="sidebyside first">
          <h3 className="figure-header">
            <span>FIGURE 1.</span> Russia Slowdown.
          </h3>
          <img src="img/chart-2.svg" alt="" />
          <p className="caption">
            Caption for the left side. Made extra long for multiple line
            testing.
          </p>
          <p className="caption">Source</p>
        </div>

        <div className="sidebyside">
          <h3 className="figure-header">
            <span>FIGURE 2.</span> Russia Slowdown in inflation supports key
            rate cuts
          </h3>
          <img src="img/chart-3.svg" alt="" />
          <p className="caption">
            Caption for the right side. Made extra long for multiple line
            testing.
          </p>
          <p className="caption">Source</p>
        </div>
      </div>
    );
  }
}

export default SideBySide;
