import React, { Component } from 'react';
import styled from 'styled-components';

const PremierDiv = styled.div`
  margin-bottom: 2rem;
  h3,
  h4 {
    margin: 0.5rem;
    margin-left: 0;
  }
  button {
    padding: 0.5rem;
    background: #007eb6;
    color: white;
    font-size: 1rem;
  }
`;

class PremierEvent extends Component {
  render() {
    return (
      <PremierDiv>
        <h3>Thursday, June 27, 2019</h3>
        <h4>12:00pm - 2:00pm</h4>
        <h4>1745 7th Avenue, New York</h4>
        <button>Request Invitation</button>
      </PremierDiv>
    );
  }
}

export default PremierEvent;
