import React from "react";
import "./testimonials.css";
import Quote from "../../assets/quote.png";
import Tgirl from "../../assets/t-girl.png";
import Tboy from "../../assets/t-boy.png";

const Testimonials = () => {
  return (
    <div className="testimonials container mx-auto">
      <div className="t-container flex justify-between">
        <div className="t-card">
          <img className="quote" src={Quote} alt="quote" />
          <p>
            Our trip to Morocco was truly a once in a lifetime experience and we
            are so grateful to everyone that made it happen seamlessly. Our
            travel planner, Jacquard, was incredible.
          </p>
          <h6>-Vand D</h6>
          <h5>Happy Treloo</h5>
          <div className="img-back">
            <img src={Tgirl} alt="girl" />
            <div className="t-rate">
              <i class="fa-solid fa-star"></i>
              <span>3.4</span>
            </div>
          </div>
        </div>
        <div className="t-card">
          <img className="quote" src={Quote} alt="quote" />
          <p>
            Our trip to Morocco was truly a once in a lifetime experience and we
            are so grateful to everyone that made it happen seamlessly. Our
            travel planner, Jacquard, was incredible.
          </p>
          <h6>-Vand D</h6>
          <h5>Happy Treloo</h5>
          <div className="img-back">
            <img src={Tboy} alt="girl" />
            <div className="t-rate">
              <i class="fa-solid fa-star"></i>
              <span>3.4</span>
            </div>
          </div>
        </div>
      </div>
      <div className="slide flex justify-center items-center">
        <div className="left">
          <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div className="right">
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
