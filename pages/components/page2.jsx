import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cleanCart } from "./redux/action";

const Page2 = ({ allNewCollection,showCart,checkloginornot }) => {
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
  return (
    <>
      <div className={`${allNewCollection.length ==0 ? "hidden": "block"}  overflow-y-hidden m-4 text-center justify-items-center hideBar`}>
        <div className="text-white w-full text-[3rem] font-bold text-center m-2 bg-[---c4]" >
          New Collection
        </div>
        <div className="h-[70vh] overflow-x-scroll hideBar">
          <div className=" m-0 sm:flex  sm:flex-wrap space-y-[3rem] sm:space-x-[3rem] sm:place-content-center justify-between mx-auto w-auto ">
            <div></div>
            {allNewCollection.map((item) => {
              return (
                <div
                  key={item._id}
                  className=" xsm:hover:cursor-pointer xsm:border-[2px] xsm:w-[9rem] sm:w-[15rem] xsm:m-2 bg-white hideBar"
                >
                  {
                    item.product_quantity == 0 ?  <> 
                    <div className="relative">
                      <div className="font-black xsm:text-[14px] sm:text-[16px] bg-[---c1] absolute w-full  sm:top-52 xsm:top-40">Out Of Stock !! </div>
                    </div>
                    <div className="opacity-20 cursor-default">
                    
                   <div className="m-4">
                     <div className="font-black xsm:text-[14px] sm:text-[16px]">
                       {item.product_display_page_title}
                     </div>
                     <div className="font-semibold xsm:text-[11px] sm:text-[13px]">
                       {item.product_display_page_desc}
                     </div>
                   </div>
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
           
                 <div className="flex xsm:flex-col xsm:space-y-2 xsm:items-center sm:justify-between bg-white pb-2 space-x-[1rem] pt-2">
                       <div></div>
                       <button  className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex  items-center cursor-default">
                         Buy Now
                         <FaShoppingBag className="xsm:text-[10px] sm:text-[12px] mx-1" />
                       </button>
                       <button  className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex items-center cursor-default">
                         Add To Cart
                         <FaCartShopping className="xsm:text-[10px] sm:text-[12px] mx-1" />
                       </button>
                     </div></div>
                     </>:
                     <> 
                     <Link href={`/components/other/${item._id}`}>
                    <div className="m-4">
                      <div className="font-black xsm:text-[14px] sm:text-[16px]">
                        {item.product_display_page_title}
                      </div>
                      <div className="font-semibold xsm:text-[11px] sm:text-[13px]">
                        {item.product_display_page_desc}
                      </div>
                    </div>
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
                  <div className="flex xsm:flex-col xsm:space-y-2 xsm:items-center sm:justify-between bg-white pb-2 space-x-[1rem] pt-2">
                        <div></div>
                        <Link href={`/components/buyNow`}><button onClick={() => { handleCleanCart(),handleAddToCart(item),checkloginornot()} } className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex  items-center hover:bg-[---c1]">
                          Buy Now
                          <FaShoppingBag className="xsm:text-[10px] sm:text-[12px] mx-1" />
                        </button></Link>
                        <button onClick={() => { handleAddToCart(item), checkloginornot()} } className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex items-center hover:bg-[---c1]">
                          Add To Cart
                          <FaCartShopping className="xsm:text-[10px] sm:text-[12px] mx-1" />
                        </button>
                      </div>
                      </>
                  }
                    </div>
                 
              );
            })}
            {allNewCollection.length == 0 ? (
              <div className="bg-[---c1] p-4 ">NO Product Add Product</div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
