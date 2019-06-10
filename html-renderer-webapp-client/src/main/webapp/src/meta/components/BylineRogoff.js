import React, { Component } from 'react';
import Analyst from './sub/Analyst';

class BylineLarge extends Component {
  render() {
    const rogoffStyles = {
      marginLeft: '-190' + 'px',
      float: 'left',
    };

    const data = this.props.data;
    return (
      <div className="byline-lg byline" style={rogoffStyles}>
        <ul>
          {Object.keys(data.analysts).map(key => (
            <Analyst key={key} index={key} analyst={data.analysts[key]} />
          ))}
        </ul>
      </div>
    );
  }
}

export default BylineLarge;
