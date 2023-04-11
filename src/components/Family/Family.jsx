import React from "react";
import "./family.css";
import LogaSea from "../../assets/Loga-Sea.png";
import Ansgar from "../../assets/Ansgar.png";
import Lona from "../../assets/Lona.png";

const Family = () => {
  return (
    <div className="container mx-auto">
      <div className="card-container flex justify-between">
        <div className="card">
          <div className="img-container">
            <img src={LogaSea} alt="sea" />
          </div>
          <div className="days">
            <button>Relax</button>
            <span>3 Days, 3 Nights</span>
          </div>
          <h3>Loga Sea</h3>
          <div className="price flex justify-between items-center">
            <div className="writing">
              <h4>
                700$ <span>/Person</span>
              </h4>
            </div>
            <button>Book Now</button>
          </div>
        </div>
        <div className="card">
          <div className="img-container">
            <img src={Ansgar} alt="sea" />
          </div>
          <div className="days">
            <button>Relax</button>
            <span>3 Days, 3 Nights</span>
          </div>
          <h3>Loga Sea</h3>
          <div className="price flex justify-between items-center">
            <div className="writing">
              <h4>
                700$ <span>/Person</span>
              </h4>
            </div>
            <button>Book Now</button>
          </div>
        </div>
        <div className="card">
          <div className="img-container">
            <img src={Lona} alt="sea" />
          </div>
          <div className="days">
            <button>Relax</button>
            <span>3 Days, 3 Nights</span>
          </div>
          <h3>Loga Sea</h3>
          <div className="price flex justify-between items-center">
            <div className="writing">
              <h4>
                700$ <span>/Person</span>
              </h4>
            </div>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Family;