import React from "react";

import pic1 from "../assets/28552e92154082ef5126cf2e7cc8788d.jpg";

import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Page7 from "./page7";
import Image from "next/image";

const Page1 = () => {
  return (
    <>
      <div className="  top-0 bottom-0 overflow-y-scroll hideBar ">
        <div className="  xsm:p-2 xsm:bg-[---c1] xsm:grid sm:px-[2rem]   ">
          <div className=" xsm:mt-[2rem] xsm:relative xsm:text-[1rem] xsm:px-3 sm:grid sm:grid-cols-2  sm:content-center sm:mb-[2rem]  ">
            <div className="sm:w-[70%] content-center ">
              <h1 className="xsm:text-[3rem]  xsm:font-bold m-2">
                Find The Best Fashion Style For You
              </h1>
              <h3 className="xsm:my-4 xsm:text-[22px]">
                There you can find all types of styles because its fashion.com
                there you can find all the men, women, child collection as you
                need.
              </h3>
              <button className="xsm:bg-black xsm:active:bg-white xsm:active:text-black  xsm:text-white xsm:w-[10rem] xsm:h-12 xsm:rounded-lg xsm:my-2">
                SHOPE NOW
              </button>
            </div>
            <div className="   xsm:relative xsm:justify-items-end my-4  sm:w-[26rem] sm:h-[40rem] sm:relative sm:right-[4rem]  ml-auto">
              <Image
              width={1020}
              height={1020}
                src={pic1}
                alt=" picture"
                className="rounded-bl-[6rem] xsm:w-[250px] xsm:h-[300px] sm:w-[30rem] sm:h-[40rem]"
              />
            </div>
            <div></div>
          </div>
        </div>
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
      </div>
    </>
  );
};
export default Page1;
