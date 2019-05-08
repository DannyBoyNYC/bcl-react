import React, { Component } from "react";
import Caption from "./Caption";
import EqPageTwoSide from "./EqPageTwoSide";

class EqPageTwo extends Component {
  render() {
    return (
      <div className='eqchart-page'>
        <div className='header'>
          U.S. Independent Refiners <span>Industry View: NEUTRAL</span>
        </div>
        <div className='subheader'>
          CVR Energy, Inc. (CVI) <span>Stock Rating: EQUAL WEIGHT</span>
        </div>
        {/* <div className="subheader">CVR Energy, Inc. (CVI) <span>Stock Rating: EQUAL WEIGHT</span></div> */}

        <EqPageTwoSide />

        <div>
          <table>
            <thead>
              <tr>
                <th>Income statement ($mn)</th>
                <th>2018A</th>
                <th>2019E</th>
                <th>2020E</th>
                <th>2021E</th>
                <th>CAGR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EBITDA (adj)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>EBIDA (adj)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>Net income (op basis)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>EPS (adj) ($)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>Diluted shares (mn)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>DPS ($)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Return data</th>
                <th />
                <th />
                <th />
                <th />
                <th>Average</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ROACE (%)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>ROAE (%)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>ROMC (%)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Balance sheet and cash flow ($mn)</th>
                <th />
                <th />
                <th />
                <th />
                <th>CAGR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shareholders' equity</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>Net debt/(funds)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>Total debt</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>Market capital employed</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>Cash flow from operations</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>Capital expenditure</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>Dividends paid</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>Free cash flow</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>Net cash surplus/(deficit)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Valuation and leverage metrics</th>
                <th />
                <th />
                <th />
                <th />
                <th>Average</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>P/E (adj) (x)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>EV/EBITDA (adj) (x)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>EV/EBIDA (adj) (x)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>Equity FCF yield (%)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>Dividend yield (%)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>Total debt/capital (%)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>Total debt/equity (%)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Selected operating metrics</th>
                <th />
                <th />
                <th />
                <th />
                <th>Average</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Refining throughput (000 b/d)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
              <tr>
                <td>Refining mgn realis (per bl) ($)</td>
                <td>626</td>
                <td className='curr'>626</td>
                <td>626</td>
                <td>626</td>
                <td>626</td>
              </tr>
            </tbody>
          </table>
          <Caption />
        </div>
      </div>
    );
  }
}

export default EqPageTwo;
