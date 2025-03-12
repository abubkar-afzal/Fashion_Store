import React, { useState } from "react";

const Feedback = () => {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [feedback, setFeedback] = useState("");
    return (<>
        <div className="justify-items-center xsm:mt-[4rem] sm:mt-[1px]">
          <div className="xsm:text-[14px] sm:text-[18px] font-semibold mt-[2rem]" >Please Give Your FeedBack !!</div>
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
                
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  value={email}
                  type="email"
                  className="w-full h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2 "
                  placeholder="Enter Your Email"
                />
              </div>
              
                <div className="flex items-center sm:row-start-2 sm:col-start-1 sm:row-end-2 sm:col-end-3 xsm:row-start-3 xsm:col-start-1 xsm:row-end-3 xsm:col-end-1">
                    <p className="font-semibold xsm:text-[16px] sm:text-[20px]">
                    Feedback:
                    </p>
                    <textarea
                     onChange={(e) => {
                        setFeedback(e.target.value)
                      }}
                      value={feedback}
                    className="w-full h-[5rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                    placeholder="Enter Your Feedback"
                    />
              </div>
              <div className="sm:row-start-3 sm:col-start-1 sm:row-end-3 sm:col-end-3 xsm:row-start-4 xsm:col-start-1 xsm:row-end-4 xsm:col-end-1 sm:col-span-3 text-center">
              <button
                
                className="bg-[---c2] hover:bg-[---h2] xsm:text-[16px] sm:text-[20px] p-2 m-2 w-auto px-[2rem] rounded-[2rem] font-bold shadow-lg text-white"
              >
                Submit
              </button>
        </div>
        </div>
        </div>
</>)
}
export default Feedback;