import React, { useState } from "react";
import Slider from "react-slick";
import Carousel from "../../Molecules/Carousel";

const OurTeam = () => {
  return (
    <div className="mt-10 flex w-full flex-col md:mt-[50px] items-center md:justify-center gap-5 md:gap-[30px]">
      <h2 className="font-semibold font-Popins text-2xl md:text-4xl">
        Our Team
      </h2>
      <div className="w-full p-5 flex justify-center items-center">
        <Carousel slidesToShow={5} />
      </div>
    </div>
  );
};

export default OurTeam;
