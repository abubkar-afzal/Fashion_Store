import React from "react";
import pic2 from "../assets/66ece38a8bbc589f7cb8563865790ce3.jpg"
import pic3 from "../assets/0de2d9252fb3218cdd3fb2d515cebbb3.jpg"
import pic4 from "../assets/3c7f82c69dcf52468b1ff729a5f30f11.jpg"
import Image from "next/image";

const Page2 = ()=>{
    return(<>
        <div className=" bg-white overflow-y-hidden m-4 text-center justify-items-center ">
            <h1 className="text-[3rem] font-bold text-center m-2">
             New Collection
            </h1>
            <h3 className="xsm:my-4 xsm:text-[22px]">
                There is the new winter collection for men. This is the latest one in market. 
            </h3>
            <div className="">
            <div className=" m-0 sm:flex  sm:flex-wrap space-y-[3rem] sm:space-x-[3rem] sm:place-content-center justify-between mx-auto  ">
                <div className="hidden sm:block"></div>
            <Image src={pic2} width={1200} height={1200} alt="pic2" className="xsm:cursor-pointer w-[10rem] sm:w-[15rem]" />
            <Image src={pic3} width={1200} height={1200} alt="pic3" className="xsm:cursor-pointer w-[10rem] sm:w-[15rem]" />
            <Image src={pic4} width={1200} height={1200} alt="pic4" className="xsm:cursor-pointer w-[10rem] sm:w-[15rem]" />
            
            </div>
            </div>
        </div>

    </>)
} 
export default Page2;