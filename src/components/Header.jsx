import React,{ useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
const Header =()=>{
    const [cancel,setCancel] = useState(true);
    const showCancel=()=>{
        setCancel(!cancel);
    }
    return(<>
        <div className="xsm:overflow-x-hidden xsm:absolute xsm:h-[200px] xsm:m-4 xsm:grid xsm:grid-cols-6
        sm:absolute sm:h-[300px] sm:m-4 sm:grid sm:grid-cols-3 sm:items-baseline sm:pt-[2rem] sm:p-[2rem] md:ml-[6rem]  ">
         {//sm
            }
            <div className="ml-3 xsm:text-[20px] sm:text-[22px] cursor-pointer font-bold ">FASHION</div>
            <div className="xsm:hidden  sm:flex sm:space-x-4 sm:mx-auto sm:relative sm:left-[-5rem] font-semibold">
            <a href="">
                <div className="sm:text-[18px] sm:hover:scale-[1.2] sm:duration-[2s]">MEN</div>
            </a>
            
            <a href="">
                <div className="sm:text-[18px] sm:hover:scale-[1.2] sm:duration-[2s]">WOMEN</div>
            </a>
            
            <a href="">
                <div className="sm:text-[18px] sm:hover:scale-[1.2] sm:duration-[2s]">KIDS</div>
            </a>
            
            <a href="">
                <div className="sm:text-[18px] sm:hover:scale-[1.2] sm:duration-[2s]">COLLECTION</div>
            </a>
            
            <a href="">
                <div className="sm:text-[18px] sm:hover:scale-[1.2] sm:duration-[2s]">TRENDS</div>
            </a>
            </div>
            <div className="sm:flex sm:space-x-3 sm:relative sm:right-[-7rem]">
            <div className="xsm:hidden sm:block sm:text-[30px] sm:hover:scale-[1.3] sm:duration-[2s] cursor-pointer sm:hover:text-[---c2] ">
                <FiShoppingBag />
            </div>
            <div className="">
                <button className="xsm:hidden sm:block sm:border-[2px] sm:border-black sm:w-[5rem] sm:hover:scale-[1.2] sm:duration-[2s] sm:hover:bg-[---c2] ">LOGIN</button>
            </div>
            </div>
        {//xsm
           }<FiShoppingBag className="sm:hidden cursor-pointer xsm:text-[20px] xsm:col-start-5 xsm:ml-[3rem]" />
            
            <div className="xsm:pl-9 xsm:mr-4 sm:hidden ">
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
                <ul className={cancel ? "xsm:absolute xsm:duration-[2s] xsm:font-bold  xsm:right-[-10rem] xsm:ml-[-4.5rem] xsm:text-right xsm:bg-[---c2] xsm:py-2":"xsm:right-[-0.1rem] xsm:duration-[2s] xsm:font-bold xsm:absolute xsm:ml-[-4.5rem] xsm:text-right xsm:bg-[---c2] xsm:py-2" }>
                <li className="xsm:hover:bg-[---c3] xsm:cursor-pointer">MEN</li>
                <li className="xsm:hover:bg-[---c3] xsm:cursor-pointer">WOMEN</li>
                <li className="xsm:hover:bg-[---c3] xsm:cursor-pointer">KIDS</li>
                <li className="xsm:hover:bg-[---c3] xsm:cursor-pointer">COLLECTION</li>
                <li className="xsm:hover:bg-[---c3] xsm:cursor-pointer">TRENDS</li>
                <li className="xsm:hover:bg-[---c3] xsm:cursor-pointer">
                    <button className="">LOGIN</button>
                </li>
                </ul>
            </div>
            </div>
    </>)
}
export default Header;