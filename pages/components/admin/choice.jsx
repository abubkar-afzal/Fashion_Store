import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Choice = ()=>{
    return(<>
    <Fade duration={2000}>
        <div className="my-[4rem] overflow-hidden">
                <div className="font-black  px-[2rem] text-center xsm:text-[18px] sm:text-[22px] mb-[1rem] ">Choice Is Your Work Is Our ~~!!</div>
            <div className="flex flex-col  items-center space-x-[1rem] space-y-[1rem] ">
            <div></div>
            <Link href={`/components/admin/allOrders`}><button  className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]  hover:bg-[---h2]">
                All Orders
              </button></Link> <Link href={`/components/admin/aboutProducts`}><button  className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]  hover:bg-[---h2]">
                About Products
              </button></Link>
            </div></div></Fade>
    </>)
}
export default Choice;