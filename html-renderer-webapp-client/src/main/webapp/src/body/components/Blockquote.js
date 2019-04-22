import React, { Component } from 'react';

class Blockquote extends Component {
  render() {
    return (
      <blockquote>
        <q>
          No economic agent likes uncertainty. They don't invest, they don't
          hire, they don't make decisions in times of uncertainty.
        </q>
        <p className="attribution">- George Washington</p>
      </blockquote>
    );
  }
}

export default Blockquote;
