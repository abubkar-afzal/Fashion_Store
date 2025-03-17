import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { cleanCart, removeFromCart, updateCartQuantity } from "./redux/action";
import { BsCartCheckFill, BsCartDashFill } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import Popup from "reactjs-popup";
var jwt = require("jsonwebtoken")

const buyNow = () => {
  const cartData = useSelector((state) => state.reducer);
  const previousArrayLengthRef = useRef(cartData.length);
  let router = useRouter();
  const [items, setItems] = useState(cartData);
  const [update, setUpdate] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [total, setTotal] = useState(0)
  const dispatch = useDispatch();

  useEffect(() => {
    setItems(cartData);
  }, [cartData]);
  useEffect(() => {
      const fetchuser = async () => {
        const scrollOptions = {
          left: 0,
          top: 0,
          behavior: 'smooth'
      }
      window.scrollTo(scrollOptions);
        let d = await fetch(`/api/getAccount`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: localStorage.getItem("Fashion_Store") }),
        });
        let res = await d.json();
        if(res.success == true){
  
          setEmail(res.login.user_email);
          setName(res.login.user_name);
          setPhone(res.login.user_phone);
          setPostCode(res.login.user_post_code);
          setAddress(res.login.user_address);
        
        }else{
          console.log("error came")
        }
      };
      if (localStorage.getItem("Fashion_Store")) {
        fetchuser();
      } else {
        router.push("/");
      }
      SubTotalFunction()
    }, [router.query]);
  useEffect(() => {
    if (cartData.length === previousArrayLengthRef.current + 1) {

      showCart();
    }
    previousArrayLengthRef.current = cartData.length;
  }, [cartData]);

  useEffect(() => {
    if (cartData.length !== 0) {
      setUpdate(true);
    } else {
      setUpdate(false);
    }
    SubTotalFunction()
  }, [cartData]);

  const SubTotalFunction = ()=>{
    let total = 0;
    cartData.map((item) => {
      total += item.product_price * item.product_quantity;
    });
    setTotal(total)
  }

  const handleIncreaseQuantity = (item) => {
    const updatedItems = items.map((i) =>
      i._id === item._id ? { ...i, product_quantity: i.product_quantity + 1 } : i
    );
    setItems(updatedItems);
    dispatch(updateCartQuantity(item._id, item.product_quantity + 1));
  };

  const handleDecreaseQuantity = (item) => {
    const updatedItems = items.map((i) =>
      i._id === item._id && i.product_quantity > 1 ? { ...i, product_quantity: i.product_quantity - 1 } : i
    );
    setItems(updatedItems);
    dispatch(updateCartQuantity(item._id, item.product_quantity - 1));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item._id));
  };

  const handleCleanCart = () => {
    dispatch(cleanCart(cartData));
  };
  const buyNowFun = async () => {

    if (cartData.length > 0) {
      let placedOrder = cartData;
      let removerequest = await fetch(`/api/reduceQuantity`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(placedOrder),
      });
      let res = await removerequest.json();
      if (res) {
        if (res.token) {
          localStorage.setItem("Fashion_Store_Orders", res.token);
          placedordeindatabase()
          handleCleanCart()
          router.push(`/components/orders`)
          
        } else {
          openModal("The Quantity Of Your Items Are Not Avaliable In Our Stock ~~!!");
        }
      }

    }else{
      openModal("Please Add Some Items In Cart First")
    }
  }
