
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

const AllProduct = ({setLoader}) => {
  const router = useRouter();
    const [allProduct, setAllProduct] = useState([])
  useEffect(() => {
    alldata();
  }, [router.query])
  const alldata = async ()=>{
    
    let d = await fetch(`/api/getProduct`);
    let res = await d.json();
    
    setAllProduct(res.data)
    
  }
  return (
    <>
      <div className="justify-items-center my-[4rem] min-h-screen content-center overflow-y-scroll hideBar">
       
        <Slide direction="left" triggerOnce >
          <div className="font-black xsm:text-[18px] sm:text-[22px] text-center px-[1rem] text-white">
            All Products ~~!!
          </div>
          
            
            {
            allProduct.map((item)=>{
                return <div key={item._id} className="  shadow-lg sm:space-y-[2rem] sm:space-x-[1rem] shadow-black p-[2rem] rounded-[2rem] m-4 space-y-[1rem] bg-[---blur] text-center justify-items-center mb-[3rem]">
                <div className="xsm:hidden sm:block"></div>
                <div>
                  <p className="font-black xsm:text-[18px] sm:text-[22px]">ID:</p>
                  
                  <p className=" ml-2 xsm:text-[20px] sm:text-[25px] font-black text-white text-center">
                    {item.product_id}
                  </p>
                </div>
                <div>
                  <p className="font-black xsm:text-[18px] sm:text-[22px]">
                    Title:
                  </p>
                  
                  <p className=" ml-2 xsm:text-[20px] sm:text-[25px] font-black text-white text-center">
                  {item.product_title}
                  </p>
                </div>
                <div>
                  <p className="font-black xsm:text-[18px] sm:text-[22px]">
                    Image :
                  </p>
                 
                  <Image src={item.product_img} width={300} height={300} alt="product image"/>
                  
                  
                </div>
                <div>
                  <p className="font-black xsm:text-[18px] sm:text-[22px]">
                    Description:
                  </p>
                  
                  <p className=" ml-2 xsm:text-[20px] sm:text-[25px] font-black text-white text-center">
                  {item.product_desc}
                  </p>
                </div>
                <div className="">
                  <p className="font-black xsm:text-[18px] sm:text-[22px]">
                    Category:
                  </p>
                  
                  <p className=" ml-2 xsm:text-[20px] sm:text-[25px] font-black text-white text-center">
                  {item.product_category}
                  </p>
                </div>
                <div>
                  <p className="font-black xsm:text-[18px] sm:text-[22px]">
                    Price:
                  </p>
                 
                  <p className=" ml-2 xsm:text-[20px] sm:text-[25px] font-black text-white text-center">
                  ${item.product_price}
                  </p>
                </div>
                <div>
                  <p className="font-black xsm:text-[18px] sm:text-[22px]">
                    Color:
                  </p>
                  
                  <p className=" ml-2 xsm:text-[20px] sm:text-[25px] font-black text-white text-center">
                  {item.product_color}
                  </p>
                </div>
                <div>
                  <p className="font-black xsm:text-[18px] sm:text-[22px]">Size:</p>
                  
                  <p className=" ml-2 xsm:text-[20px] sm:text-[25px] font-black text-white text-center">
                  {item.product_size}
                  </p>
                </div>
                <div>
                  <p className="font-black xsm:text-[18px] sm:text-[22px]">
                    Quantity:
                  </p>
                  
                  <p className=" ml-2 xsm:text-[20px] sm:text-[25px] font-black text-white text-center">
                  {item.product_quantity}
                  </p>
                </div>
                <div>
                  <p className="font-black xsm:text-[18px] sm:text-[22px]">
                    Trend:
                  </p>
                  
                  <p className=" ml-2 xsm:text-[20px] sm:text-[25px] font-black text-white text-center">
                  {item.product_trend}
                  </p>
                </div>
                <div className="">
                  <p className="font-black xsm:text-[18px] sm:text-[22px]">
                    Rating:
                  </p>
                  <p className=" ml-2 xsm:text-[20px] sm:text-[25px] font-black text-white text-center">
                  {item.product_rating}
                  </p>
                </div>
                <div>
                  <p className="font-black xsm:text-[18px] sm:text-[22px]">
                    Display Page Place:
                  </p>
                  
                  <p className=" ml-2 xsm:text-[20px] sm:text-[25px] font-black text-white text-center">
                  {item.product_display_page_place}
                  </p>
                </div>
                <div>
                  <p className="font-black xsm:text-[18px] sm:text-[22px]">
                    Display Page Title:
                  </p>
                  
                  <p className=" ml-2 xsm:text-[20px] sm:text-[25px] font-black text-white text-center">
                  {item.product_display_page_title}
                  </p>
                </div>
                <div>
                  <p className="font-black xsm:text-[18px] sm:text-[22px]">
                    Display Page Description:
                  </p>
                  
                  <p className=" ml-2 xsm:text-[20px] sm:text-[25px] font-black text-white text-center">
                  {item.product_display_page_desc}
                  </p>
                </div>
                
              </div>
            })
          }
        
        </Slide>
      </div>
    </>
  );
};

export default AllProduct;
