import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Admin = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [hpassword, sethpassword] = useState("");
  const hideP = () => {
    sethpassword(!hpassword);
  }; 
  let hidePass;
  if (hpassword) {
    hidePass = "password";
  } else {
    hidePass = "text";
  }
  const AdminLogin = async (e) => {
    e.preventDefault();
    let p = {
      password : password
    }
    let res = await fetch(`/api/loginAdmin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(p),
    });
    let response = await res.json();
    if(response){
      if(response.success == true){
      router.push(`/components/admin/choice`)    
     
      }
      else{
       console.log("error1")
      }
    }else{
      console.log("error2")
     
    }
  };
  return (<>

    <div className="justify-items-center my-[4rem] min-h-screen content-center overflow-y-scroll hideBar">
      <Slide direction="right" > <div className="text-white font-black xsm:text-[18px] sm:text-[22px]">Welcome Admin ~~!! </div>
        <div className="shadow-lg sm:space-y-[2rem] sm:space-x-[2rem] shadow-black p-[2rem] rounded-[2rem] m-4 space-y-[1rem] bg-[---blur]">
          <div className="xsm:hidden sm:block"></div>
          <div>
            <p className="font-black xsm:text-[18px] sm:text-[22px] text-white">
              Password:
            </p>
            <div

              className="flex items-center place-content-center  mb-[1rem"
            >
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                value={password}
                type={hidePass}
                className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Password"
              />
              {hpassword ? (
                <FaEyeSlash
                  onClick={hideP}
                  className=" m-2 sm:text-[20px] mm:text-[26px] lm:text-[30px] t:text-[26px] l:text-[30px] ll:text-[37px] k:text-[45px] cursor-pointer text-white"
                />
              ) : (
                <FaEye
                  onClick={hideP}
                  className=" m-2 sm:text-[20px] mm:text-[26px] lm:text-[30px] t:text-[26px] l:text-[30px] ll:text-[37px] k:text-[45px] cursor-pointer text-white"
                />
              )}</div>
          </div>
          <div className="w-full">
            <Link href={`/components/admin/forgot`}> <p className="text-[---c10] hover:underline font-thin xsm:text-[13px] sm:text-[16px]  text-end  cursor-pointer xsm:mx-4 sm:mx-[2rem]">forgot password ?</p></Link>
          </div>
          <div className="flex justify-center space-x-[1rem] ">
           <button onClick={AdminLogin} className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]  hover:bg-[---h2]">
              Login
            </button>
          </div>
        </div>
      </Slide></div></>)
}
export default Admin;