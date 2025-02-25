import Link from "next/link";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

const Forgot=()=>{
    const [Newsecret , setNewsecret] = useState("");
    const [NewPassword , setNewPassword] = useState("");
    const [ConfrimPassword , setConfrimPassword] = useState("");
   

  return(<> 
 
      <div className="justify-items-center my-[4rem]">
      <Slide direction="left" > <div className="font-black xsm:text-[18px] sm:text-[22px]">Give New Make New ~~!!</div>
        <div className="shadow-lg sm:space-y-[2rem] sm:space-x-[2rem] shadow-black p-[2rem] rounded-[2rem] m-4 space-y-[1rem] bg-[---c1]">
          <div className="xsm:hidden sm:block"></div>
          <div>
            <p className="font-black xsm:text-[18px] sm:text-[22px]">
               New Secret:
            </p>
            <input
              onChange={(e)=>{
                setNewsecret(e.target.value)
              }}
              value={Newsecret}
              type="text"
              className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
              placeholder="Enter Your New Secret"
            />
          </div> <div>
            <p className="font-black xsm:text-[18px] sm:text-[22px]">
              New Password:
            </p>
            <input
              onChange={(e)=>{
                setNewPassword(e.target.value)
              }}
              value={NewPassword}
              type="password"
              className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
              placeholder="Enter Your New Password"
            />
          </div>
          <div>
            <p className="font-black xsm:text-[18px] sm:text-[22px]">
              Confrim Password:
            </p>
            <input
              onChange={(e)=>{
                setConfrimPassword(e.target.value)
              }}
              value={ConfrimPassword}
              type="password"
              className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
              placeholder="Enter Confrim Password"
            />
          </div>
          <div className="flex justify-center space-x-[1rem] ">
          <button  className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]  hover:bg-[---h2]">
             Change
            </button>
          </div>
        </div>
        </Slide></div></>)
}
export default Forgot