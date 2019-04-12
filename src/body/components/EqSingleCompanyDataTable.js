import React, { Component } from 'react';

class EqSingleCoDataTable extends Component {
  render() {
    return (
      <div className="table-container eqdatatable" id="eqdatatable">
        <div className="figure-header table-xl">
          <span className="table-xl--btn">
            <svg className="icn">
              <title>Open table</title>
              <use xlinkHref="#arrows-open" />
            </svg>
          </span>
          <span className="fig-number">
            FIGURE 1. Equities single company ratings table.
          </span>
        </div>

        <table>
          <thead>
            <tr>
              <th colSpan="2">2018</th>
              <th colSpan="3">2019</th>
              <th colSpan="3">2020</th>
              <th colSpan="3">2021</th>
              <th colSpan="3">Change Y/Y</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>FY Dec</th>
              <th>Actual</th>
              <th>Old</th>
              <th>New</th>
              <th>Cons</th>
              <th>Old</th>
              <th>New</th>
              <th>Cons</th>
              <th>Old</th>
              <th>New</th>
              <th>%Chg</th>
              <th>Old</th>
              <th>New</th>
              <th>%Chg</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>00.48A</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
            <tr>
              <td>P/E</td>
              <td>00.48A</td>
              <td>&nbsp;</td>
              <td>00.48A</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>00.48A</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>1.00</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <p className="caption source">Source: Barclays Research</p>
        <p className="caption source">
          Consensus numbers are from Refinitiv received on 18-Mar-2019; 13:35
          GMT
        </p>
      </div>
    );
  }
}

export default EqSingleCoDataTable;
