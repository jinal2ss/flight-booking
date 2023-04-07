import React from "react";
import "./Hotels.css";
import Search from "../../assets/search.png";

const Hotels = () => {
  return (
    <div className="container mx-auto">
      <div className="up-cont">
        <div className="date">
          <div className="leave">
            <span>Leave</span>
            <i class="fa-sharp fa-solid fa-plane"></i>
            <h4>23 Jan, Sat</h4>
          </div>
          <div className="calender">
            <div>
              <i class="fa-regular fa-calendar-days"></i>
            </div>
          </div>

          <div className="return">
            <span>Return</span>
            <i class="fa-sharp fa-solid fa-plane"></i>
            <h4>14 Jan, Thu</h4>
          </div>
        </div>
        <div className="country">
          <div className="living">
            <h5>Living From</h5>
            <h4>Dubai</h4>
          </div>
          <div className="plane">
            <div>
              <i class="fa-sharp fa-solid fa-plane"></i>
            </div>
          </div>
          <div className="going">
            <h5>Going to</h5>
            <h4>New York</h4>
          </div>
        </div>
        <div className="search">
          <div className="icon">
            <img src={Search} alt="search_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
