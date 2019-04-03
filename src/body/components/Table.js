import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div className="table-container table-xl">
        <h3 className="figure-header">
          Figure 1. Vallourec commercial paper issuance
        </h3>
        <img
          className="img-responsive img-rounded"
          src="img/full-screen.png"
          alt="table"
        />
        <p className="caption">Caption text</p>
        <p className="caption">Source: Banque de France</p>
      </div>
    );
  }
}

export default Table;
