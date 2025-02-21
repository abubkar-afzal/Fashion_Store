import React from "react";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";

const Page3 = ({ bestFashion }) => {
  console.log(bestFashion);
  return (
    <>
      <div className="h-[70vh] overflow-y-scroll hideBar my-[2rem]">
        {bestFashion.map((item) => {
          return (
            <div
              key={item._id}
              className=" xsm:bg-white xsm:text-center sm:grid sm:grid-cols-2  m-[1rem] my-[2rem] "
            >
              <div className="sm:col-start-2 sm:col-end-2">
                <h1 className="xsm:text-[3rem] xsm:font-bold xsm:text-left xsm:m-2">
                  {item.product_display_page_title}
                </h1>
                <h3 className="xsm:my-4 xsm:text-[22px] xsm:text-left xsm:mb-4">
                  {item.product_display_page_desc}
                </h3>
                <div className="xsm:hidden sm:flex xsm:space-y-2 xsm:items-center  space-x-[1rem] pt-2 mx-[1rem]">
                  <div></div>
                  <button className="font-black xsm:text-[15px] sm:text-[18px] bg-black p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex  items-center hover:bg-[---b4]">
                    Buy Now
                    <FaShoppingBag className="xsm:text-[15px] sm:text-[18px] mx-1" />
                  </button>
                  <button className="font-black xsm:text-[15px] sm:text-[18px] bg-black p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex items-center hover:bg-[---b4]">
                    Add To Cart
                    <FaCartShopping className="xsm:text-[15px] sm:text-[18px] mx-1" />
                  </button>
                </div>
              </div>
              <div className="sm:row-start-1 sm:place-self-center justify-items-end mx-[1rem] xsm:justify-items-center">
                <Image
                  src={item.product_img}
                  alt="best_fashion"
                  width={1200}
                  height={1200}
                  className="xsm:w-[300px] sm:w-[350px]  xsm:mr-[2rem] xsm:pt-4 xsm:rounded-tl-[7rem]
           xsm:rounded-br-[7rem] xsm:place-self-center"
                />
                <div className="sm:hidden flex xsm:space-y-2 xsm:items-center sm:justify-between space-x-[2px] pt-2">
                  <div></div>
                  <button className="font-black xsm:text-[15px] sm:text-[18px] bg-black p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex  items-center hover:bg-[---b4]">
                    Buy Now
                    <FaShoppingBag className="xsm:text-[15px] sm:text-[18px] mx-1" />
                  </button>
                  <button className="font-black xsm:text-[15px] sm:text-[18px] bg-black p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex items-center hover:bg-[---b4]">
                    Add To Cart
                    <FaCartShopping className="xsm:text-[15px] sm:text-[18px] mx-1" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Page3;
