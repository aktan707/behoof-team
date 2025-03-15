import React from 'react';
import Hero from "../../components/hero/Hero.jsx";
import BestChoose from "../../components/BestChoose/BestChoose.jsx";
import ProductRatingCard from "../../components/ProductCart/ProductRatingCard.jsx";
import Features from "../../components/Features/Features.jsx";

const HomePage = () => {
    return (
        <div className={'h-[400px]'}>
          <Hero/>
          <BestChoose/>
          <ProductRatingCard/>
          <Features/>
        </div>
    );
};

export default HomePage;
