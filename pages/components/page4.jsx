import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cleanCart } from "./redux/action";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

const Page4 = ({ bestSeller,showCart,checkloginornot }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item)=>{
    
    const popSound = new Audio("/pop.mp3");
    popSound.play();
    dispatch(addToCart(item))
  }
  const cartData = useSelector((state) => state.reducer);
  const handleCleanCart = (item)=>{
      dispatch(cleanCart(cartData))
    }
    const [splideKey, setSplideKey] = useState(0);

  useEffect(() => {
    setSplideKey(prev => prev + 1); // force remount to trigger autoScroll
  }, [bestSeller.length]);

  return (
    <>
      <div className={`${bestSeller.length==0 ? "hidden":"block"} overflow-hidden xsm:text-left xsm:bg-[---c4] xsm:p-5 xsm:pt-[2rem] shadow-xl`}>
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
          <div className="space-x-[2rem] hideBar ">
            <div >
            <Splide
                  key={splideKey}

      options={{
        type: 'loop',
        drag: false,
        arrows:false,
        pagination:false,
        gap:'xsm:10rem',
        autoScroll: {
          speed: 1,
          
        },
      }}
      extensions={{ AutoScroll }}
    >
              {bestSeller.map((item) => {
                return (
                  <SplideSlide  key={item._id} className="xsm:mx-[1rem]">
                  <div
                   
                    className="  xsm:border-[2px] xsm:w-[9rem] sm:w-[15rem] xsm:m-2 scroll-item"
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
                    
                    <button className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3  text-white rounded-[2rem] flex  items-center cursor-default">
                            Buy Now
                            <FaShoppingBag className="xsm:text-[10px] sm:text-[12px] mx-1" />
                          </button>
                   
                    <button  className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex items-center cursor-default">
                            Add To Cart
                            <FaCartShopping className="xsm:text-[10px] sm:text-[12px] mx-1" />
                          </button>
                        </div>
                    </div>
                    </>:<>                    
                    <Link href={`${process.env.NEXT_PUBLIC_HOST}/components/other/${item._id}`} >
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
                    
                          <Link href={`${process.env.NEXT_PUBLIC_HOST}/components/buyNow`}><button onClick={() => { handleCleanCart(),handleAddToCart(item),checkloginornot()} } className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3  text-white rounded-[2rem] flex  items-center hover:bg-[---c1]">
                            Buy Now
                            <FaShoppingBag className="xsm:text-[10px] sm:text-[12px] mx-1" />
                          </button></Link>
                   
                    <button onClick={() => { handleAddToCart(item),checkloginornot() }} className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex items-center hover:bg-[---c1]">
                            Add To Cart
                            <FaCartShopping className="xsm:text-[10px] sm:text-[12px] mx-1" />
                          </button>
                        </div>
                      </>
                    }
                  </div></SplideSlide>
                );
              })}
              {bestSeller.length == 0 ? (
                <div className="bg-[---c1] p-4 ">NO Product Add Product</div>
              ) : null}</Splide>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};
export default Page4;
