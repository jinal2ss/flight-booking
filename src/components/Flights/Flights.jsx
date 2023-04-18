import React from "react";
import "./Flights.css";
import Search from "../../assets/search.png";
import { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const Flights = () => {
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/f8c03b12-3266-41b8-8caa-70d5eca93185")
      .then((response) => {
        console.log(response.data.data);
        const titlesArray = response.data.data.map((post) => post.city_name);
        console.log(titlesArray);
        setTitles(titlesArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div>
      <div className="up-cont container mx-auto">
        <div className="country">
          <div className="living">
            <h5>Living From</h5>
            <Autocomplete
              options={titles}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}
            />
          </div>
          <div className="plane">
            <div>
              <i class="fa-sharp fa-solid fa-plane"></i>
            </div>
          </div>
          <div className="going">
            <h5>Going to</h5>
            <Autocomplete
              options={titles}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}
            />
          </div>
        </div>
        <div className="date">
          <div className="leave">
            <div>
              <span>Leave</span>
              <i class="fa-sharp fa-solid fa-plane"></i>
            </div>
            <div>
              <Space direction="vertical">
                <DatePicker onChange={onChange} />
              </Space>
            </div>
          </div>
          <div className="calender">
            <div>
              <i class="fa-regular fa-calendar-days"></i>
            </div>
          </div>
          <div className="return">
            <div>
              <span>Return</span>
              <i class="fa-sharp fa-solid fa-plane"></i>
            </div>
            <div>
              <Space direction="vertical">
                <DatePicker onChange={onChange} />
              </Space>
            </div>
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
