import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cleanCart } from "./redux/action";
const Page4 = ({ bestSeller,showCart }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item)=>{
    dispatch(addToCart(item))
  }
  const cartData = useSelector((state) => state.reducer);
  const handleCleanCart = (item)=>{
      dispatch(cleanCart(cartData))
    }
  return (
    <>
      <div className="overflow-hidden xsm:text-left xsm:bg-[---c4] xsm:p-5 xsm:pt-[2rem] ">
        <div className="sm:grid sm:grid-cols-2 ">
          <div className=" sm:bg-[---c4] content-center">
            <h1 className="xsm:text-[3rem] sm:text-[4rem] xsm:text-white xsm:pb-4">
              Best Seller Product
            </h1>
            <p className="xsm:text-1rem] xsm:text-white xsm:p-2">
              These are our best products those we have sell. The market is not
              aware from these products those we have. You can also got best and
              new product as you need. We deal with all kinds of products as any
              one need in any season.
            </p>
          </div>
          <div className="scroll-container hideBar">
            <div className="xsm:hover:cursor-pointer xsm:duration-[4s] xsm:flex xsm:space-x-8 xsm:relative xsm:w-[1280px]  xsm:mt-8  sm:mt-0 overflow-x-scroll scroll-content hideBar">
              {bestSeller.map((item) => {
                return (
                  <div
                    key={item._id}
                    className=" xsm:hover:cursor-pointer xsm:border-[2px] xsm:w-[9rem] sm:w-[15rem] xsm:m-2 scroll-item"
                  >
                    {
                    item.product_quantity == 0 ?  <> 
                    <div className="relative">
                      <div className="font-black xsm:text-[14px] sm:text-[16px] bg-[---c1] absolute w-full  sm:top-52 xsm:top-40 text-center">Out Of Stock !! </div>
                    </div>
                    <div className="opacity-20 cursor-default">
                   
                      <Image
                        src={item.product_img}
                        width={1200}
                        height={1200}
                        alt="product"
                        className="xsm:w-[9rem] xsm:h-[9rem] sm:w-[15rem] sm:h-[15rem]"
                      />
                      <div className="xsm:text-[10px] xsm:bg-white xsm:text-center xsm:items-center xsm:space-y-2 p-2 justify-items-center">
                        <div className="flex xsm:text-[11px] sm:text-[13px]">
                          {item.product_rating == 5 ? (
                            <>
                              <IoIosStar />
                              <IoIosStar />
                              <IoIosStar />
                              <IoIosStar />
                              <IoIosStar />
                            </>
                          ) : item.product_rating == 4 ? (
                            <>
                              <IoIosStar />
                              <IoIosStar />
                              <IoIosStar />
                              <IoIosStar />
                            </>
                          ) : item.product_rating == 3 ? (
                            <>
                              <IoIosStar />
                              <IoIosStar />
                              <IoIosStar />
                             
                            </>
                          ) : item.product_rating == 2 ? (
                            <>
                              <IoIosStar />
                              <IoIosStar />
                             
                            </>
                          ) : item.product_rating == 1 ? (
                            <>
                              <IoIosStar />
                            
                            </>
                          ) : null}
                        </div>
                        <p className="xsm:text-[14px] sm:text-[16px]">
                          {item.product_title}
                        </p>
                        <p className="xsm:text-[11px] sm:text-[13px]">
                          price: {item.product_price}$
                          </p></div>
                   
                        <div className="flex xsm:flex-col xsm:space-y-2 xsm:items-center sm:justify-between space-x-[1rem] pt-2 bg-white pb-2">
                          <div></div>
                    
                    <button className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3  text-white rounded-[2rem] flex  items-center ">
                            Buy Now
                            <FaShoppingBag className="xsm:text-[10px] sm:text-[12px] mx-1" />
                          </button>
                   
                    <button  className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex items-center ">
                            Add To Cart
                            <FaCartShopping className="xsm:text-[10px] sm:text-[12px] mx-1" />
                          </button>
                        </div>
                    </div>
                    </>:<>                    
                    <Link href={`/components/other/${item._id}`} >
                      <Image
                        src={item.product_img}
                        width={1200}
                        height={1200}
                        alt="product"
                        className="xsm:w-[9rem] xsm:h-[9rem] sm:w-[15rem] sm:h-[15rem]"
                      />
                      <div className="xsm:text-[10px] xsm:bg-white xsm:text-center xsm:items-center xsm:space-y-2 p-2 justify-items-center">
                        <div className="flex xsm:text-[11px] sm:text-[13px]">
                          {item.product_rating == 5 ? (
                            <>
                              <IoIosStar />
                              <IoIosStar />
                              <IoIosStar />
                              <IoIosStar />
                              <IoIosStar />
                            </>
                          ) : item.product_rating == 4 ? (
                            <>
                              <IoIosStar />
                              <IoIosStar />
                              <IoIosStar />
                              <IoIosStar />
                            </>
                          ) : item.product_rating == 3 ? (
                            <>
                              <IoIosStar />
                              <IoIosStar />
                              <IoIosStar />
                             
                            </>
                          ) : item.product_rating == 2 ? (
                            <>
                              <IoIosStar />
                              <IoIosStar />
                             
                            </>
                          ) : item.product_rating == 1 ? (
                            <>
                              <IoIosStar />
                            
                            </>
                          ) : null}
                        </div>
                        <p className="xsm:text-[14px] sm:text-[16px]">
                          {item.product_title}
                        </p>
                        <p className="xsm:text-[11px] sm:text-[13px]">
                          price: {item.product_price}$
                          </p></div>
                   </Link>
                        <div className="flex xsm:flex-col xsm:space-y-2 xsm:items-center sm:justify-between space-x-[1rem] pt-2 bg-white pb-2">
                          <div></div>
                    
                          <Link href={`/components/buyNow`}><button onClick={() => { handleCleanCart(),handleAddToCart(item)} } className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3  text-white rounded-[2rem] flex  items-center hover:bg-[---c1]">
                            Buy Now
                            <FaShoppingBag className="xsm:text-[10px] sm:text-[12px] mx-1" />
                          </button></Link>
                   
                    <button onClick={() => { handleAddToCart(item) }} className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex items-center hover:bg-[---c1]">
                            Add To Cart
                            <FaCartShopping className="xsm:text-[10px] sm:text-[12px] mx-1" />
                          </button>
                        </div>
                      </>
                    }
                  </div>
                );
              })}
              {bestSeller.length == 0 ? (
                <div className="bg-[---c1] p-4 ">NO Product Add Product</div>
              ) : null}
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};
export default Page4;
