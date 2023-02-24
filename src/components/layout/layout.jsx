import React from "react";
import Header from "./../Header/header";
import Footer from "../footer/footer";
import Routers from "../../router/routers";
const layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
};

export default layout;
