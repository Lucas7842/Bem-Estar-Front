/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/home.css";
import Header from "../../Header/header";
import Section from "../../Section/section";
import About from "../../About/about";
import About2 from "../../About2/about2";
import Service from "../../Service/service";
import Footer from "../../Footer/footer";


const Home = () => (
  <>
    <Header />
    <Section />
    <About />
    <About2 />
    <Service />
    <Footer />


  </>
);

export default Home;