import React, { Component } from "react";
import Analyst from "./sub/Analyst";

class BylineLarge extends Component {

  render() {
    const data = this.props.data;
    return (
      <div className='byline-lg byline'>
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
