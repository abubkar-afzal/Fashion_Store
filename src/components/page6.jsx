import React from "react";
import offer from "../assets/7.jpg"

const Page6 = ()=>{
    return(<>
             <div className="xsh:h-[932px] overflow-hidden xsm:text-left xsm:bg-[---c1] xsm:content-center xsm:items-center sh:h-[600px]">
        	    <div className="sm:grid sm:grid-cols-2">
                    <div className="sm:pl-[2rem] sm:pt-[3rem]">
                <h1 className="xsm:text-[4rem] xsm:font-bold xsm:m-3 xsm:text-[---c4]">Deal Of The Day</h1>
                <p className="xsm:text-[1rem] xsm:font-bold xsm:m-3 xsm:text-[---c4]">this deal is only for some time.This a very good deal. You can take very much advantage from this deal. This awesome deal is only for you.</p>
                <div className="flex items-center">
                <div className="xsm:text-[2.2rem] text-center xsm:w-[5rem] xsm:h-[4rem] xsm:bg-white  xsm:font-bold xsm:m-3 xsm:text-[---c4]">03 <p className="xsm:text-[1rem] xsm:mt-[-11px]">hour</p></div>
                <div className="xsm:text-[2.2rem] text-center xsm:w-[5rem] xsm:h-[4rem] xsm:bg-white  xsm:font-bold xsm:m-3 xsm:text-[---c4]">08 <p className="xsm:text-[1rem] xsm:mt-[-11px]">mint</p></div>
                <div className="xsm:text-[2.2rem] text-center xsm:w-[5rem] xsm:h-[4rem] xsm:bg-white  xsm:font-bold xsm:m-3 xsm:text-[---c4]">09 <p className="xsm:text-[1rem] xsm:mt-[-11px]">sec</p></div>
                </div>
                <button className="xsm:w-[12rem] h-[4rem] mb-8 xsm:rounded-md xsm:text-[1.5rem] xsm:font-bold xsm:m-3 xsm:text-white xsm:bg-[---c4]">Shope Now</button>
                </div>
                <img src={offer} alt="" className="xsm:px-4 xsm:pt-12 sm:pt-[12rem] " />
                </div>
         </div>
    </>)
}
export default Page6;