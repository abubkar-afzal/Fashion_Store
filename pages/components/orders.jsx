import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const router = useRouter();
  const [allorders, setOrders] = useState([]);
  useEffect(() => {
    const fetchorders = async () => {
      const scrollOptions = {
        left: 0,
        top: 0,
        behavior: "smooth",
      };
      window.scrollTo(scrollOptions);
      let d = await fetch(`/api/getOrdersforUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userToken: localStorage.getItem("Fashion_Store"),
        }),
      });
      let res = await d.json();
      if (res.success == true) {
        setOrders(res.FromUserEmail);
        console.log(res.FromUserEmail);
      } else {
        console.log("error came");
      }
    };
    if (localStorage.getItem("Fashion_Store")) {
      fetchorders();
    } else {
      router.push("/");
    }
  }, [router.query]);
  return (
    <>
      <div className="xsm:mt-[4rem] sm:mt-[1px]">
        <div className="xsm:mt-[1rem] sm:mt-[2rem] ">
          <div className="flex justify-center ">
            <div className="xsm:w-[90%] sm:w-[80%]">
              <div className="flex justify-between px-[1rem]">
                <div className="xsm:w-[30%] sm:w-[30%]">
                  <p className="xsm:text-[14px] sm:text-[18px] font-black">
                    Order ID
                  </p>
                </div>
                <div className="xsm:w-[50%] sm:w-[50%] text-center">
                  <p className="xsm:text-[14px] sm:text-[18px] font-black">
                    Details
                  </p>
                </div>
                <div className="xsm:w-[20%] sm:w-[20%]">
                  <p className="xsm:text-[14px] sm:text-[18px] font-black"></p>
                </div>
              </div>
              {allorders.length > 0 ? (
                allorders.map((atom) => {
                  return (
                    <div key={atom._id}>
                      {atom.orders.items.map((item) => {
                        return (
                          <>
                            <div key={item._id}>
                              <div className="flex justify-between xsm:mt-[1rem] sm:mt-[2rem] cursor-pointer shadow-lg px-[1rem] rounded-[1rem]">
                                <div className="xsm:w-[30%] sm:w-[30%] overflow-scroll hideBar">
                                  <p className="xsm:text-[14px] sm:text-[18px] font-semibold">
                                    {item._id}
                                  </p>
                                </div>
                                <div className="xsm:w-[30%] sm:w-[30%] text-end">
                                  <p className="xsm:text-[14px] sm:text-[18px] font-semibold">
                                    {item.order_color}
                                  </p>
                                </div>
                                <div className="xsm:w-[30%] sm:w-[30%] text-end">
                                  <p className="xsm:text-[14px] sm:text-[18px] font-semibold">
                                    {item.order_size}
                                  </p>
                                </div>

                                <div className="xsm:w-[30%] sm:w-[30%] text-end">
                                  <p className="xsm:text-[14px] sm:text-[18px] font-semibold">
                                    {item.order_category}
                                  </p>
                                </div>
                                <div className="xsm:w-[30%] sm:w-[30%] place-items-end">
                                  <Image
                                    src={item.order_img}
                                    width={200}
                                    height={200}
                                    className="xsm:w-[20px] xsm:h-[20px] sm:w-[30px] sm:h-[30px] xsm:text-[14px] sm:text-[18px] font-semibold"
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  );
                })
              ) : (
                <>
                  <div className="flex xsm:text-[18px] sm:text-[20px] space-x-[10px] items-center mb-[2rem] place-content-center p-2 mt-[20vh] ">
                    <div className="font-semibold w-1/2 text-wrap">
                      
                      Please Add Any Item In CheckOut First ~~!!
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
