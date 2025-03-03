import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaSquareMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const Checkout =()=>{
    
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

  const dispatch = useDispatch();
  const handleRemoveFromCart = (item)=>{
    dispatch(removeFromCart(item._id))
  }
  const handleCleanCart = (item)=>{
    dispatch(cleanCart(cartData))
  }
 
    return<> <Fade duration={2000}>
    <div className="xsm:mt-[5rem] ">
        <div className="justify-items-center text-center ">
            <h1 className="xsm:text-[18px] sm:text-[20px] font-black ">!!~~CheckOut~~!!</h1>
            <p className="xsm:text-[14px] sm:text-[18px] font-semibold">Please Check That What You Need To Buy !!</p>
        </div>
        <div className="xsm:mt-[1rem] sm:mt-[2rem] ">
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
                    
                        {
                                    update  ? cartData.map((item) => {
                                      
                                      return (<Fade duration={2000}>
                                  <div className="flex justify-between xsm:mt-[1rem] sm:mt-[2rem] ">
                        <div className="xsm:w-[30%] sm:w-[30%]" key={item._id}>
                            <p className="xsm:text-[14px] sm:text-[18px] font-semibold">{item.product_title}</p>
                        </div>
                        <div className="xsm:w-[30%] sm:w-[30%]">
                            <p className="xsm:text-[14px] sm:text-[18px] font-semibold ">{item.product_price} $</p>
                        </div>
                        <div className="xsm:w-[30%] sm:w-[30%]">
                            <p className="xsm:text-[14px] sm:text-[18px] font-semibold ">Quantity</p>
                        </div>  </div></Fade>)
                                    }):<Fade duration={2000}> <div className="flex xsm:text-[18px] sm:text-[20px] space-x-[10px] items-center mb-[2rem] place-content-center  p-2 mt-[20vh]">
                                    <div className=" font-semibold w-1/2 text-wrap"> Please Add Any Item In Cart First ~~!!</div>
                                  </div></Fade>}
                      
                    </div>
                </div>
            </div>
        </div>
    </Fade>
    </>
}

export default Checkout