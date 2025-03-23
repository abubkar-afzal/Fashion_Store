import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaSquareMinus } from "react-icons/fa6";

const AllOrders = ({setLoader})=>{
  const router = useRouter();

  const deleteOrder = async (id) => {
    setLoader(true)
    let d = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/deleteOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });
    let res = await d.json();
    setLoader(false)
    if (res.success == true) {
      router.push(`${process.env.NEXT_PUBLIC_HOST}/components/admin/allOrders`);
      console.log("deleted");
    } else {
      console.log("error came");
    }
  }
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
        let d = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getOrdersForAdmin`)
        let res = await d.json();
        
        if (res.success == true) {
          setOrders(res.data);
        } else {
          console.log("error came");
        }
      };
    return(
        <>
        <div className="justify-items-center xsm:mt-[4rem] sm:mt-[1px] mb-[2rem] min-h-screen content-center overflow-y-scroll hideBar ">
            <div className="font-black xsm:text-[20px] sm:text-[25px] text-white">All Orders OF Store</div>
            <div className="min-h-screen bg-[---blur] rounded-[1rem] py-[1rem] my-[1rem]">{allorders.length > 0 ? (
                            allorders.map((atom) => {
                              return (
                                <div key={atom._id}>
                                  {atom.orders.items.map((item) => {
                                    return (
                                      <>
                                        <div key={item._id}>
                                           
                                          <div >
                                          <Link href={`${process.env.NEXT_PUBLIC_HOST}/components/admin/${atom._id}`} className="flex justify-between xsm:mt-[1rem] sm:mt-[2rem] cursor-pointer shadow-lg px-[1rem] rounded-[1rem] w-[90vw]  bg-[---blur] text-white hover:bg-white hover:text-black duration-[1s]"> <div className="xsm:w-[30%] overflow-scroll hideBar">
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
                                               <button onClick={()=>{deleteOrder(atom._id)}} className="flex xsm:text-[14px] sm:text-[12px]  items-center font-black bg-[---c8] px-[1rem] py-[10px] text-white  rounded-[2rem] hover:bg-[---h8]">
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
                              <div className="flex xsm:text-[18px] sm:text-[20px] space-x-[10px] items-center mb-[2rem] place-content-center p-2 mt-[10vh] bg-[---blur] ">
                                <div className="font-semibold w-full  text-wrap  text-white">
                                  
                                  No Order Had Found Yet Right Now !!
                                </div>
                              </div>
                            </>
                          )}</div>
             
        </div>
        </>
    )
}
export default AllOrders;