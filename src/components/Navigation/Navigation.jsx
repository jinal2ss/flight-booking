import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
// import Header from "../Header/Header";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <div className="flex">
          <div className="logo">
            <Link to="/">Treloo</Link>
          </div>
          <div className="quick-links">
            <Link to="/review">Review</Link>
            <Link to="/tips">Tips</Link>
            <Link to="/alerts">Alerts</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/b-button">Blog</Link>
          </div>
        </div>
        {/* <div>
          <Header/>
        </div> */}
      </div>
    </>
  );
};

export default Navigation;
