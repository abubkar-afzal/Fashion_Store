import React from "react";
import offer from "../assets/7.jpg"
import Image from "next/image";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";

const Page6 = ({DealOfDay})=>{
    return(<>
             <div className=" overflow-hidden xsm:text-left xsm:bg-[---c1] xsm:content-center xsm:items-center  ">
                {DealOfDay.map((item)=>{
                    return(
        	    <div key={item._id} className="sm:grid sm:grid-cols-2 items-center ">
                        <div className="sm:pl-[2rem] sm:pt-[3rem]">
                    <h1 className="xsm:text-[4rem] xsm:font-bold xsm:m-3 xsm:text-[---c4]">{item.product_display_page_title}</h1>
                    <p className="xsm:text-[1rem] xsm:font-bold xsm:m-3 xsm:text-[---c4]">{item.product_display_page_desc}</p>
                    
                    <Link href={`/components/other/${item.product_id}`}><button className=" h-[4rem] mb-8 xsm:rounded-md xsm:text-[1.5rem] xsm:font-bold xsm:m-3 xsm:text-white xsm:bg-[---c4] font-black sm:px-4 xsm:px-3 flex  items-center hover:bg-[---b4]">Shope Now </button>
                    </Link></div>
                    <Image src={item.product_img} width={1200} height={1200} alt="" className="xsm:px-4  xsm:w-[400px] xsm:h-[400px] sm:w-[500px] sm:h-[500px] sm:py-[2rem] place-self-end" />
                    </div>)
                })}   
         </div>
    </>)
}
export default Page6;