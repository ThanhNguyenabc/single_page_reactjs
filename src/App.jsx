import React from "react";
import { Article, Navbar, Feature, Brand, CTA } from "./components";
import "./App.css";
import { Blog, Footer, Header, Possibility, WhatGPT3 } from "./containers";

const App = () => {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
