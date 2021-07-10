import React from "react";
import Banner from "../banner/Banner";
import Product from "../product/Product";
import Price from "../price/Price";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <Banner />
      <Product />
      <Price />
    </div>
  );
};

export default Home;
