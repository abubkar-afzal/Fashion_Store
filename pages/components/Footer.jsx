import React from "react";
import footerpic1 from "../assets/3.jpg"
import footerpic2 from "../assets/11.jpg"
import footerpic3 from "../assets/4.jpg"
import footerpic4 from "../assets/5.jpg"
import footerpic5 from "../assets/7.jpg"
import Image from "next/image";
import Link from "next/link";

const Footer = () => {

  return (
    <>
      <div className="   xsm:text-center xsm:bg-white  xsm:items-center">
        <div className="flex flex-wrap space-x-4 space-y-2 place-content-center">
            <div></div>
          <Image src={footerpic1} alt="" className="xsm:w-[6.5rem] xsm:h-[6.5rem] sm:w-[10rem] sm:h-[10rem]" />
          <Image src={footerpic2} alt="" className="xsm:w-[6.5rem] xsm:h-[6.5rem] sm:w-[10rem] sm:h-[10rem]" />
          <Image src={footerpic3} alt="" className="xsm:w-[6.5rem] xsm:h-[6.5rem] sm:w-[10rem] sm:h-[10rem]" />
          <Image src={footerpic4} alt="" className="xsm:w-[6.5rem] xsm:h-[6.5rem] sm:w-[10rem] sm:h-[10rem]" />
          <Image src={footerpic5} alt="" className="xsm:w-[6.5rem] xsm:h-[6.5rem] sm:w-[10rem] sm:h-[10rem]" />

        </div>

        <div className=" mx-auto w-full place-items-center xsm:absolute  xsm:mt-[-1rem] "><p className="text-[15px] xsm:bg-white xsm:w-[13rem] sm:w-[16rem] sm:text-[17px]"> We can make custom design's as our customer need. </p></div>
        <div className="bg-[---c4] ">
            <div className="text-white flex xsm:flex-col sm:flex-row space-x-4 my-5 pt-5 place-content-center">
            <Link href={`/components/other/men`}>
                <div className="underline-hover-white">MEN</div>
            </Link>
            
            <Link href={`/components/other/women`}>
                <div className="underline-hover-white">WOMEN</div>
            </Link>
            
            <Link href={`/components/other/kids`}>
                <div className="underline-hover-white">KIDS</div>
            </Link>
            
            <Link href={`/components/other/family`}>
                <div className="underline-hover-white">FAMILY</div>
            </Link>
            
            <Link href={`/components/other/trends`}>
                <div className="underline-hover-white">TRENDS</div>
            </Link>
            </div>
            <div className="text-white text-[10px] sm:text-[12px] w-[20rem] px-[1rem] pb-[2rem] m-auto"><p>This Page Is Created By Hafiz Abubkar Afzal Only For Personal Project Not For Production</p></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
