import React  from "react";

import pic1 from "../assets/28552e92154082ef5126cf2e7cc8788d.jpg";

import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Page7 from "./page7";


const Page1 = () => {
 
    
  return (
        < ><div className="  top-0 bottom-0 overflow-y-scroll ">
        <div className="xsh:h-[932px]  xsm:p-2 xsm:bg-[---c1]  xsm:h-[100%] xsm:grid xsm:grid-rows-2 sm:px-[2rem] sh:h-[1024px]  ">
            
            <div className="xsh:mt-[12rem] place-self-center xsm:mt-[10rem] xsm:relative xsm:text-[1rem] xsm:px-3 sm:grid sm:grid-cols-2  sm:h-[100%] sm:w-[100%] sm:content-center sm:pt-[24rem] md:ml-[6rem]  ">
            <div className="sm:w-[70%] ">
                <h1 className="xsm:text-[3rem]  xsm:font-bold m-2">
                Find The Best Fashion Style For You
                </h1>
                <h3 className="xsm:my-4 xsm:text-[22px]">
                There you can find all types of styles because its fashion.com
                there you can find all the men, women, child collection as you
                need.
                </h3>
                <button className="xsm:bg-black xsm:active:bg-white xsm:active:text-black  xsm:text-white xsm:w-[10rem] xsm:h-12 xsm:rounded-lg xsm:my-2">SHOPE NOW</button>
            </div>
            <div className="xsm:w-[240px] xsm:h-[300px]  xsm:absolute xsm:right-0 xsm:mr-10 mt-4  sm:w-[26rem] sm:h-[40rem] sm:relative sm:right-[4rem] md:right-[-1rem] ">
                <img src={pic1} alt=" picture" className="rounded-bl-[6rem] sm:w-[30rem] sm:h-[40rem]" />
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
