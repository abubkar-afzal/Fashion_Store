import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import { BsCartDashFill } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import { FaSquareMinus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { cleanCart, removeFromCart } from "./redux/action";

const Header = () => {
  const cartData = useSelector((state) => state.reducer);
  console.log(cartData)
  const [cancel, setCancel] = useState(true);
  const [cart, setCart] = useState(false);
  const [cartItem, setCartItem] = useState(false)
  const [update, setUpdate] = useState(false)
  useEffect(() => {
    let result = cartData.filter((element)=>{
      return element._id === cartData._id
    });
    if(result.length){
      setUpdate(true);
    }else{
      setUpdate(false);
    }
}, [cartData])  
  const dispatch = useDispatch();
  const handleRemoveFromCart = (item)=>{
    dispatch(removeFromCart(item._id))
  }
  const handleCleanCart = (item)=>{
    dispatch(cleanCart(cartData))
  }
  useEffect(() => {
    setCartItem(true)
  }, [cartData])
  const showCancel = () => {
    setCancel(!cancel);
  };
  const showCart = () => {
    setCart(!cart)
  }
  return (
    <><Link href={`/components/admin/admin`}><div className="bg-[---c7] w-[30px] h-[30px] absolute z-20 cursor-not-allowed top-[-10px] rounded-[2rem] left-[-20px] "></div>
    </Link><div
      className="xsm:overflow-x-hidden sticky z-10 xsm:mt-3 xsm:flex xsm:text-[18px] sm:text-[20px] xsm:justify-between
         sm:place-items-baseline sm:items-center sm:mt-[2rem] sm:mx-[1rem]"
    >

        {
          //sm
        }
        <Link href={`/`}>
          <div className="ml-3 xsm:text-[24px] sm:text-[26px] cursor-pointer font-bold ">
            FASHION
          </div>
        </Link>
        <div className="xsm:hidden  sm:flex xsm:text-[18px] sm:text-[20px] sm:space-x-4  sm:relative  font-semibold">
          <Link href={`/components/other/men`}>
            <div className="sm:text-[18px] underline-hover">MEN</div>
          </Link>

          <Link href={`/components/other/women`}>
            <div className="sm:text-[18px] underline-hover">WOMEN</div>
          </Link>

          <Link href={`/components/other/kids`}>
            <div className="sm:text-[18px] underline-hover">KIDS</div>
          </Link>

          <Link href={`/components/other/family`}>
            <div className="sm:text-[18px] underline-hover">FAMILY</div>
          </Link>

          <Link href={`/components/other/trends`}>
            <div className="sm:text-[18px] underline-hover">TRENDS</div>
          </Link>
        </div>
        <div className="sm:flex xsm:text-[18px] sm:text-[20px] sm:space-x-3 sm:relative ">
          <div className="xsm:hidden sm:block   mt-1 mr-2  cursor-pointer sm:hover:text-[---c2] ">
            <FaCartShopping onClick={showCart} className="sm:text-[25px]" />
          </div>
          <div className="">
            <Link href={`/components/login`}>
              <button className="xsm:hidden sm:block sm:border-[2px] sm:border-black sm:w-[5rem]  sm:hover:bg-[---c2] hover:border-none hover:text-white h-[2rem] rounded-[10px]">
                LOGIN
              </button>
            </Link>
          </div>
        </div>
        {
          //cart
        }
        <div className={`fixed xsm:w-[80vw] sm:w-[30vw] bg-[---c3]   top-0 min-h-screen ${cart ? "right-0 text-white" : "right-[-30rem] text-black"} duration-[2s]  `}>
          <div>
            <RxCross2 onClick={showCart} className="xsm:text-[30px] mt-[1rem] ml-[1rem] cursor-pointer sm:text-[35px] " />
          </div>
          <div className="xsm:text-[25px] sm:text-[30px] font-black text-center my-[2rem] flex items-center place-content-center outline-dotted">
            Cart <FaCartShopping className="mx-2 " />

          </div>
          <div className="overflow-y-scroll h-[60vh] mb-[2rem]">
          {
            update ? cartData.map((item) => {
              
              return (<div key={item._id} className="flex xsm:text-[18px] sm:text-[20px] space-x-[10px] items-center mb-[2rem] place-content-center bg-[---c2] p-2">
                <div className=" font-semibold w-1/2 text-wrap">{item.product_title}</div>
                <button onClick={()=>handleRemoveFromCart(item)} className="flex xsm:text-[14px] sm:text-[12px]  items-center font-black bg-[---c7] px-[1rem] py-[10px]  rounded-[2rem]">
                  Remove <FaSquareMinus className="mx-2" />
                </button>
              </div>)
            }): <div className="flex xsm:text-[18px] sm:text-[20px] space-x-[10px] items-center mb-[2rem] place-content-center bg-[---c2] p-2">
            <div className=" font-semibold w-1/2 text-wrap"> Please Add Any Item In Cart First ~~!!</div>
          </div>
          }
</div>
          <div className="flex xsm:text-[18px] sm:text-[20px] space-x-[10px] items-center place-content-center">
            <button onClick={handleCleanCart} className="flex xsm:text-[14px] sm:text-[12px]  items-center font-black bg-[---c9] px-[1rem] py-[10px] rounded-[2rem]">
              Clear Cart <BsCartDashFill className="mx-1" />
            </button>
            <button className="flex xsm:text-[14px] sm:text-[12px]  items-center font-black bg-[---c8] px-[1rem] py-[10px]  rounded-[2rem]">
              Check out <BsCartCheckFill className="mx-1" />
            </button>
          </div>
        </div>

        <div className="flex xsm:text-[18px] sm:text-[20px] sm:hidden items-baseline">
          <FaCartShopping onClick={showCart} className=" cursor-pointer xsm:text-[20px] xsm:col-start-5 xsm:ml-[3rem]" />

          <div className="xsm:pl-9 xsm:mr-4 mt-[5px] ">
            <div className="">
              {cancel ? (
                <div onClick={showCancel}>
                  <GiHamburgerMenu className=" xsm:duration-[2s] cursor-pointer xsm:text-[22px]" />
                </div>
              ) : (
                <div onClick={showCancel}>
                  <RxCross1 className="xsm:duration-[2s] xsm:-[-2rem] cursor-pointer xsm:text-[22px]" />
                </div>
              )}
            </div>
            <ul
              className={
                cancel
                  ? "xsm:fixed xsm:duration-[2s] xsm:font-bold  xsm:right-[-10rem] xsm:ml-[-4.5rem] xsm:text-right xsm:bg-[---c2] mt-2 xsm:p-2"
                  : "xsm:right-[0.2rem] xsm:duration-[2s] xsm:font-bold xsm:fixed mt-2 xsm:ml-[-4.5rem] xsm:text-right xsm:bg-[---c2] xsm:p-2"
              }
            >
              <Link href={`/components/other/men`}>
                <li className="xsm:hover:bg-[---c3] xsm:cursor-pointer">MEN</li>
              </Link>
              <Link href={`/components/other/women`}>
                <li className="xsm:hover:bg-[---c3] xsm:cursor-pointer">
                  WOMEN
                </li>
              </Link>
              <Link href={`/components/other/kids`}>
                <li className="xsm:hover:bg-[---c3] xsm:cursor-pointer">
                  KIDS
                </li>
              </Link>
              <Link href={`/components/other/family`}>
                <li className="xsm:hover:bg-[---c3] xsm:cursor-pointer">
                  FAMILY
                </li>
              </Link>
              <Link href={`/components/other/trends`}>
                <li className="xsm:hover:bg-[---c3] xsm:cursor-pointer">
                  TRENDS
                </li>
              </Link>
              <Link href={`/components/login`}>
                <li className="xsm:hover:bg-[---c3] xsm:cursor-pointer">
                  <button className="">LOGIN</button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="xsm:h-[8vh] sm:h-[13vh] w-[100vw] absolute top-0 bg-[---c1] shadow-xl"></div>
    </>
  );
};
export default Header;
