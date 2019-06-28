import React, { Component } from 'react';

class Certifications extends Component {
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <div>
          <p>
            This document is intended for institutional investors and is not
            subject to all of the independence and disclosure standards
            applicable to debt research reports prepared for retail investors
            under U.S. FINRA Rule 2242. Barclays trades the securities covered
            in this report for its own account and on a discretionary basis on
            behalf of certain clients. Such trading interests may be contrary to
            the recommendations offered in this report.
          </p>

          <p>
            For analyst certification(s) and important disclosures, please{' '}
            <a href="#main-certifications-disclosures">click here.</a>
          </p>
        </div>
        <p style={{ margin: '0' }}>Completed 12 Nov 2019, 12:00 GMT</p>

        <p style={{ marginTop: '0' }}>Released 13 Nov 2019, 0600 GMT.</p>
      </div>
    );
  }
}

export default Certifications;
