import React from "react";
import footerpic1 from "../assets/3.jpg"
import footerpic2 from "../assets/11.jpg"
import footerpic3 from "../assets/4.jpg"
import footerpic4 from "../assets/5.jpg"
import footerpic5 from "../assets/7.jpg"
import Image from "next/image";

const Footer = () => {

  return (
    <>
      <div className="  overflow-hidden xsm:text-center xsm:bg-white  xsm:items-center">
        <div className="flex flex-wrap space-x-4 space-y-2 place-content-center">
            <div></div>
          <Image src={footerpic1} alt="" className="xsm:w-[6.5rem] xsm:h-[6.5rem] sm:w-[10rem] sm:h-[10rem]" />
          <Image src={footerpic2} alt="" className="xsm:w-[6.5rem] xsm:h-[6.5rem] sm:w-[10rem] sm:h-[10rem]" />
          <Image src={footerpic3} alt="" className="xsm:w-[6.5rem] xsm:h-[6.5rem] sm:w-[10rem] sm:h-[10rem]" />
          <Image src={footerpic4} alt="" className="xsm:w-[6.5rem] xsm:h-[6.5rem] sm:w-[10rem] sm:h-[10rem]" />
          <Image src={footerpic5} alt="" className="xsm:w-[6.5rem] xsm:h-[6.5rem] sm:w-[10rem] sm:h-[10rem]" />

        </div>
        <div className="xsm:bg-white xsm:w-[13rem] xsm:m-auto xsm:absolute xsm:mt-[-1rem] xsm:left-[5.7rem] sm:w-[22rem] sm:h-[3rem] sm:place-content-center sm:left-[18rem]  "><p className="text-[15px]"> We can make custom design's as our customer need. </p></div>
        <div className="bg-[---c4] w-[100%] h-[10rem]">
            <div className="text-white flex space-x-4 my-5 pt-5 place-content-center">
            <a href=""><p>Men</p></a>
            <a href=""><p>Women</p></a>
            <a href=""><p>Kids</p></a>
            <a href=""><p>Collection</p></a>
            <a href=""><p>Trends</p></a>
            </div>
            <div className="text-white text-[10px] w-[20rem] m-auto"><p>This Page Is Created By Hafiz Abubkar Afzal Only For Personal Project Not For Production</p></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
