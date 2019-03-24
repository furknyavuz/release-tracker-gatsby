import PropTypes from "prop-types";
import React from "react";

const Footer = () => (
  <footer
    style={{
      background: `#24292e`
    }}
  >
    <div className="footerDiv">
      <a style={{ color: `white` }} rel="noopener noreferrer" target="_blank"
         href="https://docs.google.com/spreadsheets/d/1WToCBvYYLlDSGMdDpqrWsZol8g2JPidGCsdfm0NSUKI/edit?usp=sharing">
        Feel free to add candidate repositories to Google Sheet
      </a>
    </div>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string
};

Footer.defaultProps = {
  siteTitle: ``
};

export default Footer;
