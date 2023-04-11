// import React from "react";
// import "./destinations.css";

// const Destinations = () => {
//   return (
//     <div className="destinations container mx-auto">
//       <h1>Recommended Destination</h1>
//       <div className="main-wrapper-destination">
//         <div className="btn-container-destination">
//           <button className="active mr-3">Popular</button>
//           <button className="mr-3">Adventure</button>
//           <button>Beath</button>
//         </div>
//       </div>
//       <div className="card-container flex justify-between">
//         <div className="d-card">
//           <img src={Kina} alt="mountain" />
//           <div className="rate">
//             <i class="fa-solid fa-star"></i>
//             <span>3.4</span>
//           </div>
//           <h2>Kina Mountain</h2>
//           <div className="location">
//             <i class="fa-solid fa-location-dot"></i>
//             <span>Cambodia</span>
//           </div>
//         </div>
//         <div className="d-card">
//           <img src={Kina2} alt="mountain" />
//           <div className="rate">
//             <i class="fa-solid fa-star"></i>
//             <span>3.4</span>
//           </div>
//           <h2>Kina Mountain</h2>
//           <div className="location">
//             <i class="fa-solid fa-location-dot"></i>
//             <span>Cambodia</span>
//           </div>
//         </div>
//         <div className="d-card">
//           <img src={Kina3} alt="mountain" />
//           <div className="rate">
//             <i class="fa-solid fa-star"></i>
//             <span>3.4</span>
//           </div>
//           <h2>Kina Mountain</h2>
//           <div className="location">
//             <i class="fa-solid fa-location-dot"></i>
//             <span>Cambodia</span>
//           </div>
//         </div>
//         <div className="d-card">
//           <img src={Kina4} alt="mountain" />
//           <div className="rate">
//             <i class="fa-solid fa-star"></i>
//             <span>3.4</span>
//           </div>
//           <h2>Kina Mountain</h2>
//           <div className="location">
//             <i class="fa-solid fa-location-dot"></i>
//             <span>Cambodia</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Destinations;

import React, { useEffect, useRef } from "react";
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

  const activeFilterBtnRef = useRef(null);

  useEffect(() => {
    if (activeFilterBtnRef.current) {
      activeFilterBtnRef.current.focus({ focusVisible: true });
    }
  }, []);

  return (
    <div className="destination">
      <Box className="container mx-auto">
        <AppBar position="static">
          <div className="destination-heading container mx-auto text-center">
            <h1>Special Upcoming Offers</h1>
          </div>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab ref={activeFilterBtnRef} className="popular-btn" label="Popular" {...a11yProps(0)} />
            <Tab className="adventure-btn" label="Adventure" {...a11yProps(1)} />
            <Tab className="beth-btn" label="Beth" {...a11yProps(2)} />
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
