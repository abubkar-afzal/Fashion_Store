import React, { useEffect, useState } from "react";
import footerpic1 from "../assets/3.jpg"
import footerpic2 from "../assets/11.jpg"
import footerpic3 from "../assets/4.jpg"
import footerpic4 from "../assets/5.jpg"
import footerpic5 from "../assets/7.jpg"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
 const router = useRouter();
 let currentUrl =router.asPath;
 let men;
 let women;
 let kids;
 let family;
let trends;
let feedback;
 if (currentUrl === "/components/other/men") {
  men = true;
  women = false;
  kids = false;
  family = false;
  trends = false;  
  feedback = false;
 }else if (currentUrl === "/components/other/women") {
  men = false;
  women = true;
  kids = false;
  family = false;
  trends = false;  
  feedback = false;

 }else if (currentUrl === "/components/other/kids") {
  men = false;
  women = false;
  kids = true;
  family = false;
  trends = false;  
  feedback = false;

 }else if (currentUrl === "/components/other/family") {
  men = false;
  women = false;
  kids = false;
  family = true;
  trends = false;  
  feedback = false;

 }else if (currentUrl === "/components/other/trends") {
  men = false;
  women = false;
  kids = false;
  family = false;
  trends = true;  
  feedback = false;

 }else if (currentUrl === "/components/feedback") {
  men = false;
  women = false;
  kids = false;
  family = false;
  trends = false;  
  feedback = true;

 }
 else{
  men = false;
  women = false;
  kids = false;
  family = false;
  trends = false;  
  
 }
 
 const [pictures, setPictures] = useState([]);
 useEffect(() => {
  fetchPictures();
 }, [router.query]);
 const fetchPictures = async () => { 
  const req = await fetch("/api/getFooter");
  const res = await req.json();
  setPictures(res.data);
 
}
  return (
    <>
      <div className="   xsm:text-center xsm:bg-white  xsm:items-center">
        <div className="flex flex-wrap space-x-4 space-y-2 place-content-center">
            <div></div>
            {
              pictures.map((item)=>{
                return(
                  <Image  src={item.product_img} key={item._id} width={500} height={500} alt="" className="xsm:w-[6.5rem] xsm:h-[6.5rem] sm:w-[10rem] sm:h-[10rem]" />
                )
              })
            }
         
        </div>

        <div className=" mx-auto w-full place-items-center xsm:absolute  xsm:mt-[-1rem] "><p className="text-[15px] xsm:bg-white xsm:w-[13rem] sm:w-[16rem] sm:text-[17px]"> We can make custom design's as our customer need. </p></div>
        <div className="bg-[---c4] ">
            <div className="text-white flex xsm:flex-col sm:flex-row space-x-4 my-5 pt-5 place-content-center">
            <Link href={`/components/other/men`}>
                <div className={` ${men ? "underline-with-margin" :"underline-hover-white"}
 
 `}>MEN</div>
            </Link>
            
            <Link href={`/components/other/women`}>
                <div className={`${women ? "underline-with-margin" :"underline-hover-white"}`}>WOMEN</div>
            </Link>
            
            <Link href={`/components/other/kids`}>
                <div className={` ${kids ? "underline-with-margin" :"underline-hover-white"}
`}>KIDS</div>
            </Link>
            
            <Link href={`/components/other/family`}>
                <div className={` ${family ? "underline-with-margin" :"underline-hover-white"}
`}>FAMILY</div>
            </Link>
            
            <Link href={`/components/other/trends`}>
                <div className={`${trends ? "underline-with-margin" :"underline-hover-white"}`}>TRENDS</div>
            </Link>
            <Link href={`/components/feedback`}>
                <div className={`${feedback ? "underline-with-margin" :"underline-hover-white"}`}>FEEDBACK</div>
            </Link>
            </div>
            <div className="text-white text-[10px] sm:text-[12px] w-[20rem] px-[1rem] pb-[2rem] m-auto"><p>This Page Is Created By Hafiz Abubkar Afzal Only For Personal Project Not For Production</p></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
