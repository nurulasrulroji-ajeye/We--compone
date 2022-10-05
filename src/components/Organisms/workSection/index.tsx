import React, { useEffect } from "react";
import Image from "next/image";
import { BsGlobe } from "react-icons/bs";
import { AiFillAndroid } from "react-icons/all";
import * as Icon from "react-icons/im";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { getService } from "../../../features/services/action";
import { work } from "../../../assets";
import DynamicIcon from "../../Atoms/DynamicIcon/Index";

const Works = () => {
  const { data } = useAppSelector((state) => state.service);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getService());
  }, []);

  return (
    <div
      className="w-full flex flex-col md:flex-row md:mt-[124px] mt-10 justify-center items-center md:gap-20"
      id="work"
    >
      <div>
        <Image src={work} />
      </div>
      <div className="px-4 md:p-0">
        <h1 className="font-semibold text-4xl font-Popins">What We Do?</h1>
        {data.map((services) => (
          <div className="flex gap-5 mt-9" key={services.id}>
            <div className="mt-[2px]">
              <DynamicIcon name={services.icon} />
            </div>
            <div>
              <h4 className="font-Popins font-semibold text-sm mb-2 text-[#414141]">
                {services.name}
              </h4>
              <p className="max-w-[282px] font-Popins text-xs font-normal leading-6">
                {services.desc}
              </p>
            </div>
          </div>
        ))}
        {/* <div className="flex gap-5 mt-9">
          <div className="mt-[2px]">
            <Uiux />
          </div>
          <div>
            <h4 className="font-Popins font-semibold text-sm mb-2 text-[#414141]">
              UI/UX Design
            </h4>
            <p className="max-w-[282px] font-Popins text-xs font-normal leading-6">
              All things are designed. A few things are designed well. We try to
              elevate your ideas with great UI/UX design, suited to your taste,
              addressing the right pain points.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Works;
