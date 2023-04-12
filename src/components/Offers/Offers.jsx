import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Team from "../Team/Team";
import Family from "../Family/Family";
import Couple from "../Couple/Couple";
import "./offers.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonSelection = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div className="offers">
      <Box className="container mx-auto">
        <AppBar position="static">
          <div className="offer-heading container mx-auto text-center">
            <h1>Special Upcoming Offers</h1>
          </div>
          <Tabs
            style={{marginBottom:'40px'}}
            sx={{ width: "340px", margin: "0 auto" }}
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              onClick={() => handleButtonSelection(1)}
              style={{
                backgroundColor: selectedButton === 1 ? "#3E86F5" : "white",
                color:
                  selectedButton === 1 ? "white" : "rgba(0, 0, 0, 0.5)",
              }}
              className="team-btn"
              label="Team"
              {...a11yProps(0)}
            />
            <Tab
              onClick={() => handleButtonSelection(2)}
              style={{
                backgroundColor: selectedButton === 2 ? "#3E86F5" : "white",
                color:
                  selectedButton === 2 ? "white" : "rgba(0, 0, 0, 0.5)",
              }}
              className="couple-btn"
              label="Couple"
              {...a11yProps(1)}
            />
            <Tab
              onClick={() => handleButtonSelection(3)}
              style={{
                backgroundColor: selectedButton === 3 ? "#3E86F5" : "white",
                color:
                  selectedButton === 3 ? "white" : "rgba(0, 0, 0, 0.5)",
              }}
              className="family-btn"
              label="Family"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Team />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Couple />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
           <Family/>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
