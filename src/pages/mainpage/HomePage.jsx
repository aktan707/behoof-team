import React from "react";
import {useSelector} from "react-redux";
import Hero from "../../components/hero/Hero.jsx";
import BestChoose from "../../components/BestChoose/BestChoose.jsx";
import ProductRatingCard from "../../components/ProductCart/ProductRatingCard.jsx";
import Features from "../../components/Features/Features.jsx";

const HomePage = () => {
  const products = useSelector((state) => state.products.items);

  return (
    <div className="app-container flex-row align-items-center">
      <Hero/>
      <BestChoose/>
      <ProductRatingCard/>
      <Features/>

    </div>
  );
};

export default HomePage;
