import React from "react";
import "./bookings.css";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Hotels from "../Hotels/Hotels";
import Flights from "../Flights/Flights";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

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
        <Box>
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

  return (
    <div className="bookings">
      <Box className="container mx-auto">
        <AppBar
          style={{
            position: "relative",
            color: "black",
          }}
        >
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
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                textTransform: "capitalize",
              }}
              className="flights"
              label="Flights"
              icon={
                <FontAwesomeIcon
                  icon={faPlane}
                  style={{
                    color: "rgba(62, 134, 245, 0.8)",
                    transform: "rotate(-45deg)",
                    marginRight: "4px",
                    fontSize: "20px",
                  }}
                />
              }
              {...a11yProps(0)}
            ></Tab>

            <Tab
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                textTransform: "capitalize",
              }}
              className="hotels"
              label="Hotel"
              icon={
                <FontAwesomeIcon
                  icon={faHotel}
                  style={{
                    color: "rgba(62, 134, 245, 0.8)",
                    fontSize: "20px",
                    marginRight: "4px",
                  }}
                />
              }
              {...a11yProps(1)}
            ></Tab>
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel
            className="hotel container"
            value={value}
            index={0}
            dir={theme.direction}
          >
            <Hotels />
          </TabPanel>
          <TabPanel
            className="flight container"
            value={value}
            index={1}
            dir={theme.direction}
          >
            <Flights />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
