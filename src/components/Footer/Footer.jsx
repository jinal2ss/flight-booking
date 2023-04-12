import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer container mx-auto">
      <div className="footer-content container flex justify-between items-center">
        <div className="copy-right">
          <h4>© 2022 Treloo LLC - All right reserved.</h4>
        </div>
        <div className="q-link">
          <ul className="flex">
            <li className="mr-4">Review</li>
            <li className="mr-4">Tips</li>
            <li className="mr-4">Alerts</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
