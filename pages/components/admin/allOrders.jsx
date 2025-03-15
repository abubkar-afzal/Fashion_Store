import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaSquareMinus } from "react-icons/fa6";

const AllOrders = ()=>{
  const deleteOrder = async (id) => {
    let d = await fetch(`/api/deleteOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });
    let res = await d.json();
    if (res.success == true) {
      console.log("deleted");
    } else {
      console.log("error came");
    }
  }
     const router = useRouter();
      const [allorders, setOrders] = useState([]);
      useEffect(() => {
        
        
          fetchorders();
       
      }, [router.query]);
      const fetchorders = async () => {
        const scrollOptions = {
          left: 0,
          top: 0,
          behavior: "smooth",
        };
        window.scrollTo(scrollOptions);
        let d = await fetch(`/api/getOrdersForAdmin`)
        let res = await d.json();
        if (res.success == true) {
          setOrders(res.data);
          console.log(res.data);
        } else {
          console.log("error came");
        }
      };
    return(
        <>
        <div className="justify-items-center xsm:mt-[4rem] sm:mt-[1px] mb-[2rem]">
            <div className="font-black xsm:text-[20px] sm:text-[25px]">All Orders OF Store</div>
             {allorders.length > 0 ? (
                            allorders.map((atom) => {
                              return (
                                <div key={atom._id}>
                                  {atom.orders.items.map((item) => {
                                    return (
                                      <>
                                        <div key={item._id}>
                                           
                                          <div >
                                          <Link href={`/components/admin/${atom._id}`} className="flex justify-between xsm:mt-[1rem] sm:mt-[2rem] cursor-pointer shadow-lg px-[1rem] rounded-[1rem] w-[90vw] "> <div className="xsm:w-[30%] overflow-scroll hideBar">
                                              <p className="xsm:text-[16px] sm:text-[20px] py-2 font-semibold">
                                                {item._id}
                                              </p>
                                            </div>
                                            <div className=" text-end">
                                              <p className="xsm:text-[16px] sm:text-[20px] py-2 font-semibold">
                                                {item.order_color}
                                              </p>
                                            </div>
                                            <div className=" text-end">
                                              <p className="xsm:text-[16px] sm:text-[20px] py-2 font-semibold">
                                                {item.order_size}
                                              </p>
                                            </div>
            
                                            <div className=" text-end">
                                              <p className="xsm:text-[16px] sm:text-[20px] py-2 font-semibold">
                                                {item.order_category}
                                              </p>
                                            </div>
                                            <div className=" place-items-end">
                                              <Image
                                                src={item.order_img}
                                                width={200}
                                                height={200}
                                                className="xsm:w-[30px] xsm:h-[30px] sm:w-[40px] sm:h-[40px] font-semibold"
                                              />
                                            </div></Link>
                                             <div className=" place-items-end">
                                               <button onClick={()=>{deleteOrder(item._id)}} className="flex xsm:text-[14px] sm:text-[12px]  items-center font-black bg-[---c8] px-[1rem] py-[10px] text-white  rounded-[2rem] hover:bg-[---h8]">
                                                                Placed<FaSquareMinus className="mx-2" />
                                                              </button>
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
                              <div className="flex xsm:text-[18px] sm:text-[20px] space-x-[10px] items-center mb-[2rem] place-content-center p-2 mt-[10vh] ">
                                <div className="font-semibold w-1/2 text-wrap">
                                  
                                  No Order Had Found Yet Right Now !!
                                </div>
                              </div>
                            </>
                          )}
        </div>
        </>
    )
}
export default AllOrders;