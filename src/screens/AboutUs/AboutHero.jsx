import React from "react";
import Hero from "../../components/Hero";
import { aboutData } from "../../data";
const AboutHero = () => {
  return <Hero {...aboutData} />;
};

export default AboutHero;
