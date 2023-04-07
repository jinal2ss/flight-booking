import React from "react";
import Header from "../components/Header/Header";
import Bookings from "../components/Bookings/Bookings";
import Offers from "../components/Offers/Offers";
import ContactUs from "../components/ContactUs/ContactUs";
import Destinations from "../components/Destinations/Destinations";
import Testimonials from "../components/Testimonials/Testimonials";
import Register from "../components/Register/Register";
import Footer from "../components/Footer/Footer";


const Home = () => {
  return (
    <>
      <Header/>
      <Bookings />
      <Offers />
      <ContactUs />
      <Destinations />
      <Testimonials />
      <Register />
      <Footer />
    </>
  );
};

export default Home;
