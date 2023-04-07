import React from "react";
import "./bookings.css"
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
import { faHotel} from "@fortawesome/free-solid-svg-icons";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";


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
    <Box style={{
      maxWidth:'1440px',
      margin: '0 auto',
    }}>
      <AppBar
        style={{
          position: "relative",
          backgroundColor: "white",
          color: "black"
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
            className="flights"
            label="Flights"
            icon={<FontAwesomeIcon icon={faPlaneDeparture} style={{color: 'rgba(62, 134, 245, 0.8)' }} />}
            {...a11yProps(0)}
          >
            <span>Hotels</span>
          </Tab>

          <Tab
            className="hotels"
            label="Hotels"
            icon={<FontAwesomeIcon icon={faHotel} style={{color: 'rgba(62, 134, 245, 0.8)' }} />}
            {...a11yProps(1)}
          >
            <span>Flights</span>
          </Tab>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Hotels />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Flights />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
