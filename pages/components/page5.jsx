import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";

import { GiClothes } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/action";

const Page5 = ({ men, women, kids, family,showCart }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item)=>{
    dispatch(addToCart(item))
  }
  const [displayMen, setDisplayMen] = useState(true);
  const [displayWomen, setDisplayWomen] = useState(false);
  const [displayKids, setDisplayKids] = useState(false);
  const [displayFamily, setDisplayFamily] = useState(false);
  const dmen = () => {
    setDisplayMen(true);
    setDisplayWomen(false);
    setDisplayFamily(false);
    setDisplayKids(false);
  };
  const dwomen = () => {
    setDisplayMen(false);
    setDisplayWomen(true);
    setDisplayFamily(false);
    setDisplayKids(false);
  };
  const dkids = () => {
    setDisplayMen(false);
    setDisplayWomen(false);
    setDisplayFamily(false);
    setDisplayKids(true);
  };
  const dfamily = () => {
    setDisplayMen(false);
    setDisplayWomen(false);
    setDisplayFamily(true);
    setDisplayKids(false);
  };
  return (
    <>
      <div className=" overflow-hidden xsm:text-center xsm:bg-white mx-[1rem] my-[2rem] ">
        <h1 className="xsm:text-[2rem] xsm:font-bold sm:text-[3rem] ">
          Our Product
        </h1>
        <div className="xsm:flex xsm:font-bold xsm:my-4 justify-between shadow-lg pb-[1rem] sm:text-[1.5rem] px-[2rem]">
          <p
            className={`cursor-pointer  ${displayMen ? "underline-with-margin  " : "underline-hover"
              }`}
            onClick={dmen}
          >
            Men
          </p>
          <p
            className={`cursor-pointer  ${displayWomen ? "underline-with-margin" : "underline-hover"
              }`}
            onClick={dwomen}
          >
            Women
          </p>
          <p
            className={`cursor-pointer  ${displayKids ? "underline-with-margin" : "underline-hover"
              }`}
            onClick={dkids}
          >
            Kids
          </p>
          <p
            className={`cursor-pointer  ${displayFamily ? "underline-with-margin" : "underline-hover"
              }`}
            onClick={dfamily}
          >
            Family
          </p>
        </div>
        <div className="xsm:grid xsm:grid-cols-2  xsm:overflow-scroll xsm:h-[800px] sm:grid sm:grid-cols-auto sm:overflow-scroll  gap-[1rem] hideBar sm:h-[25rem] justify-items-center ">
          {displayMen
            ? (men.length !== 0 ? <> {men.map((item) => {
              return (
                <div
                  key={item._id}
                  className=" xsm:hover:cursor-pointer xsm:border-[2px] xsm:w-[9rem] sm:w-[15rem] xsm:m-2 scroll-item"
                >
                 
                 <Link href={`/components/other/${item._id}`}><Image
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
                      </p>
                      </div>
                  </Link>
                  <div className="flex xsm:flex-col xsm:space-y-2 xsm:items-center bg-white pb-2 sm:justify-between space-x-[1rem] pt-2">
                        <div></div>
                       <button className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex  items-center hover:bg-[---c1]">
                          Buy Now
                          <FaShoppingBag className="xsm:text-[10px] sm:text-[12px] mx-1" />
                        </button>
                  <button onClick={() => { handleAddToCart(item) }} className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex items-center hover:bg-[---c1]">
                          Add To Cart
                          <FaCartShopping className="xsm:text-[10px] sm:text-[12px] mx-1" />
                        </button>
                    </div>
                </div>
              );
            })} <Link href={`/components/other/men`} className="col-start-1 col-end-3 "><button className={` col-start-1 col-end-3 font-black xsm:text-[18px] h-[3rem] w-auto sm:text-[22px] bg-[---c4]  sm:px-4 xsm:px-3 text-white rounded-[2rem] flex items-center hover:bg-[---b4]`}>See More <GiClothes className="xsm:text-[18px] sm:text-[22px] mx-1" /></button></Link> </> : (

              <div className="bg-[---c1] p-4 col-start-1 col-end-3 h-[10vh] mt-[20vh] ">NO Product Add Product</div>

            ))
            : displayWomen
              ? (women.length !== 0 ? <>{women.map((item) => {
                return (
                  <div
                    key={item._id}
                    className=" xsm:hover:cursor-pointer xsm:border-[2px] xsm:w-[9rem] sm:w-[15rem] xsm:m-2 scroll-item"
                  >
                    <Link href={`/components/other/${item._id}`}>
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
                        </p>
                        </div>
                        </Link>
                    <div className="flex xsm:flex-col xsm:space-y-2 xsm:items-center sm:justify-between bg-white pb-2  space-x-[1rem] pt-2">
                          <div></div>
                    <button className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex  items-center hover:bg-[---c1]">
                            Buy Now
                            <FaShoppingBag className="xsm:text-[10px] sm:text-[12px] mx-1" />
                          </button>
                    <button onClick={() => { handleAddToCart(item) }} className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex items-center hover:bg-[---c1]">
                            Add To Cart
                            <FaCartShopping className="xsm:text-[10px] sm:text-[12px] mx-1" />
                          </button>
                        </div>
                  </div>
                );
              })} <Link href={`/components/other/women`} className="col-start-1 col-end-3 "><button className={` col-start-1 col-end-3 font-black xsm:text-[18px] h-[3rem] w-auto sm:text-[22px] bg-[---c4]  sm:px-4 xsm:px-3 text-white rounded-[2rem] flex items-center hover:bg-[---b4]`}>See More <GiClothes className="xsm:text-[18px] sm:text-[22px] mx-1" /></button> </Link> </> :
              (
                  <div className="bg-[---c1] p-4 col-start-1 col-end-3 h-[10vh] mt-[20vh] ">NO Product Add Product</div>
                )
              )
              : displayKids
                ? (kids.length !== 0 ? <> {kids.map((item) => {
                  return (
                    <> <div
                      key={item._id}
                      className=" xsm:hover:cursor-pointer xsm:border-[2px] xsm:w-[9rem] sm:w-[15rem] xsm:m-2 scroll-item"
                    >
                      <Link href={`/components/other/${item._id}`}>
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
                          </p>
                          </div>
                          </Link>
                      <div className="flex xsm:flex-col xsm:space-y-2 xsm:items-center bg-white pb-2 sm:justify-between space-x-[1rem] pt-2">
                            <div></div>
                      <button className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex  items-center hover:bg-[---c1]">
                              Buy Now
                              <FaShoppingBag className="xsm:text-[10px] sm:text-[12px] mx-1" />
                            </button>
                      <button onClick={() => { handleAddToCart(item) }} className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex items-center hover:bg-[---c1]">
                              Add To Cart
                              <FaCartShopping className="xsm:text-[10px] sm:text-[12px] mx-1" />
                            </button>
                          </div>

                    </div>
                    </>
                  );
                })}  <Link href={`/components/other/kids`} className="col-start-1 col-end-3 "><button className={` font-black xsm:text-[18px] h-[3rem] w-auto sm:text-[22px] bg-[---c4]  sm:px-4 xsm:px-3 text-white rounded-[2rem] flex items-center hover:bg-[---b4]`}>See More <GiClothes className="xsm:text-[18px] sm:text-[22px] mx-1" /></button></Link></> :
                  (
                    <div className="bg-[---c1] p-4 col-start-1 col-end-3 h-[10vh] mt-[20vh] ">NO Product Add Product</div>

                  ))
                : displayFamily
                  ? (family.length !== 0 ? <>{family.map((item) => {
                    return (
                      <div
                        key={item._id}
                        className=" xsm:hover:cursor-pointer xsm:border-[2px] xsm:w-[9rem] sm:w-[15rem] xsm:m-2 scroll-item"
                      >
                        <Link href={`/components/other/${item._id}`}>
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
                            </p>
                            </div>
                            </Link>
                        <div className="flex xsm:flex-col xsm:space-y-2 xsm:items-center bg-white pb-2 sm:justify-between space-x-[1rem] pt-2">
                              <div></div>
                        <button className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex  items-center hover:bg-[---c1]">
                                Buy Now
                                <FaShoppingBag className="xsm:text-[10px] sm:text-[12px] mx-1" />
                              </button>
                        <button onClick={() => { handleAddToCart(item)}} className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex items-center hover:bg-[---c1]">
                                Add To Cart
                                <FaCartShopping className="xsm:text-[10px] sm:text-[12px] mx-1" />
                              </button>
                            </div>
                        <Link><button  href={`/components/other/men`}className={` col-start-1 col-end-3 font-black xsm:text-[18px] h-[3rem] w-auto sm:text-[22px] bg-[---c2]  sm:px-4 xsm:px-3 text-white rounded-[2rem] flex items-center hover:bg-[---c1]`}>See More <GiClothes className="xsm:text-[18px] sm:text-[22px] mx-1" /></button></Link>
                      </div>
                    );
                  })} <Link href={`/components/other/family`} className="col-start-1 col-end-3 "><button className={` col-start-1 col-end-3 font-black xsm:text-[18px] h-[3rem] w-auto sm:text-[22px] bg-[---c4]  sm:px-4 xsm:px-3 text-white rounded-[2rem] flex items-center hover:bg-[---b4]`}>See More <GiClothes className="xsm:text-[18px] sm:text-[22px] mx-1" /></button></Link></> :
                    (
                      <div className="bg-[---c1] p-4 col-start-1 col-end-3 h-[10vh] mt-[20vh] ">NO Product Add Product</div>
                    )
                  )
                  : null}

        </div>
      </div>
    </>
  );
};

export default Page5;
