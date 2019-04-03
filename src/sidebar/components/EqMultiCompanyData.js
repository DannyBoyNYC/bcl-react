import React, { Component } from "react";

class MultiCompanyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubStats: false
    };
    this.openStats = this.openStats.bind(this);
  }

  openStats(event) {
    event.preventDefault();
    const tocRef = this.refs.stats;
    tocRef.classList.toggle("stats__open");
    this.setState(state => ({
      showMenu: !state.showSubStats
    }));
  }

  render() {
    return (
      <div className='eqdata ratings multi'>
        <ul
          className=''
          style={{
            borderBottomStyle: "solid",
            borderBottomWidth: 1,
            borderBottomColor: "gray",
            paddingBottom: 10
          }}
        >
          <li
            style={{
              borderBottomStyle: "dashed",
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              paddingBottom: 10
            }}
          >
            <p className='sector' style={{ fontWeight: 600 }}>
              U.S. Payments, Processors &amp; IT Services
            </p>
            <p className='sector-rating'>
              <a href='#0'>POSITIVE</a>
            </p>
            <p className='status'>Unchanged</p>
          </li>
          <li
            style={{
              paddingTop: 10
            }}
          >
            <p className='sector'>
              <a href='#!' onClick={this.openStats}>
                Fleetcor Technologies (FLT)
              </a>
            </p>
            <p className='sector-rating'>
              <a href='#0'>NEUTRAL</a>
            </p>
            <p className='status'>Unchanged</p>
          </li>
          {/* hidden activated by link above */}
          <div class='sub-stats' ref='stats'>
            <table>
              <thead>
                <tr>
                  <th colSpan='2'>Rating</th>
                  <th>Price</th>
                  <th colSpan='3'>Price Target</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Old</th>
                  <th>New</th>
                  <th>28 Mar 19</th>
                  <th>Old</th>
                  <th>New</th>
                  <th>%Chg</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Neutral</td>
                  <td>Neutral</td>
                  <td>0.63</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                </tr>
              </tbody>
            </table>

            <table>
              <thead>
                <tr>
                  <th colSpan='3'>EPS FY1 (E)</th>
                  <th colSpan='3'>EPS FY2 (E)</th>
                </tr>
              </thead>
              <thead>
                <tr>
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
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                  <td>1.00</td>
                </tr>
              </tbody>
            </table>
            <table style={{ border: "none" }}>
              <tr style={{ textAlign: "right" }}>
                <button>FLT Page</button>
              </tr>
            </table>
          </div>

          <li>
            <p className='sector'>
              <a href='#!'>Global Payments Inc. (GPN)</a>
            </p>
            <p className='sector-rating'>
              <a href='#0'>NEUTRAL</a>
            </p>
            <p className='status'>Unchanged</p>
          </li>

          <li>
            <p className='sector'>
              <a href='#!'>MasterCard Inc. (MA)</a>
            </p>
            <p className='sector-rating'>
              <a href='#0'>NEUTRAL</a>
            </p>
            <p className='status'>Unchanged</p>
          </li>

          <li>
            <p className='sector'>
              <a href='#!'>Paychex, Inc. (PAYX)</a>
            </p>
            <p className='sector-rating'>
              <a href='#0'>NEUTRAL</a>
            </p>
            <p className='status'>Unchanged</p>
          </li>
        </ul>

        <p className='full-ratings'>
          For a full list of our ratings, price target and earnings changes in
          this report, click <a href='#eqdatatable'>here</a>.
        </p>
      </div>
    );
  }
}

export default MultiCompanyData;
