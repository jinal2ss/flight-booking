import React from "react";
import "./team.css";
import LogaSea from "../../assets/Loga-Sea.png";
import Ansgar from "../../assets/Ansgar.png";
import Lona from "../../assets/Lona.png";

const Team = () => {
  return (
    <div className="team container mx-auto">
      <div className="card-container flex justify-between">
        <div className="card">
          <div className="img-container">
            <img src={LogaSea} alt="sea" />
            <h4>14 FEB 2022</h4>
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
            <h4>18 JUN 2022</h4>
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
            <h4>22 DEC 2022</h4>
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

export default Team;
