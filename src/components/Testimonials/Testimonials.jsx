import React, { Component } from "react";
import "./testimonials.css";
import Quote from "../../assets/quote.png";
import Tgirl from "../../assets/t-girl.png";
import Tboy from "../../assets/t-boy.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Testimonials extends Component {
  render() {
    const settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      speed: 500,
      arrows: true,
    };

    return (
      <Slider className="testimonial" {...settings}>
        <div>
          <div className="t-card">
            <img className="quote" src={Quote} alt="quote" />
            <p>
              Our trip to Morocco was truly a once in a lifetime experience and
              we are so grateful to everyone that made it happen seamlessly. Our
              travel planner, Jacquard, was incredible.
            </p>
            <h6>-Vand D</h6>
            <h5>Happy Treloo</h5>
          </div>
          <div className="img-back">
            <img src={Tgirl} alt="girl" />
          </div>
          <div className="t-rate">
            <i class="fa-solid fa-star"></i>
            <span>3.4</span>
          </div>
        </div>
        <div>
          <div className="t-card">
            <img className="quote" src={Quote} alt="quote" />
            <p>
              Our trip to Morocco was truly a once in a lifetime experience and
              we are so grateful to everyone that made it happen seamlessly. Our
              travel planner, Jacquard, was incredible.
            </p>
            <h6>-Vand D</h6>
            <h5>Happy Treloo</h5>
          </div>
          <div className="img-back">
            <img src={Tboy} alt="girl" />
          </div>
          <div className="t-rate">
            <i class="fa-solid fa-star"></i>
            <span>3.4</span>
          </div>
        </div>
        <div>
          <div className="t-card">
            <img className="quote" src={Quote} alt="quote" />
            <p>
              Our trip to Morocco was truly a once in a lifetime experience and
              we are so grateful to everyone that made it happen seamlessly. Our
              travel planner, Jacquard, was incredible.
            </p>
            <h6>-Vand D</h6>
            <h5>Happy Treloo</h5>
          </div>
          <div className="img-back">
            <img src={Tgirl} alt="girl" />
          </div>
          <div className="t-rate">
            <i class="fa-solid fa-star"></i>
            <span>3.4</span>
          </div>
        </div>
        <div>
          <div className="t-card">
            <img className="quote" src={Quote} alt="quote" />
            <p>
              Our trip to Morocco was truly a once in a lifetime experience and
              we are so grateful to everyone that made it happen seamlessly. Our
              travel planner, Jacquard, was incredible.
            </p>
            <h6>-Vand D</h6>
            <h5>Happy Treloo</h5>
          </div>
          <div className="img-back">
            <img src={Tboy} alt="girl" />
          </div>
          <div className="t-rate">
            <i class="fa-solid fa-star"></i>
            <span>3.4</span>
          </div>
        </div>
        <div>
          <div className="t-card">
            <img className="quote" src={Quote} alt="quote" />
            <p>
              Our trip to Morocco was truly a once in a lifetime experience and
              we are so grateful to everyone that made it happen seamlessly. Our
              travel planner, Jacquard, was incredible.
            </p>
            <h6>-Vand D</h6>
            <h5>Happy Treloo</h5>
          </div>
          <div className="img-back">
            <img src={Tgirl} alt="girl" />
          </div>
          <div className="t-rate">
            <i class="fa-solid fa-star"></i>
            <span>3.4</span>
          </div>
        </div>
        <div>
          <div className="t-card">
            <img className="quote" src={Quote} alt="quote" />
            <p>
              Our trip to Morocco was truly a once in a lifetime experience and
              we are so grateful to everyone that made it happen seamlessly. Our
              travel planner, Jacquard, was incredible.
            </p>
            <h6>-Vand D</h6>
            <h5>Happy Treloo</h5>
          </div>
          <div className="img-back">
            <img src={Tboy} alt="girl" />
          </div>
          <div className="t-rate">
            <i class="fa-solid fa-star"></i>
            <span>3.4</span>
          </div>
        </div>
      </Slider>
    );
  }
}

export default Testimonials;
