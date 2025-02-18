import React from "react";
import pic2 from "../assets/66ece38a8bbc589f7cb8563865790ce3.jpg"
import pic3 from "../assets/0de2d9252fb3218cdd3fb2d515cebbb3.jpg"
import pic4 from "../assets/3c7f82c69dcf52468b1ff729a5f30f11.jpg"
import Image from "next/image";

const Page2 = ()=>{
    return(<>
        <div className="xsh:h-[932px] bg-white xsm:overflow-y-hidden xsm:m-4 sm:place-content-center sm:text-center sh:h-[600px]">
            <h1 className="xsm:text-[4rem] xsm:font-bold xsm:text-center xsm:m-2  xsm:text-wrap">
             New Collection
            </h1>
            <h3 className="xsm:my-4 xsm:text-[22px]">
                There is the new winter collection for men. This is the latest one in market. 
            </h3>
            <div className="md:mx-[0%] lg:mx-[10%]">
            <div className="xsm:w-[10rem] xsm:h-[40rem] xsm:grid xsm:grid-cols-1 xsm:ml-[100px] sm:m-0 sm:flex sm:w-[90%] sm:flex-wrap sm:items-center sm:space-x-[4%] sm:mx-auto sh:mt-[-7rem] ">
            <Image src={pic2} alt="pic2" className="xsm:cursor-pointer sm:w-[15rem]" />
            <Image src={pic3} alt="pic3" className="xsm:cursor-pointer sm:w-[15rem]" />
            <Image src={pic4} alt="pic4" className="xsm:cursor-pointer sm:w-[15rem]" />
            
            </div>
            </div>
        </div>

    </>)
} 
export default Page2;