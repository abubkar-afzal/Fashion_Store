import React,{ useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
const Header =()=>{
    const [cancel,setCancel] = useState(true);
    const showCancel=()=>{
        setCancel(!cancel);
    }
    return(<>
   
        <div className="xsm:overflow-x-hidden sticky z-10 xsm:mt-3 xsm:flex xsm:justify-between
         sm:place-items-baseline sm:items-center sm:mt-[2rem] sm:mx-[1rem]">
         {//sm
            }
            <Link href={`/`}><div className="ml-3 xsm:text-[24px] sm:text-[26px] cursor-pointer font-bold ">FASHION</div></Link>
            <div className="xsm:hidden  sm:flex sm:space-x-4  sm:relative  font-semibold">
            <Link href={`/components/other/men`}>
                <div className="sm:text-[18px] ">MEN</div>
            </Link>
            
            <Link href={`/components/other/women`}>
                <div className="sm:text-[18px] ">WOMEN</div>
            </Link>
            
            <Link href={`/components/other/kids`}>
                <div className="sm:text-[18px] ">KIDS</div>
            </Link>
            
            <Link href={`/components/other/family`}>
                <div className="sm:text-[18px] ">FAMILY</div>
            </Link>
            
            <Link href={`/components/other/trends`}>
                <div className="sm:text-[18px] ">TRENDS</div>
            </Link>
            </div>
            <div className="sm:flex sm:space-x-3 sm:relative ">
           <div className="xsm:hidden sm:block   mt-1 mr-2  cursor-pointer sm:hover:text-[---c2] ">
           <Link href={`/components/checkout`}> <FaCartShopping className="sm:text-[25px]"/></Link>
            </div>
            <div className="">
            <Link href={`/components/login`}><button className="xsm:hidden sm:block sm:border-[2px] sm:border-black sm:w-[5rem]  sm:hover:bg-[---c2] hover:border-none hover:text-white h-[2rem] rounded-[10px]">LOGIN</button></Link>
            </div>
            </div>
        {//xsm

           }
           <div className="flex sm:hidden items-baseline">
           <Link href={`/components/checkout`}><FaCartShopping className=" cursor-pointer xsm:text-[20px] xsm:col-start-5 xsm:ml-[3rem]" /></Link>
            
            <div className="xsm:pl-9 xsm:mr-4 mt-[5px] ">
                <div className="">
                {
                    cancel ? 
                    <div onClick={showCancel}>
                    <GiHamburgerMenu className=" xsm:duration-[2s] cursor-pointer xsm:text-[22px]"  />
                    </div>
                    :
                    <div onClick={showCancel}>
                    <RxCross1 className="xsm:duration-[2s] xsm:-[-2rem] cursor-pointer xsm:text-[22px]" />
                    </div>
                }  
                </div>
                <ul className={cancel ? "xsm:fixed xsm:duration-[2s] xsm:font-bold  xsm:right-[-10rem] xsm:ml-[-4.5rem] xsm:text-right xsm:bg-[---c2] mt-2 xsm:p-2":"xsm:right-[0.2rem] xsm:duration-[2s] xsm:font-bold xsm:fixed mt-2 xsm:ml-[-4.5rem] xsm:text-right xsm:bg-[---c2] xsm:p-2" }>
                <Link href={`/components/other/men`}><li className="xsm:hover:bg-[---c3] xsm:cursor-pointer">MEN</li></Link>
                <Link href={`/components/other/women`}><li className="xsm:hover:bg-[---c3] xsm:cursor-pointer">WOMEN</li></Link>
                <Link href={`/components/other/kids`}><li className="xsm:hover:bg-[---c3] xsm:cursor-pointer">KIDS</li></Link>
                <Link href={`/components/other/family`}><li className="xsm:hover:bg-[---c3] xsm:cursor-pointer">FAMILY</li></Link>
                <Link href={`/components/other/trends`}><li className="xsm:hover:bg-[---c3] xsm:cursor-pointer">TRENDS</li></Link>
                <Link href={`/components/login`}><li className="xsm:hover:bg-[---c3] xsm:cursor-pointer">
                <button className="">LOGIN</button>
                </li></Link>
                </ul>
            </div></div>
            </div>
            <div className="xsm:h-[8vh] sm:h-[13vh] w-[100vw] absolute top-0 bg-[---c1] shadow-xl"></div>
              
    </>)
}
export default Header;