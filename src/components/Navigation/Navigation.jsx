import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="nav-container container">
        <div className="navigation mx-auto flex justify-between items-center">
          <div className="logo">
            <Link to="/">Treloo</Link>
          </div>
          <div className="quick-links">
            <Link to="/review">
              <a href="#">Review</a>
            </Link>
            <Link to="/tips">
              <a href="#">Tips</a>
            </Link>
            <Link to="/alerts">
              <a href="#">Alerts</a>
            </Link>
            <Link to="/blog">
              <a href="#">Blog</a>
            </Link>
            <Link to="/b-button">
              <button href="#">Blog</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
