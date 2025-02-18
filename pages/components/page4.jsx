import React, { useState } from "react";
import Image1 from  "../assets/1.jpg"
import Image2 from  "../assets/2.jpg"
import Image3 from  "../assets/3.jpg"
import Image4 from  "../assets/4.jpg"
import { IoIosStar } from "react-icons/io";
import Image from "next/image";
const Page4 = ()=>{
    const [next,setnext] = useState(1);
    const slide1 =()=>{
        setnext(1);
    }
    const slide2 =()=>{
        setnext(2);
    }
    const slide3 =()=>{
        setnext(3);
    }
    const slide4 =()=>{
        setnext(4);
    }
    let images; 

    if(next===1){
       images= "xsm:hover:cursor-pointer xsm:duration-[2s] xsm:flex xsm:space-x-8 xsm:relative xsm:left-[2rem] xsm:w-[1280px]  xsm:mt-8 sm:mt-0"
    }
    else if(next===2){
       images= "xsm:hover:cursor-pointer xsm:duration-[2s] xsm:flex xsm:space-x-8 xsm:relative xsm:left-[-20rem] xsm:w-[1280px]  xsm:mt-8  sm:mt-0 "
    }
    else if(next===3){
       images= "xsm:hover:cursor-pointer xsm:duration-[2s] xsm:flex xsm:space-x-8 xsm:relative xsm:left-[-40rem] xsm:w-[1280px]  xsm:mt-8 sm:mt-0"
    }
    else{
       images= "xsm:hover:cursor-pointer xsm:duration-[2s] xsm:flex xsm:space-x-8 xsm:relative xsm:left-[-60rem] xsm:w-[1280px]  xsm:mt-8  sm:mt-0"
    }

    return(
        <>
        <div className="xsh:h-[932px] overflow-hidden xsm:text-left xsm:bg-[---c4] xsm:p-5 xsm:pt-[2rem]  sh:h-[500px]">
            <div className="sm:grid sm:grid-cols-2 ">
                <div className=" sm:bg-[---c4]">
            <h1 className="xsm:text-[3rem] sm:text-[4rem] xsm:text-white xsm:pb-4">Best Seller Product</h1>
            <p className="xsm:text-1rem] xsm:text-white xsm:p-2">These are our best products those we have sell. The market is not aware from these products those we have. You can also got best and new product as you need. We deal with all kinds of products as any one need in any season. </p>
            <button className="xsm:cursor-pointer xsm:hover:bg-[---c5] xsm:active:bg-[---c6]  xsm:text-[1.5rem] xsm:text-white xsm:w-[9rem] xsm:rounded-sm xsm:mt-2 xsm:h-[3rem] xsm:border-[1.5px] xsm:shadow-sm text-center xsm:shadow-white xsm:border-white">See More</button>
            </div>
            <div className="sm:overflow-hidden">
            <div className={images}>
            
            <div className="Images" >
                <Image src={Image1} alt="" className="w-[18rem] h-[18rem]" />
                <div className="xsm:bg-white xsm:space-y-2 p-2 xsm:w-[18rem]">
                <div className="flex">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                </div>
                <p>Green shirt and skin pent</p>
                <p>price: 90$</p>
                </div>
            </div>
            <div className="Images">
                <Image src={Image2} alt="" className="w-[18rem] h-[18rem]" />
                <div className="xsm:bg-white xsm:space-y-2 p-2 xsm:w-[18rem]">
                <div className="flex">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                </div>
                <p>Brown coat and black shirt</p>
                <p>price: 110$</p>
                </div>
            </div>
            <div className="Images">
                <Image src={Image3} alt="" className="w-[18rem] h-[18rem]" />
                <div className="xsm:bg-white xsm:space-y-2 p-2 xsm:w-[18rem]">
                <div className="flex">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                </div>
                <p>Black coat and white Shirt</p>
                <p>price: 100$</p>
                </div>
            </div>
            <div className="Images">
                <Image src={Image4} alt="" className="w-[18rem] h-[18rem]" />
                <div className="xsm:bg-white xsm:space-y-2 p-2 xsm:w-[18rem]">
                <div className="flex">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
            
                </div>
                <p>Brown shirt and Skin pent</p>
                <p>price: 80$</p>
                </div>
            </div>

            </div>
            <div className="xsm:space-x-3 pt-8 xsm:text-center">
                <input onClick={slide1} type="radio" name="Image1" id="Image1" className="radio" />
                <input onClick={slide2} type="radio" name="Image1" id="Image2" className="radio" />
                <input onClick={slide3} type="radio" name="Image1" id="Image3" className="radio" />
                <input onClick={slide4} type="radio" name="Image1" id="Image4" className="radio" />
            </div></div>
            </div>
        </div>
        </>
    )
}
export default Page4;
