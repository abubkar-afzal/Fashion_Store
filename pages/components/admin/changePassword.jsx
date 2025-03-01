import Link from "next/link";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Forgot=()=>{
    const [Newsecret , setNewsecret] = useState("");
    const [password , setpassword] = useState("");
    const [hpassword , sethpassword] = useState("");
    const [cpassword , setcpassword] = useState("");
    const [hcpassword , sethcpassword] = useState("");
    const hideP = () => {
      sethpassword(!hpassword);
    }; 
    let hidePass;
    if (hpassword) {
      hidePass = "password";
    } else {
      hidePass = "text";
    }
    const hideCP = () => {
      sethcpassword(!hcpassword);
    }; 
    let hideCPass;
    if (hcpassword) {
      hideCPass = "password";
    } else {
      hideCPass = "text";
    }

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
          </div>
           <div>
                      <p className="font-black xsm:text-[18px] sm:text-[22px]">
                        Password:
                      </p>
                      <div
          
                        className="flex items-center place-content-center  mb-[1rem"
                      >
                        <input
                          onChange={(e) => {
                            setpassword(e.target.value)
                          }}
                          value={password}
                          type={hidePass}
                          className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                          placeholder="Enter Your Password"
                        />
                        {hpassword ? (
                          <FaEyeSlash
                            onClick={hideP}
                            className=" m-2 sm:text-[20px] mm:text-[26px] lm:text-[30px] t:text-[26px] l:text-[30px] ll:text-[37px] k:text-[45px] cursor-pointer"
                          />
                        ) : (
                          <FaEye
                            onClick={hideP}
                            className=" m-2 sm:text-[20px] mm:text-[26px] lm:text-[30px] t:text-[26px] l:text-[30px] ll:text-[37px] k:text-[45px] cursor-pointer"
                          />
                        )}</div>
                    </div>
           <div>
                      <p className="font-black xsm:text-[18px] sm:text-[22px]">
                        Confrim Password:
                      </p>
                      <div
          
                        className="flex items-center place-content-center  mb-[1rem"
                      >
                        <input
                          onChange={(e) => {
                            setcpassword(e.target.value)
                          }}
                          value={cpassword}
                          type={hideCPass}
                          className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                          placeholder="Enter Your Password"
                        />
                        {hcpassword ? (
                          <FaEyeSlash
                            onClick={hideCP}
                            className=" m-2 sm:text-[20px] mm:text-[26px] lm:text-[30px] t:text-[26px] l:text-[30px] ll:text-[37px] k:text-[45px] cursor-pointer"
                          />
                        ) : (
                          <FaEye
                            onClick={hideCP}
                            className=" m-2 sm:text-[20px] mm:text-[26px] lm:text-[30px] t:text-[26px] l:text-[30px] ll:text-[37px] k:text-[45px] cursor-pointer"
                          />
                        )}</div>
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