import React, { Component } from 'react';

class Headline extends Component {
  render() {
    return <h1 className="headline">{this.props.headline}</h1>;
  }
}

export default Headline;
