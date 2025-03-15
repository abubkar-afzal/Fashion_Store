import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Page7 = ({allFeedbacks}) => {
  

  return (
    <>
      <div className=" overflow-hidden xsm:text-center xsm:bg-white  xsm:items-center m-[2rem]">
        <h1 className="xsm:text-[3rem] xsm:font-bold xsm:m-4">
          What People Say About Us
        </h1>
        <p className="xsm:text-[1rem] pb-[3rem] xsm:font-bold xsm:m-4">
          Those peoples visit or use our website all of them give us a positive
          feedback. Lots of peoples lovels our web site. Some of them are your
          ragular customers
        </p>

        <p className="xsm:text-[1rem] xsm:font-bold xsm:mb-[4rem]">
          These the some of those comments those pass by our beloved customers.
          We love all of them as they love us.
        </p>
        <div className="xsm:block sm:hidden"><Splide
          options={{
            type: "loop", 
            perPage: 1, 
            gap: "1rem",
          }}
          aria-label="Feedbacks"
        >
          {
            allFeedbacks.map((items)=>{
              return(<SplideSlide key={items._id}>
                <div className="Images  xsm:hover:cursor-pointer xsm: -[1px] xsm:ml-[30%] xsm: -black xsm:w-[9.1rem] xsm:m-2 pb-[2rem]">
                  <p className="xsm:m-2">
                   {items.user_feedback}
                  </p>
    
                  <div className="xsm:text-[10px] xsm:bg-white xsm:text-center xsm:items-center xsm:space-y-2 p-2 xsm:w-[8.8rem]">
                    <p>{items.user_name}</p>
                  </div>
                </div>
              </SplideSlide>
             )
            })
          }
          
        </Splide></div>
          <div className="hidden sm:block"><Splide
          options={{
            type: "loop", 
            perPage: 3, 
            gap: "1rem", 
          }}
          aria-label="Feedbacks"
        >
          {
            allFeedbacks.map((items)=>{
              return(<SplideSlide key={items._id}>
                <div className="Images  xsm:hover:cursor-pointer xsm: -[1px] xsm:ml-[30%] xsm: -black xsm:w-[9.1rem] xsm:m-2 pb-[2rem]">
                  <p className="xsm:m-2">
                   {items.user_feedback}
                  </p>
    
                  <div className="xsm:text-[10px] xsm:bg-white xsm:text-center xsm:items-center xsm:space-y-2 p-2 xsm:w-[8.8rem]">
                    <p>{items.user_name}</p>
                  </div>
                </div>
              </SplideSlide>
             )
            })
          }
          
        </Splide></div>
      </div>
    </>
  );
};
export default Page7;
