import React, { Component } from 'react';

class Date extends Component {
  render() {
    return <date className={this.props.className}>{this.props.date}</date>;
  }
}

export default Date;
