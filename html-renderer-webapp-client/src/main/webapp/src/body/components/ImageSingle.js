import React, { Component } from 'react';
import Header3figure from './Header3figure';
import Caption from './Caption';

class ImageSingle extends Component {
  render() {
    return (
      <>
        <Header3figure />
        <img src="img/chart-1.svg" alt="chart" />
        <Caption />
        </>
    )
  }
}

export default ImageSingle;
