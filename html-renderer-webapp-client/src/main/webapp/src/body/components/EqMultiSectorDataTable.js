import React, { Component } from 'react';
import Header3figure from './Header3figure';

class EqDataTable extends Component {
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
          <Header3figure />
        </div>

        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th colSpan="2">Rating</th>
              <th>Price</th>
              <th colSpan="3">Price Target</th>
              <th colSpan="3">EPS FY1 (E)</th>
              <th colSpan="3">EPS FY2 (E)</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th />
              <th>Old</th>
              <th>New</th>
              <th>28 Mar 19</th>
              <th>Old</th>
              <th>New</th>
              <th>%Chg</th>
              <th>Old</th>
              <th>New</th>
              <th>%Chg</th>
              <th>Old</th>
              <th>New</th>
              <th>%Chg</th>
            </tr>
          </thead>
          <tbody>
            <tr className="sector">
              <td>Americas Integrated Oil</td>
              <td>POS</td>
              <td>POS</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>Fleetcor Technologies (FLT)</td>
              <td>POS</td>
              <td>POS</td>
              <td>0.63</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
            <tr>
              <td>Global Payments Inc. (GPN)</td>
              <td>POS</td>
              <td>POS</td>
              <td>0.63</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
            <tr>
              <td>MasterCard Inc. (MA)</td>
              <td>POS</td>
              <td>POS</td>
              <td>0.63</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
            <tr>
              <td>Paychex, Inc. (PAYX)</td>
              <td>POS</td>
              <td>POS</td>
              <td>0.63</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
            <tr>
              <td>PayPal, Inc. (PYPL)</td>
              <td>POS</td>
              <td>POS</td>
              <td>0.63</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
            <tr className="sector">
              <td>Americas Integrated Oil</td>
              <td>POS</td>
              <td>POS</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>Fleetcor Technologies (FLT)</td>
              <td>POS</td>
              <td>POS</td>
              <td>0.63</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
            <tr>
              <td>Global Payments Inc. (GPN)</td>
              <td>POS</td>
              <td>POS</td>
              <td>0.63</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
            <tr>
              <td>MasterCard Inc. (MA)</td>
              <td>POS</td>
              <td>POS</td>
              <td>0.63</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
            <tr>
              <td>Paychex, Inc. (PAYX)</td>
              <td>POS</td>
              <td>POS</td>
              <td>0.63</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
            <tr>
              <td>PayPal, Inc. (PYPL)</td>
              <td>POS</td>
              <td>POS</td>
              <td>0.63</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
            <tr className="sector">
              <td>Americas Integrated Oil</td>
              <td>POS</td>
              <td>POS</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>Fleetcor Technologies (FLT)</td>
              <td>POS</td>
              <td>POS</td>
              <td>0.63</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
            <tr>
              <td>Global Payments Inc. (GPN)</td>
              <td>POS</td>
              <td>POS</td>
              <td>0.63</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
            <tr>
              <td>MasterCard Inc. (MA)</td>
              <td>POS</td>
              <td>POS</td>
              <td>0.63</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
            <tr>
              <td>Paychex, Inc. (PAYX)</td>
              <td>POS</td>
              <td>POS</td>
              <td>0.63</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
            <tr>
              <td>PayPal, Inc. (PYPL)</td>
              <td>POS</td>
              <td>POS</td>
              <td>0.63</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
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
