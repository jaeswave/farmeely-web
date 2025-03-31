import React from "react";
import Hero from "../../components/Hero";
import { landingData } from "../../data";
const Home = () => {
  return <Hero {...landingData} />;
};

export default Home;
