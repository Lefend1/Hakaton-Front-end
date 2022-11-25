import React from "react";

import Header from "../components/Header/Header";
import BannerGreetings from "../components/SectionBanners/BannerGreetings";
import BannerHealthy from "../components/SectionBanners/BannerHealthy";
import Services from "../components/SectionServices/Services";
import InfoText from "../components/SectionText/InfoText";

const MainPage = () => {
  return (
    <>
      <Header />
      <BannerGreetings />
      <Services />
      <InfoText />
      <BannerHealthy />
    </>
  );
};

export default MainPage;