const placedordeindatabase = async () => {
  let buy = cartData.map((item) => ({
        
    order_id: item._id,
    order_title: item.product_title,
    order_img: item.product_img,
    order_desc: item.product_desc,
    order_category: item.product_category,
    order_price: item.product_price,
    order_color: item.product_color,
    order_size: item.product_size,
    order_quantity: item.product_quantity,
    order_trend: item.product_trend,
    order_rating: item.product_rating,
    order_display_page_place: item.product_display_page_place,
    order_display_page_title: item.product_display_page_place_title,
    order_display_page_desc: item.product_display_page_desc,
  }))
    let placedOrder = {
      orders: {items:buy,},
      user_name: name,
      user_email: email,
      user_phone: phone,
      user_address: address,
      user_post_code: postCode,
    };
    console.log(placedOrder)
    let addData = await fetch(`/api/addOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(placedOrder),
    });
    let res = await addData.json();
    if (res) {
      if (res.orderAdded) {
        openModal("Order Placed Successfully");
      } else {
        openModal("Order Not Placed Successfully something went wrong");
      }
    }
  };
   const [open, setOpen] = useState(false);
    const [message, setmessage] = useState("");
    const openModal = (msg) =>{ setOpen(true)
      setmessage(msg);
    };
    const closeModal = () => setOpen(false);
  return (
    <Fade duration={2000}>

      <div className="xsm:mt-[5rem] mb-[2rem]">
         <div className={``}> <Popup open={open} closeOnDocumentClick onClose={closeModal} contentStyle={{ background: 'rgba(255, 255, 255, 0)', border: 'none', width:500,  }}  >
                  <div className="items-center text-center rounded-[2rem] bg-[---c1] xsm:mx-[2rem] sm:mx-[1px] ">
                    <h2 className=" text-black font-black p-4 rounded-[2rem] sm:text-[20px] xsm:text-[16px] m-4 ">{message}</h2>
                    <button onClick={closeModal} className="bg-[---c7] text-white font-black p-4 rounded-[2rem] sm:text-[20px] xsm:text-[14px] m-4">Close Modal</button>
                  </div>
                </Popup></div>  
        <>
        <div className="justify-items-center text-center">
          <h1 className="xsm:text-[20px] sm:text-[24px] font-black">!!~~Buy Now~~!!</h1>

          <div>
            <div className="xsm:text-[14px] sm:text-[18px] font-semibold mt-[2rem]" >Please Check Your Details Of Order Placed !!</div>
            <div className="grid  sm:grid-cols-2 mx-[2rem] xsm:my-[1rem] sm:my-[2rem] sm:w-[75vw]  gap-x-[1rem] gap-y-[1rem] ">
              
              <div className="flex items-center sm:row-start-1 sm:col-start-1 sm:row-end-1 sm:col-end-1 xsm:row-start-1 xsm:col-start-1 xsm:row-end-1 xsm:col-end-1">
                  <p className="font-semibold xsm:text-[16px] sm:text-[20px]">
                    Name:
                  </p>
                  <input
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                    value={name}
                    type="text"
                    className="w-full h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="flex items-center sm:row-start-1 sm:col-start-2 sm:row-end-1 sm:col-end-2 xsm:row-start-2 xsm:col-start-1 xsm:row-end-2 xsm:col-end-1">
                  <p className="font-semibold xsm:text-[16px] sm:text-[20px]">
                    Email:
                  </p>
                  <input
                  disabled={true}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    value={email}
                    type="email"
                    className="w-full h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2 disabled:opacity-50"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="flex items-center sm:row-start-2 sm:col-start-1 sm:row-end-2 sm:col-end-1 xsm:row-start-3 xsm:col-start-1 xsm:row-end-3 xsm:col-end-1">
                  <p className="font-semibold xsm:text-[16px] sm:text-[20px]">
                    Phone:
                  </p>
                  <input
                    onChange={(e) => {
                      setPhone(e.target.value)
                    }}
                    value={phone}
                    type="phone"
                    className="w-full h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                    placeholder="Enter Your Phone"
                  />
                </div>
                <div className="flex items-center sm:row-start-3 sm:col-start-1 sm:row-end-3 sm:col-end-3 xsm:row-start-4 xsm:col-start-1 xsm:row-end-4 xsm:col-end-1">
                  <p className="font-semibold xsm:text-[16px] sm:text-[20px]">
                    Address:
                  </p>
                  <input
                    onChange={(e) => {
                      setAddress(e.target.value)
                    }}
                    value={address}
                    type="text"
                    className="w-full  h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                    placeholder="Enter Your Address"
                  />
                </div><div className="flex items-center sm:row-start-2 sm:col-start-2 sm:row-end-2 sm:col-end-2 xsm:row-start-5 xsm:col-start-1 xsm:row-end-5 xsm:col-end-1">
                  <p className="font-semibold xsm:text-[16px] sm:text-[20px]">
                    PostCode:
                  </p>
                  <input
                    onChange={(e) => {
                      setPostCode(e.target.value)
                    }}
                    value={postCode}
                    type="email"
                    className="w-full   h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                    placeholder="Enter Your Post Code"
                  />
                </div>
                </div>
          </div>

          <p className="xsm:text-[14px] sm:text-[18px] font-semibold">Please Check That What You Need To Buy. Beacause Buy Now Is Not A Cup Of Tea !!</p>
        </div>
        <div className="xsm:mt-[1rem] sm:mt-[2rem] ml-[1rem]">
          <div className="flex justify-center xsm:ml-[1rem] sm:ml-[4rem]">
            <div className="xsm:w-[90%] sm:w-[80%]">
              <div className="flex justify-between">
                <div className="xsm:w-[30%] sm:w-[30%]">
                  <p className="xsm:text-[14px] sm:text-[18px] font-black">Product</p>
                </div>
                <div className="xsm:w-[30%] sm:w-[30%]">
                  <p className="xsm:text-[14px] sm:text-[18px] font-black">Price</p>
                </div>
                <div className="xsm:w-[30%] sm:w-[30%]">
                  <div className="xsm:text-[14px] sm:text-[18px] font-black">Quantity <div className="xsm:text-[10px] sm:text-[14px] font-thin text-[---c9] ">(There Default Came <br /> Total Avaliable Qunatity)</div></div>
                </div>
                
              </div>

              {update ? (
                cartData.map((item) => (
                  <Fade duration={2000} key={item._id}>
                    {
                      item.product_quantity == 0 ? dispatch(removeFromCart(item._id)) :
                        <div className="flex justify-between xsm:mt-[1rem] sm:mt-[2rem] ">
                          <Link href={`/components/other/${item._id}`} className="xsm:w-[30%] sm:w-[30%]"><div >
                            <p className="xsm:text-[14px] sm:text-[18px] font-semibold">{item.product_title}</p>
                          </div></Link>
                          <Link href={`/components/other/${item._id}`} className="xsm:w-[30%] sm:w-[30%]"><div >
                            <p className="xsm:text-[14px] sm:text-[18px] font-semibold">${item.product_price} </p>
                          </div></Link>


                          <div className="xsm:w-[30%] sm:w-[30%] flex items-center">
                            <CiCirclePlus
                              className="mr-4 xsm:text-[24px] sm:text-[28px] cursor-pointer"
                              onClick={() => handleIncreaseQuantity(item)}
                            />
                            {item.product_quantity}
                            <CiCircleMinus
                              className="ml-4 xsm:text-[24px] sm:text-[28px] cursor-pointer"
                              onClick={() => handleDecreaseQuantity(item)}
                            />
                          </div>
                          
                        </div>
                        }
                  </Fade>
                ))
              ) : (
                <Fade duration={2000}>
                  <div className="flex xsm:text-[18px] sm:text-[20px] space-x-[10px] items-center mb-[2rem] place-content-center p-2 mt-[20vh] ">
                    <div className="font-semibold w-1/2 text-wrap"> Please Add Any Item In Cart First ~~!!</div>
                  </div>
                </Fade>
              )}
            </div>
          </div>
          <div className="justify-items-start mt-[1rem] ml-[15vw]"><div className="font-black xsm:text-[20px] sm:text-[24px] ">SubTotal: ${total} </div></div>
          <div className="justify-items-center mt-[2rem] text-white ml-[-2rem]">
            <div className="flex space-x-[2rem]">
              
                <button onClick={()=>{buyNowFun()}} className="flex xsm:text-[10px] sm:text-[14px]  items-center font-black bg-[---c8] px-[1rem] py-[10px]  rounded-[2rem]">
                  Check out <BsCartCheckFill className="mx-1" />
                </button> <button onClick={handleCleanCart} className="flex xsm:text-[10px] sm:text-[14px]  items-center font-black bg-[---c9] px-[1rem] py-[10px] rounded-[2rem]">
                Clear Cart <BsCartDashFill className="mx-1" />
              </button></div>
          </div>
          </div></>
      </div>
    </Fade>
  );
};

export default buyNow;
