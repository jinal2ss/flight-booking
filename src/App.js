import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Bookings from "./components/Bookings/Bookings";
import Offers from "./components/Offers/Offers";
import ContactUs from "./components/ContactUs/ContactUs";
import Destinations from "./components/Destinations/Destinations";
import Testimonials from "./components/Testimonials/Testimonials";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import Review from "./components/Review/Review";
import Tips from "./components/Tips/Tips";
import Alerts from "./components/Alerts/Alerts";
import Blog from "./components/Blog/Blog";
import Button from "./components/Button/Button";
import Hotels from "./components/Hotels/Hotels";
import Flights from "./components/Flights/Flights";

const App = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header/>} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/register" element={<Register />} />
          <Route path="/footer" element={<Footer />} />     
          <Route path="/review" element={<Review />} />     
          <Route path="/tips" element={<Tips />} />     
          <Route path="/alerts" element={<Alerts />} />     
          <Route path="/blog" element={<Blog />} />     
          <Route path="/b-button" element={<Button />} />     
          <Route path="/hotels" element={<Hotels />} />     
          <Route path="/flights" element={<Flights />} />     
        </Routes>
      </main>
    </div>
  );
};

export default App;
