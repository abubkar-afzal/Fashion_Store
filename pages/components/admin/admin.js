import Link from "next/link";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

const Admin = ()=>{
    const [password , setPassword] = useState("");
      const [hpassword , setHpassword] = useState("");

    return(<> 
   
        <div className="justify-items-center my-[4rem]">
        <Slide direction="right" > <div className="font-black xsm:text-[18px] sm:text-[22px]">Admin</div>
          <div className="shadow-lg sm:space-y-[2rem] sm:space-x-[2rem] shadow-black p-[2rem] rounded-[2rem] m-4 space-y-[1rem] bg-[---c1]">
            <div className="xsm:hidden sm:block"></div>
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Password:
              </p>
              <input
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                value={password}
                type="password"
                className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Password"
              />
            </div>
            <div className="w-full">
              <Link href={`/components/admin/forgot`}> <p className="text-[---c10] hover:underline font-thin xsm:text-[13px] sm:text-[16px]  text-end  cursor-pointer xsm:mx-4 sm:mx-[2rem]">forgot password ?</p></Link>
            </div>
            <div className="flex justify-center space-x-[1rem] ">
            <Link href={`/components/admin/choice`}><button  className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]  hover:bg-[---h2]">
                Login
              </button></Link>
            </div>
          </div>
          </Slide></div></>)
}
export default Admin;