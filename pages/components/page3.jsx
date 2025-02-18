import React from "react";
import best from "../assets/good.jpg"
import Image from "next/image";

const Page3 = ()=>{
    return( <>
        <div className="xsh:h-[932px] xsm:bg-white xsm:text-center xsm:m-4 xsm:pt-[2rem] sm:grid sm:grid-cols-2 sm:w-[100vwh] sh:h-[600px] ">
         <div className="sm:col-start-2 sm:col-end-2">   
        <h1 className="xsm:text-[3rem] xsm:font-bold xsm:text-left xsm:m-2">
             Best Fashion  <br />     Since 2014
            </h1>
            <h3 className="xsm:my-4 xsm:text-[22px] xsm:text-left xsm:mb-4">
                This dress is very beautiful and its very famous lots of people like it. People buy it for they self and some of them buy this for give gift to any one. This dress is now the time not avalible in market but we have its stock. 
            </h3>
            </div>
            <div className="sm:row-start-1 sm:place-self-center">
            <Image src={best} alt="" className="xsm:w-[300px] sm:w-[400px] sm:mt-[-6rem] xsm:mr-[2rem] xsm:pt-4 xsm:rounded-tl-[7rem] xsm:place-self-center" />
            <div className="xsm:text-[15px] xsm:ml-[6rem] xsm:mt-[-2rem]  xsm:grid xsm:grid-cols-3 xsm:gap-x-[3px] xsm:w-[15rem] xsm:bg-white xsm:shadow-xl sm:w-[30rem] sm:ml-[30rem] sm:text-[20px] ">
                <div className="xsm:border-l-4 xsm:bg-white xsm:w-[6rem] sm:w-[10rem]"><h3>2014</h3><p>Launch</p> </div>
                <div className="xsm:border-l-4 xsm:bg-white xsm:w-[6rem] sm:w-[10rem]"><h3>89001+</h3><p>Like</p></div>
                <div className="xsm:border-l-4 xsm:bg-white xsm:w-[6rem] sm:w-[10rem]"><h3>72103+</h3><p>Buy</p></div>
            </div>
            </div>
        </div>
    </>)
}
export default Page3;