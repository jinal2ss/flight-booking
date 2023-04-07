import React from "react";
import "./header.css";
// import bgImage from '../../assets/bg-image.png';

const Header = () => {
  return (
    <>
      <div className="header container mx-auto flex flex-col justify-center items-center">
        {/* <img src={bgImage} alt="bg"/> */}
        <div className="writing-content">
          <h1>Discover Your Life, Travel Where You Want</h1>
          <p>
            Would you explore nature paradise in the world, let’s find the best
            destination in world with us.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
