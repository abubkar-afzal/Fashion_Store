import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { cleanCart, removeFromCart, updateCartQuantity } from "./redux/action";
import { BsCartCheckFill, BsCartDashFill } from "react-icons/bs";
import Link from "next/link";

// Actions (you need to define these in your Redux actions)

const Checkout = () => {
  const cartData = useSelector((state) => state.reducer);
  const previousArrayLengthRef = useRef(cartData.length);

  const [items, setItems] = useState(cartData);
  const [update, setUpdate] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setItems(cartData);
  }, [cartData]);

  useEffect(() => {
    if (cartData.length === previousArrayLengthRef.current + 1) {
      // assuming showCart is a function you want to call
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
  }, [cartData]);

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
  const checkoutFun = async ()=>{

    if(cartData.length > 0){
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
          dispatch(cleanCart(cartData));
        } else {
          alert("Order Not Placed Successfully");
        }
      }
  
    }
  }

  return (
    <Fade duration={2000}>
      <div className="xsm:mt-[5rem] mb-[2rem]">
        <div className="justify-items-center text-center">
          <h1 className="xsm:text-[20px] sm:text-[24px] font-black">!!~~CheckOut~~!!</h1>
          <p className="xsm:text-[14px] sm:text-[18px] font-semibold">Please Check That What You Need To Buy !!</p>
        </div>
        <div className="xsm:mt-[1rem] sm:mt-[2rem]">
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
                  <p className="xsm:text-[14px] sm:text-[18px] font-black">Quantity</p>
                </div>
              </div>

              {update ? (
                cartData.map((item) => (
                  <Fade duration={2000} key={item._id}>
                    <div className="flex justify-between xsm:mt-[1rem] sm:mt-[2rem]">
                      <div className="xsm:w-[30%] sm:w-[30%]">
                        <p className="xsm:text-[14px] sm:text-[18px] font-semibold">{item.product_title}</p>
                      </div>
                      <div className="xsm:w-[30%] sm:w-[30%]">
                        <p className="xsm:text-[14px] sm:text-[18px] font-semibold">{item.product_price} $</p>
                      </div>
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
                  </Fade>
                ))
              ) : (
                <Fade duration={2000}>
                  <div className="flex xsm:text-[18px] sm:text-[20px] space-x-[10px] items-center mb-[2rem] place-content-center p-2 mt-[20vh]">
                    <div className="font-semibold w-1/2 text-wrap"> Please Add Any Item In Cart First ~~!!</div>
                  </div>
                </Fade>
              )}
            </div>
          </div>
          <div className="justify-items-center mt-[2rem] text-white">
            <div className="flex space-x-[2rem]">
              <Link href={`/components/orders`}>
                <button onClick={checkoutFun} className="flex xsm:text-[10px] sm:text-[14px]  items-center font-black bg-[---c8] px-[1rem] py-[10px]  rounded-[2rem]">
                  Check out <BsCartCheckFill className="mx-1" />
                </button></Link> <button onClick={handleCleanCart} className="flex xsm:text-[10px] sm:text-[14px]  items-center font-black bg-[---c9] px-[1rem] py-[10px] rounded-[2rem]">
                Clear Cart <BsCartDashFill className="mx-1" />
              </button></div>
          </div></div>
      </div>
    </Fade>
  );
};

export default Checkout;
