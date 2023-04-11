// import React from "react";
// import "./offers.css";
// import LogaSea from "../../assets/Loga-Sea.png";
// import Ansgar from "../../assets/Ansgar.png";
// import Lona from "../../assets/Lona.png";

// const Offers = () => {
//   return (
// <div className="offers container mx-auto">
//   <h1 className="text-center">Special Upcoming Offers</h1>
//   <div className="main-wrapper">
//     <div className="btn-container">
//       <button className="active mr-3">Team</button>
//       <button className="mr-3">Couple</button>
//       <button>Family</button>
//     </div>
//   </div>
//       {/* <div className="card-container flex justify-between">
//         <div className="card">
//           <div className="img-container">
//             <img src={LogaSea} alt="sea" />
//           </div>
//           <div className="days">
//             <button>Relax</button>
//             <span>3 Days, 3 Nights</span>
//           </div>
//           <h3>Loga Sea</h3>
//           <div className="price flex justify-between items-center">
//             <div className="writing">
//               <h4>
//                 700$ <span>/Person</span>
//               </h4>
//             </div>
//             <button>Book Now</button>
//           </div>
//         </div>
//         <div className="card">
//           <div className="img-container">
//             <img src={Ansgar} alt="sea" />
//           </div>
//           <div className="days">
//             <button>Relax</button>
//             <span>3 Days, 3 Nights</span>
//           </div>
//           <h3>Loga Sea</h3>
//           <div className="price flex justify-between items-center">
//             <div className="writing">
//               <h4>
//                 700$ <span>/Person</span>
//               </h4>
//             </div>
//             <button>Book Now</button>
//           </div>
//         </div>
//         <div className="card">
//           <div className="img-container">
//             <img src={Lona} alt="sea" />
//           </div>
//           <div className="days">
//             <button>Relax</button>
//             <span>3 Days, 3 Nights</span>
//           </div>
//           <h3>Loga Sea</h3>
//           <div className="price flex justify-between items-center">
//             <div className="writing">
//               <h4>
//                 700$ <span>/Person</span>
//               </h4>
//             </div>
//             <button>Book Now</button>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default Offers;

import React, { useEffect, useRef } from "react";
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

  const activeFilterBtnRef = useRef(null);

  useEffect(() => {
    if (activeFilterBtnRef.current) {
      activeFilterBtnRef.current.focus({ focusVisible: true });
    }
  }, []);

  return (
    <div className="offers">
      <Box className="container mx-auto">
        <AppBar position="static">
          <div className="offer-heading container mx-auto text-center">
            <h1>Special Upcoming Offers</h1>
          </div>
          <Tabs
            sx={{ width: "340px", margin: "0 auto" }}
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab ref={activeFilterBtnRef} className="team-btn" label="Team" {...a11yProps(0)} />
            <Tab className="couple-btn" label="Couple" {...a11yProps(1)} />
            <Tab className="family-btn" label="Family" {...a11yProps(2)} />
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
            <Family />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Couple />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
