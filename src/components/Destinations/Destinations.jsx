import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./destinations.css";
import Popular from "../Popular/Popular";
import Adventure from "../Adventure/Adventure";
import Beth from "../Beth/Beth";

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
    <div className="destination">
      <Box className="container mx-auto">
        <AppBar position="static">
          <div className="destination-heading container mx-auto text-center">
            <h1>Recommended Destination</h1>
          </div>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              style={{
                backgroundColor: selectedButton === 1 ? "white" : "transparent",
                color: selectedButton === 1 ? "#3E86F5" : "rgba(0, 0, 0, 0.5)",
              }}
              onClick={() => handleButtonSelection(1)}
              className="popular-btn"
              label="Popular"
              {...a11yProps(0)}
            />
            <Tab
              style={{
                backgroundColor: selectedButton === 2 ? "white" : "transparent",
                color: selectedButton === 2 ? "#3E86F5" : "rgba(0, 0, 0, 0.5)",
                padding: "10px 20px",
              }}
              onClick={() => handleButtonSelection(2)}
              className="adventure-btn"
              label="Adventure"
              {...a11yProps(1)}
            />
            <Tab
              style={{
                backgroundColor: selectedButton === 3 ? "white" : "transparent",
                color: selectedButton === 3 ? "#3E86F5" : "rgba(0, 0, 0, 0.5)",
              }}
              onClick={() => handleButtonSelection(3)}
              className="beth-btn"
              label="Beth"
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
            <Popular />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Adventure />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Beth />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
