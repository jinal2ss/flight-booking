import React from "react";
import "./contactus.css";
import Men from "../../assets/men.png";

const ContactUs = () => {
  return (
    <div className="container mx-auto">
      <div className="main-container flex justify-between items-center">
        <div className="img-container">
          <img src={Men} alt="men" />
          <div className="card-1">
            <h1>300+</h1>
            <h6>DESTINATIONS</h6>
          </div>
          <div className="card-2">
            <h1>5000+</h1>
            <h6>TOURISTS</h6>
          </div>
        </div>
        <div className="writing-container">
          <h1>Travel Any Corner of The World With Us</h1>
          <p>
            Would you explore nature paradise in the world, let’s find the best
            destination in world with us, Would you explore nature paradise in
            the world, let’s find the best destination in world with us. Would
            you explore nature paradise in the world, let’s find the best
            destination in world with us. <br></br>
            <br></br>
            Would you explore nature paradise in
            the world, let’s find the best destination in world with us.
          </p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
