import React, { Component } from 'react';

class BylineSmall extends Component {
  render() {
    return (
      <div className="byline-sm byline">
        <span
          itemScope=""
          itemType="http://schema.org/Person"
          itemProp="author"
        >
          <a rel="author" href="#single">
            <span itemProp="name">Harry Mateer, </span>
          </a>
        </span>

        <span
          itemScope=""
          itemType="http://schema.org/Person"
          itemProp="author"
        >
          <a rel="author" href="#single">
            <span itemProp="name">Bradley Rogoff, CFA, </span>
          </a>
        </span>

        <span>
          and
          <a href="#multiples"> 3 more</a>
        </span>
      </div>
    );
  }
}

export default BylineSmall;
