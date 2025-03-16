import { useRouter } from "next/router";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Forgot=()=>{
  const router = useRouter();
    const [secret , setsecret] = useState("");
    const CheckSecret = async (e) => {
      e.preventDefault();
      let s = {
        secret : secret
      }
      let res = await fetch(`/api/CheckSecret`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(s),
      });
      let response = await res.json();
      if(response){
        if(response.success == true){
        router.push(`/components/admin/changePassword/${secret}`);    
       
        }
        else{
         console.log("error1")
        }
      }else{
        console.log("error2")
       
      }
    };
 const [hSecret, sethSecret] = useState("");
  const hideP = () => {
    sethSecret(!hSecret);
  }; 
  let hidePass;
  if (hSecret) {
    hidePass = "Secret";
  } else {
    hidePass = "text";
  }
  return(<> 
 
      <div className="justify-items-center my-[4rem]">
      <Slide direction="left" > <div className="font-black xsm:text-[18px] sm:text-[22px]">Tell The Secret ~~!!</div>
        <div className="shadow-lg sm:space-y-[2rem] sm:space-x-[2rem] shadow-black p-[2rem] rounded-[2rem] m-4 space-y-[1rem] bg-[---c1]">
          <div className="xsm:hidden sm:block"></div>
          <div>
            <p className="font-black xsm:text-[18px] sm:text-[22px]">
              Secret:
            </p>
            <div
            
                          className="flex items-center place-content-center  mb-[1rem"
                        >
                          <input
                            onChange={(e) => {
                              setsecret(e.target.value)
                            }}
                            value={secret}
                            type={hidePass}
                            className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                            placeholder="Enter Your Secret"
                          />
                          {hSecret ? (
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
          <div className="flex justify-center space-x-[1rem] ">
          <button onClick={CheckSecret} className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]  hover:bg-[---h2]">
              Next
            </button>
          </div>
        </div>
        </Slide></div></>)
}
export default Forgot