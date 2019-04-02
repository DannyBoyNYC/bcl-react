import React, { Component } from 'react';

class EqDataTable extends Component {
  render() {
    return (
      <div className="table-container">
        <div className="figure-header table-xl">
          <span className="table-xl--btn">
            <svg className="icn">
              <title>Open table</title>
              <use xlinkHref="#arrows-open" />
            </svg>
          </span>
          <span className="fig-number">
            FIGURE 1. Summary of our Ratings, Price Targets and Earnings Changes
            in this Report (all changes are shown in bold)
          </span>
        </div>

        <table
          style={{
            borderTopWeight: 2,
            BorderTopStyle: 'solid',
            borderTopColor: '#007eb6',
          }}
        >
          <thead>
            <tr>
              <th>Company</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Price Target</th>
              <th />
              <th>EPS FY1 (E)</th>
              <th />
              <th>EPS FY2 (E)</th>
              <th colspan="2" />
            </tr>
          </thead>
          <thead>
            <tr>
              <th />
              <th>Actual</th>
              <th>Old</th>
              <th>New</th>
              <th>Cons</th>
              <th>Old</th>
              <th>New</th>
              <th>Cons</th>
              <th>2019</th>
              <th>2020</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>U.S. Payments, Processors &amp; IT Services</td>
              <td>0.63A</td>
              <td>0.63E</td>
              <td>0.63E</td>
              <td>0.63E</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>0.66E</td>
              <td>-3%</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Fleetcor Technologies (FLT)</td>
              <td>0.63A</td>
              <td>0.63E</td>
              <td>0.63E</td>
              <td>0.63E</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>0.66E</td>
              <td>-3%</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Global Payments Inc. (GPN)</td>
              <td>0.63A</td>
              <td>0.63E</td>
              <td>0.63E</td>
              <td>0.63E</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>0.66E</td>
              <td>-3%</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>MasterCard Inc. (MA)</td>
              <td>0.63A</td>
              <td>0.63E</td>
              <td>0.63E</td>
              <td>0.63E</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>0.66E</td>
              <td>-3%</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Paychex, Inc. (PAYX)</td>
              <td>0.63A</td>
              <td>0.63E</td>
              <td>0.63E</td>
              <td>0.63E</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>0.66E</td>
              <td>-3%</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>PayPal, Inc. (PYPL)</td>
              <td>0.63A</td>
              <td>0.63E</td>
              <td>0.63E</td>
              <td>0.63E</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>0.66E</td>
              <td>-3%</td>
              <td>N/A</td>
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

export default EqDataTable;
