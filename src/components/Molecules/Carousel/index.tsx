import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ajeye } from "../../../assets";

const dataTeam = [
  {
    id: 1,
    name: "Ajeye",
    jabatan: "Frontend Developer",
    src: ajeye,
    alt: "ajeye",
  },
  {
    id: 2,
    name: "Ajeye",
    jabatan: "Frontend Developer",
    src: ajeye,
    alt: "ajeye",
  },
  {
    id: 3,
    name: "Ajeye",
    jabatan: "Frontend Developer",
    src: ajeye,
    alt: "ajeye",
  },
  {
    id: 4,
    name: "Ajeye",
    jabatan: "Frontend Developer",
    src: ajeye,
    alt: "ajeye",
  },
  {
    id: 5,
    name: "Ajeye",
    jabatan: "Frontend Developer",
    src: ajeye,
    alt: "ajeye",
  },
  {
    id: 6,
    name: "Ajeye",
    jabatan: "Frontend Developer",
    src: ajeye,
    alt: "ajeye",
  },
  {
    id: 7,
    name: "Ajeye",
    jabatan: "Frontend Developer",
    src: ajeye,
    alt: "ajeye",
  },
  {
    id: 8,
    name: "Ajeye",
    jabatan: "Frontend Developer",
    src: ajeye,
    alt: "ajeye",
  },
  {
    id: 9,
    name: "Ajeye",
    jabatan: "Frontend Developer",
    src: ajeye,
    alt: "ajeye",
  },
  {
    id: 10,
    name: "Ajeye",
    jabatan: "Frontend Developer",
    src: ajeye,
    alt: "ajeye",
  },
];

type Props = {
  slidesToShow: number;
};

const Carousel = (props: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    speed: 300,
    slidesToShow: 3,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_current: any, next: React.SetStateAction<number>) =>
      setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const templateImages = dataTeam.map((data, idx) => {
    if (data !== null) {
      return (
        <div
          className={
            idx === imageIndex
              ? ""
              : "scale-75 transition-transform duration-300"
          }
          key={data.id}
        >
          <div className="flex justify-center md:w-[200px] md:h-[200px] overflow-hidden items-center bg-[#C4C4C4] rounded-full">
            <Image src={data.src} alt={data.alt} width={200} height={200} />
          </div>
          <div className="w-full text-center my-5">
            <p className="font-semibold text-2xl font-Popins">{data.name}</p>
            <p className="text-base text-[#9F9F9F] font-Popins">
              {data.jabatan}
            </p>
          </div>
        </div>
      );
    }
    return null;
  });

  return (
    <Slider {...settings} className="md:w-[50%] w-full">
      {templateImages}
    </Slider>
  );
};

export default Carousel;
