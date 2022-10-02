import React from "react";
import Image from "next/image";
import { career } from "../../../assets";
import Button from "../../Atoms/Button";

const Career = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-[51px] md:mt-20 mt-10 px-4 md:p-0">
      <div className="flex flex-col gap-5 mb-5 md:mb-0">
        <h4 className="font-Popins font-semibold text-4xl">Join Our Team</h4>
        <Image src={career} alt="career" />
      </div>
      <div className="flex flex-col md:gap-5 gap-3">
        <p className="max-w-[380px] font-Popins text-sm font-normal flex h-full items-end">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et at
          fringilla id maecenas in scelerisque in. Pharetra, erat amet,
          vestibulum ullamcorper. Nunc feugiat lacus et eget urna ornare risus
          malesuada. Cursus morbi vel sed ipsum eget tincidunt ultrices.
        </p>
        <div>
          <Button title="Apply" />
        </div>
      </div>
    </div>
  );
};

export default Career;
