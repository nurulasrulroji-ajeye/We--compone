import React from "react";
import {
  Mandiri,
  Bukalapak,
  Tokped,
  Gojek,
  Bca,
  Pertamina,
  Bjb,
  Cisco,
  Workday,
  Ciputra,
  Telkom,
  Trans,
} from "../../../assets";
import Link from "next/link";

const dataLogo = [
  {
    id: 1,
    logo: <Mandiri className="w-full h-full" />,
    link: "https://bankmandiri.co.id/",
  },
  {
    id: 2,
    logo: <Bukalapak className="w-full h-full" />,
    link: "https://www.bukalapak.com/",
  },
  {
    id: 3,
    logo: <Tokped className="w-full h-full" />,
    link: "https://www.tokopedia.com/",
  },
  {
    id: 4,
    logo: <Gojek className="w-full h-full" />,
    link: "https://www.gojek.com/id-id/",
  },
  {
    id: 5,
    logo: <Bca className="w-full h-full" />,
    link: "https://www.bca.co.id/id/individu",
  },
  {
    id: 6,
    logo: <Pertamina className="w-full h-full" />,
    link: "https://www.pertamina.com/",
  },
  {
    id: 7,
    logo: <Bjb className="w-full h-full" />,
    link: "https://www.bankbjb.co.id/",
  },
  {
    id: 8,
    logo: <Cisco className="w-full h-full" />,
    link: "https://www.cisco.com/",
  },
  {
    id: 9,
    logo: <Workday className="w-full h-full" />,
    link: "https://www.workday.com/",
  },
  {
    id: 10,
    logo: <Ciputra className="w-full h-full" />,
    link: "https://www.ciputra.com/en/homepage-en/",
  },
  {
    id: 11,
    logo: <Telkom className="w-full h-full" />,
    link: "https://www.telkom.co.id/sites",
  },
  {
    id: 12,
    logo: <Trans className="w-full h-full" />,
    link: "https://www.transtv.co.id/corporate/profile",
  },
];

const Costumer = () => {
  return (
    <div
      className="w-full flex flex-col items-center md:mt-[156px] mt-20"
      id="costumer"
    >
      <div className="font-Popins font-semibold md:text-4xl text-2xl max-w-[368px] text-center mb-8 md:mb-16">
        Our Customers
        <br /> are our biggest fans
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 md:gap-10 gap-4 self-center">
        {dataLogo.map((logo) => (
          <Link href={logo.link} className="" key={logo.id}>
            <a
              className="md:w-40 md:h-20 w-20 h-10 grayscale opacity-70 hover:grayscale-0 transition duration-1000 ease-in-out"
              target="_blank"
            >
              {logo.logo}
            </a>
          </Link>
        ))}
      </div>
      <div className="text-xs md:text-sm font-Popins font-normal mt-5">
        see more
      </div>
    </div>
  );
};

export default Costumer;
