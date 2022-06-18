import React from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import ServicesWeOffer from "../../components/Services/ServicesWeOffer";
import Team from "../../components/Team/Team";
const Home = () => {
  return (
    <>
      <Hero />
      <ServicesWeOffer />
      <Team/>
      <Footer />
    </>
  );
};

export default Home;
