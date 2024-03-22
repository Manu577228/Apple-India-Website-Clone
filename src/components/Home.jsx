import React from "react";
import Header from "./Header";
import Info from "./Info";
import Section from "./Section";
import Products from "./Products";
import { productsSection } from "./Constant";

function Home() {
  return (
    <>
      <Header />
      <Info />
      <Section data={productsSection.iphonePro} />
      <Section data={productsSection.iphone} />
      <Section data={productsSection.macbookpro} />
      <Products />
    </>
  );
}

export default Home;
