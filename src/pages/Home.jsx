import React from "react";
import Bookings from "../components/Bookings/Bookings";
import Offers from "../components/Offers/Offers";
import ContactUs from "../components/ContactUs/ContactUs";
import Destinations from "../components/Destinations/Destinations";
import Testimonials from "../components/Testimonials/Testimonials";
import Register from "../components/Register/Register";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header/>
      <Bookings />
      <Offers />
      <ContactUs />
      <Destinations />
      <Testimonials />
      <Register />
      <Footer />
    </div>
  );
};

export default Home;
