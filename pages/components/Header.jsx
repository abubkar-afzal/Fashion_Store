import React, { useEffect, useRef, useState } from "react";
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
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";
const Header = ({cart, cancel, showCancel, showCart, authtoken}) => {
  const router = useRouter();
 let currentUrl =router.asPath;
 let men;
 let women;
 let kids;
 let family;
let trends;
 if (currentUrl === "/components/other/men") {
  men = true;
  women = false;
  kids = false;
  family = false;
  trends = false;  
 }else if (currentUrl === "/components/other/women") {
  men = false;
  women = true;
  kids = false;
  family = false;
  trends = false;  
 }else if (currentUrl === "/components/other/kids") {
  men = false;
  women = false;
  kids = true;
  family = false;
  trends = false;  
 }else if (currentUrl === "/components/other/family") {
  men = false;
  women = false;
  kids = false;
  family = true;
  trends = false;  
 }else if (currentUrl === "/components/other/trends") {
  men = false;
  women = false;
  kids = false;
  family = false;
  trends = true;  
 }else{
  men = false;
  women = false;
  kids = false;
  family = false;
  trends = false;  
  
 }
  const cartData = useSelector((state) => state.reducer);
  const previousArrayLengthRef = useRef(cartData.length);
  useEffect(() => {
    if (cartData.length === previousArrayLengthRef.current + 1) {
      showCart()
    } 
    previousArrayLengthRef.current = cartData.length;
  }, [cartData]);
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    if(cartData.length !== 0){
      setUpdate(true);
    }else{
      setUpdate(false);
    }
}, [cartData])  

  useEffect(() => {
    if(!localStorage.getItem("Fashion_Store")){
      defaultCleanCart();
    }
}, [router.query])  
  const dispatch = useDispatch();
  const handleRemoveFromCart = (item)=>{
    
    const popSound = new Audio("/remove.mp3");
    popSound.play();
    dispatch(removeFromCart(item._id))
  }
  const handleCleanCart = (item)=>{
    
    const popSound = new Audio("/remove.mp3");
    popSound.play();
    dispatch(cleanCart(cartData))
  }
  const defaultCleanCart = (item)=>{
    
    
    dispatch(cleanCart(cartData))
  }
 
 
  return (
    <>
    <div className=" duration-[1s]">
    <Link href={`/components/admin/admin`}><div className="bg-[---c7] w-[30px] h-[30px] absolute z-20 cursor-not-allowed top-[-10px] rounded-[2rem] xsm:left-[-20px] sm:left-[-15px] "></div>
    </Link><div
      className="xsm:overflow-x-hidden sticky z-10 xsm:mt-3 xsm:flex xsm:text-[18px] sm:text-[20px] xsm:justify-between sm:pr-[1rem]
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
            <div className={`sm:text-[18px]  ${men ? "underline-with-margin" :"underline-hover"}`}>MEN</div>
          </Link>

          <Link href={`/components/other/women`}>
            <div className={`sm:text-[18px]  ${women ? "underline-with-margin" :"underline-hover"}`}>WOMEN</div>
          </Link>

          <Link href={`/components/other/kids`}>
            <div className={`sm:text-[18px]  ${kids ? "underline-with-margin" :"underline-hover"}`}>KIDS</div>
          </Link>

          <Link href={`/components/other/family`}>
            <div className={`sm:text-[18px]  ${family ? "underline-with-margin" :"underline-hover"}`}>FAMILY</div>
          </Link>

          <Link href={`/components/other/trends`}>
            <div className={`sm:text-[18px]  ${trends ? "underline-with-margin" :"underline-hover"}`}>TRENDS</div>
          </Link>
        </div>
        <div className="sm:flex xsm:text-[18px] sm:text-[20px] sm:space-x-3 sm:relative ">
          <div className="xsm:hidden sm:block   mt-1 mr-2  cursor-pointer sm:hover:text-[---c2] ">
            <FaCartShopping onClick={showCart} className="sm:text-[25px]" />
          </div>
          <div className="">
            {
              authtoken ? <Link href={`/components/account`}>
              <button className="xsm:hidden sm:block sm:border-[2px] sm:border-black sm:w-[7rem]  sm:hover:bg-[---c2] hover:border-none hover:text-white h-[2rem] rounded-[10px]">
                ACCOUNT
              </button>
            </Link>:<Link href={`/components/login`}>
              <button className="xsm:hidden sm:block sm:border-[2px] sm:border-black sm:w-[5rem]  sm:hover:bg-[---c2] hover:border-none hover:text-white h-[2rem] rounded-[10px]">
                LOGIN
              </button>
            </Link>
            }
          </div>
        </div>
        {
          //cart
        }
        <div className={`fixed xsm:w-[80vw] sm:w-[30vw] bg-[---c3]   top-0 min-h-screen 
          ${cart ? "right-0 text-white" : "right-[-30rem] text-black"} duration-[2s]  `}>
          <div>
            <RxCross2 onClick={showCart} className="xsm:text-[30px] mt-[1rem] ml-[1rem] cursor-pointer sm:text-[35px] " />
          </div>
          <div className="xsm:text-[25px] sm:text-[30px] font-black text-center my-[2rem] flex items-center place-content-center outline-dotted">
            Cart <FaCartShopping className="mx-2 " />

          </div>
          <div className="overflow-y-scroll h-[60vh] mb-[2rem] hideBar">
          {
            update  ? (cartData && cartData.map((item) => {
              
              return (<Fade duration={2000}><div key={item._id} className="flex xsm:text-[18px] sm:text-[20px] space-x-[10px] items-center mb-[2rem] place-content-center bg-[---c2] p-2">
                 <Link href={`/components/other/${item._id}`}><div className=" font-semibold">{item.product_title}</div></Link>
                <button onClick={()=>handleRemoveFromCart(item)} className="flex xsm:text-[14px] sm:text-[12px]  items-center font-black bg-[---c7] px-[1rem] py-[10px]  rounded-[2rem]">
                  Remove <FaSquareMinus className="mx-2" />
                </button>
              </div></Fade>)
            })):<Fade duration={2000}> <div className="flex xsm:text-[18px] sm:text-[20px] space-x-[10px] items-center mb-[2rem] place-content-center bg-[---c2] p-2 mt-[20vh]">
            <div className=" font-semibold w-1/2 text-wrap"> Please Add Any Item In Cart First ~~!!</div>
          </div></Fade>
          }
</div>
          <div className="flex xsm:text-[18px] sm:text-[20px] space-x-[10px] items-center place-content-center">
            <button onClick={handleCleanCart} className="flex xsm:text-[14px] sm:text-[12px]  items-center font-black bg-[---c9] px-[1rem] py-[10px] rounded-[2rem]">
              Clear Cart <BsCartDashFill className="mx-1" />
            </button>
            <Link href={`/components/checkout`}>
            <button className="flex xsm:text-[14px] sm:text-[12px]  items-center font-black bg-[---c8] px-[1rem] py-[10px]  rounded-[2rem]">
              Check out <BsCartCheckFill className="mx-1" />
            </button></Link>
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
                  ? "xsm:fixed xsm:duration-[2s] xsm:font-bold  xsm:right-[-10rem] xsm:ml-[-4.5rem] xsm:text-right xsm:bg-[---c2] mt-2  xsm:py-[1.5rem] xsm:text-[18px]"
                  : "xsm:right-[0.2rem] xsm:duration-[2s] xsm:font-bold xsm:fixed mt-2 xsm:ml-[-4.5rem] xsm:text-right xsm:bg-[---c2] xsm:py-[1.5rem] xsm:text-[18px]"
              }
            >
              <Link href={`/components/other/men`}>
                <li className="xsm:hover:bg-[---c3] xsm:cursor-pointer xsm:px-[1.5rem]">MEN</li>
              </Link>
              <Link href={`/components/other/women`}>
                <li className="xsm:hover:bg-[---c3] xsm:cursor-pointer xsm:px-[1.5rem]">
                  WOMEN
                </li>
              </Link>
              <Link href={`/components/other/kids`}>
                <li className="xsm:hover:bg-[---c3] xsm:cursor-pointer xsm:px-[1.5rem]">
                  KIDS
                </li>
              </Link>
              <Link href={`/components/other/family`}>
                <li className="xsm:hover:bg-[---c3] xsm:cursor-pointer xsm:px-[1.5rem]">
                  FAMILY
                </li>
              </Link>
              <Link href={`/components/other/trends`}>
                <li className="xsm:hover:bg-[---c3] xsm:cursor-pointer xsm:px-[1.5rem]">
                  TRENDS
                </li>
              </Link>
              {
                authtoken ? <Link href={`/components/account`}>
                <li className="xsm:hover:bg-[---c3] xsm:cursor-pointer xsm:px-[1.5rem]">
                  <button className="">ACCOUNT</button>
                </li>
              </Link>:<Link href={`/components/login`}>
                <li className="xsm:hover:bg-[---c3] xsm:cursor-pointer xsm:px-[1.5rem]">
                  <button className="">LOGIN</button>
                </li>
              </Link>
              }
            </ul>
          </div>
        </div>
      </div>
      <div className=" w-[100vw]  top-0 bg-[---c1] shadow-xl"></div>
      </div></>
  );
};
export default Header;
