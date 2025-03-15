import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

const Forgot = ()=>{
      const [email, setEmail] = useState("");
    
    return(<>
    <div>
    <div className="xsm:mt-[4rem] sm:mt-[1px] mb-[4rem]">

<div className="justify-items-center">
  <Slide triggerOnce direction="right" duration={2000}> <div className="font-black xsm:text-[18px] sm:text-[22px]">Forgot Password ~~!!</div>
    <div className="shadow-lg sm:space-y-[2rem] sm:space-x-[2rem] shadow-black p-[2rem] rounded-[2rem] m-4 space-y-[1rem] bg-[---c1] justify-items-center">
      <div className="xsm:hidden sm:block"></div>

      <div>
        <p className="font-black xsm:text-[18px] sm:text-[22px]">
          Email:
        </p>
        <input
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          value={email}
          type="text"
          className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
          placeholder="Enter Your Email"
        />
      </div>
      
      <div className="">      <button  className=" font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]  hover:bg-[---h2]">
            Submit
        </button>
        </div>

    </div></Slide ></div>
</div></div></>)

}

export default Forgot