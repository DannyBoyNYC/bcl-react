import React, { Component } from 'react';

class ChapterLinks extends Component {
  render() {
    return (
      <div className="chapter-links">
        <a href="#0">
          <svg className="icn">
            <title>Previous</title>
            <use href="#arrow-left" />
          </svg>
          Previous
        </a>
        <a href="#0">
          Next
          <svg className="icn">
            <title>Next</title>
            <use href="#arrow-right" />
          </svg>
        </a>
      </div>
    );
  }
}

export default ChapterLinks;
