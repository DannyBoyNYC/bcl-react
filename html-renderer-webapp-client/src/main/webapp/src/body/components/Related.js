import React, { Component } from 'react';

class Related extends Component {
  render() {
    return (
      <div className="sidenav related bottom related-research-container">
        <div className="main">
          <svg className="circle" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="15" />
          </svg>
          <svg className="icn">
            <title>Related</title>
            <use xlinkHref="#books" />
          </svg>
          <h1>Related Research</h1>
        </div>
        <div className="related-items">
          <div className="related-item">
            <p className="art">Global Energy Outlook</p>
            <p className="art-link">
              <a className="related-item-link" href="#0" pubid="2453015">
                KP testing file here
              </a>
            </p>
            <div className="date">10 May 2019</div>
          </div>
          <div className="related-item">
            <p className="art">High Yield Energy</p>
            <p className="art-link">
              <a className="related-item-link" href="#0" pubid="2452939">
                Energy Outlook - Mateer
              </a>
            </p>
            <div className="date">09 May 2019</div>
          </div>
          <div className="related-item">
            <p className="art">High Yield Energy</p>
            <p className="art-link">
              <a className="related-item-link" href="#0" pubid="2452847">
                Global Energy Outlook - Chambers not available
              </a>
            </p>
            <div className="date">07 May 2019</div>
          </div>
          <div className="related-item">
            <p className="art">Index Summary</p>
            <p className="art-link">
              <a className="related-item-link" href="#0" pubid="2452844">
                Finishing Strong
              </a>
            </p>
            <div className="date">07 May 2019</div>
          </div>
          <div className="related-item">
            <p className="art">Index Summary</p>
            <p className="art-link">
              <a className="related-item-link" href="#0" pubid="2453018">
                KP Finishing Strong
              </a>
            </p>
            <div className="date">10 May 2019</div>
          </div>
          <div className="related-item">
            <p className="art">US Investment Grade</p>
            <p className="art-link">
              <a className="related-item-link" href="#0" pubid="2453235">
                Energy Outlook
              </a>
            </p>
            <div className="date">14 May 2019</div>
          </div>
          <div className="related-item">
            <p className="art">US Investment Grade</p>
            <p className="art-link">
              <a className="related-item-link" href="#0" pubid="2453017">
                KP Energy Outlook
              </a>
            </p>
            <div className="date">10 May 2019</div>
          </div>
          <div className="related-item">
            <p className="art">Monday test</p>
            <p className="art-link">
              <a className="related-item-link" href="#0" pubid="2453233">
                Fingers crossed!
              </a>
            </p>
            <div className="date">14 May 2019</div>
          </div>
          <div className="related-item">
            <p className="art">Global Energy Outlook</p>
            <p className="art-link">
              <a className="related-item-link" href="#0" pubid="2452938">
                test with WL
              </a>
            </p>
            <div className="date">09 May 2019</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Related;
