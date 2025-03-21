import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  const router = useRouter();
  let currentUrl = router.asPath;
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
  } else if (currentUrl === "/components/other/women") {
    men = false;
    women = true;
    kids = false;
    family = false;
    trends = false;
    feedback = false;
  } else if (currentUrl === "/components/other/kids") {
    men = false;
    women = false;
    kids = true;
    family = false;
    trends = false;
    feedback = false;
  } else if (currentUrl === "/components/other/family") {
    men = false;
    women = false;
    kids = false;
    family = true;
    trends = false;
    feedback = false;
  } else if (currentUrl === "/components/other/trends") {
    men = false;
    women = false;
    kids = false;
    family = false;
    trends = true;
    feedback = false;
  } else if (currentUrl === "/components/feedback") {
    men = false;
    women = false;
    kids = false;
    family = false;
    trends = false;
    feedback = true;
  } else {
    men = false;
    women = false;
    kids = false;
    family = false;
    trends = false;
  }

  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    fetchPictures();
  }, []);
  const fetchPictures = async () => {
    const req = await fetch("/api/getFooter");
    const res = await req.json();
    setPictures(res.data);
  };
  return (
    <>
      <div className="   xsm:text-center xsm:items-center ">
        <div className="flex flex-wrap space-x-4 space-y-2 place-content-center">
          <div></div>
          {pictures.map((item) => {
            return (
              <Image
                src={item.product_img}
                key={item._id}
                width={500}
                height={500}
                alt=""
                className="xsm:w-[6.5rem] xsm:h-[6.5rem] sm:w-[10rem] sm:h-[10rem]"
              />
            );
          })}
        </div>

        <div className=" mx-auto w-full place-items-center xsm:absolute  xsm:mt-[-1rem] ">
          <p className="text-[15px] bg-white xsm:w-[13rem] w-[16rem] sm:text-[17px]">
            
            We can make custom design's as our customer need.
          </p>
        </div>
        <div className="bg-[---c4] ">
          <div className="text-white flex xsm:flex-col sm:flex-row space-x-4 my-5 pt-5 place-content-center text-center sm:mt-[3rem]">
            <div></div>
            <Link href={`/components/other/men`}>
              <div
                className={` ${
                  men ? "underline-with-margin" : "underline-hover-white"
                }
 
 `}
              >
                MEN
              </div>
            </Link>

            <Link href={`/components/other/women`}>
              <div
                className={`${
                  women ? "underline-with-margin" : "underline-hover-white"
                }`}
              >
                WOMEN
              </div>
            </Link>

            <Link href={`/components/other/kids`}>
              <div
                className={` ${
                  kids ? "underline-with-margin" : "underline-hover-white"
                }
`}
              >
                KIDS
              </div>
            </Link>

            <Link href={`/components/other/family`}>
              <div
                className={` ${
                  family ? "underline-with-margin" : "underline-hover-white"
                }
`}
              >
                FAMILY
              </div>
            </Link>

            <Link href={`/components/other/trends`}>
              <div
                className={`${
                  trends ? "underline-with-margin" : "underline-hover-white"
                }`}
              >
                TRENDS
              </div>
            </Link>
            <Link href={`/components/feedback`}>
              <div
                className={`${
                  feedback ? "underline-with-margin" : "underline-hover-white"
                }`}
              >
                FEEDBACK
              </div>
            </Link>
          </div>
          <div >
            <div  className=" text-white mx-auto text-center outline-dashed my-[2rem]">
              <p  className="font-bold xsm:text-[22px] sm:text-[24px] underline-offset-2 ">
                Contact
              </p>
             
              <div
                
                className=" text-white flex xsm:flex-col sm:flex-wrap sm:flex-row space-x-4 mt-5 pt-5 place-content-center text-center m-[1rem] "
              ><div></div>
                <Link
                  href={`https://wa.me/send?phone=923270972423&text=How Can I Help You ?`} target="_blank"
                >
                  <p
                    
                    className="flex px-2 hover:underline text-[---fo1] hover:text-[---wa] mx-auto text-center"
                  >
                    <IoLogoWhatsapp className="text-[22px] mr-2" />
                    +923270972423
                  </p>
                  <br />
                </Link>
                <Link href={`mailto:hafizabubakarafzal@gmail.com`} target="_blank">
                  <p
                    
                    className="flex px-2 hover:underline text-[---fo1] hover:text-[---em]"
                  >
                    <MdOutgoingMail className="text-[22px] mr-2" />
                    hafizabubakarafzal@gmail.com
                  </p>
                  <br />
                </Link>
                <Link href={`https://github.com/abubkar-afzal`} target="_blank">
                  <p
                    
                    className="flex px-2 hover:underline text-[---fo1] hover:text-[---gh]"
                  >
                    <SiGithub className="text-[22px] mr-2" />
                    GitHub
                  </p>
                  <br />
                </Link>
                <Link
                  href={`https://www.instagram.com/mr.syco.1?igsh=MWdmYXlsamozMDd0dw==`} target="_blank"
                > 
                  <p
                    
                    className="flex px-2 hover:underline text-[---fo1] hover:text-[---ig]"
                  >
                    <RiInstagramFill className="text-[22px] mr-2" />
                    Instagram
                  </p>
                  <br />
                </Link>
                <Link href={`https://www.linkedin.com/in/hafiz-abubakar-afzal-b77a46354

`} target="_blank">
                  <p
                    
                    className="flex px-2 hover:underline text-[---fo1] hover:text-[---ln]"
                  >
                    <FaLinkedin className="text-[22px] mr-2" />
                    Linkedin
                  </p>
                  <br />
                </Link>
              </div>
            </div>
          </div>

         
          <div
            
            className=" ml-2 mm:text-[18px] lm:text-[20px] text-[20px] l:text-[25px] ll:text-[30px] k:text-[35px] "
          >
            <div
              
              className="flex mt-4 space-x-[10px] text-center mx-2 flex-wrap place-content-center "
            >
              <p ></p>
              
              <Link href={`/`}>
                <p  className="text-white xsm:text-[10px] sm:text-[12px] hover:text-[---blur] mb-[2rem]">
                  &copy;2025 Fashion
                </p>
              </Link>
            </div>
            
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Footer;
