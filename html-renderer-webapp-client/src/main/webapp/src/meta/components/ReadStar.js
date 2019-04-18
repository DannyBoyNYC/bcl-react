import React, { Component } from 'react';

class ReadStart extends Component {
  render() {
    return (
      <div className="svg-star">
        <svg className="icn">
          <title>Reading Time</title>
          <use xlinkHref="#icn-star" />
        </svg>
        7 min read
      </div>
    );
  }
}

export default ReadStart;
