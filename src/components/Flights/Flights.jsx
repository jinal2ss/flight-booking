import React from "react";
import "./Flights.css";
import Search from "../../assets/search.png";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Flights = () => {
  return (
    <div>
      <div className="up-cont container mx-auto">
        <div className="country">
          <div className="living">
            <h5>Living From</h5>
            <input type="text" placeholder="From" />
          </div>
          <div className="plane">
            <div>
              <i class="fa-sharp fa-solid fa-plane"></i>
            </div>
          </div>
          <div className="going">
            <h5>Going to</h5>
            <input type="text" placeholder="To" />
          </div>
        </div>
        <div className="date">
          <div className="leave">
            <span>Leave</span>
            <i class="fa-sharp fa-solid fa-plane"></i>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker label="Basic date picker" />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="calender">
            <div>
              <i class="fa-regular fa-calendar-days"></i>
            </div>
          </div>

          <div className="return">
            <span>Return</span>
            <i class="fa-sharp fa-solid fa-plane"></i>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker label="Basic date picker" />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <div className="search">
          <button className="icon">
            <img src={Search} alt="search_icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flights;
