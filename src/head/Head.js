import React, { Component } from 'react';
import Toc from './Toc';
import Main from './Main';

class Head extends Component {
  render() {
    return (
      <>
        <Toc />
        <Main />
      </>
    );
  }
}

export default Head;
