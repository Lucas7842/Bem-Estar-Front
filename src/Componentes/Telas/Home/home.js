/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/home.css";
import Header from "../../Header/header";
import Section from "../../Section/section";
import About from "../../About/about";
import Service from "../../Service/service";
import Footer from "../../Footer/footer";


const Home = () => (
  <>
    <Header />
    <Section />
    <About />
    <Service />
    <Footer />


  </>
);

export default Home;