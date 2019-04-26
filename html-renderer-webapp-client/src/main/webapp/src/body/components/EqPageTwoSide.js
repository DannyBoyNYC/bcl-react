import React from "react";

const EqPageTwoSide = () => {
  return (
    <div className="eq-page-two-side">
      
      <ul className="testlist">
        <li><strong>Price (19-Mar-2019)</strong></li>
        <li>USD 41.23</li>
        <li><strong>Price Target</strong></li>
        <li>USD 47.00</li>
      </ul>

      <div className="img">
        <p><strong>Upside/Downside scenarios</strong></p>
        <img src="/img/eqchart.svg" alt="" />
        </div>

      <p><strong>Why Equal Weight?</strong> Sharp share price outperformance has made CVI's risk/reward ratio unattractive compared to the other refiners in our research coverage, in our opinion.</p>
      
      <ul className="testlist">
        <li><strong>Upside case</strong></li>
        <li>USD 58.00</li>
      </ul>

      <p>Our upside case assumes the company will trade at our high case scenario in our SOTP analysis (higher multiples across refining &amp; non-refining segments). </p>

      <ul className="testlist">
        <li><strong>Downside case</strong></li>
        <li>USD 25.00</li>
      </ul>

      <p>Our upside case assumes the company will trade at our low case scenario in our SOTP analysis (higher multiples across refining &amp; non-refining segments). </p>

      {/* <ul className="testlist">
        <li><strong>Upside/Downside scenarios</strong></li>
      </ul> */}

    </div>
  );
};

export default EqPageTwoSide;
