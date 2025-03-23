import { useRouter } from "next/router";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Forgot=({setLoader})=>{
    const router = useRouter();
  const { slug } = router.query;
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
    const ChangePassword = async (e) => {
      setLoader(true)
      const scrollOptions = {
        left: 0,
        top: 0,
        behavior: "smooth",
      };
      window.scrollTo(scrollOptions);
      if (password == cpassword) {
        if (Newsecret) {
          e.preventDefault();
          let admin = {
            oldSecret: slug,
            newSecret: Newsecret,
            newPassword: password,
          };
          let res = await fetch(
            `${process.env.NEXT_PUBLIC_HOST}/api/changeAdminPassword`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json; charset=UTF-8",
              },
              body: JSON.stringify(admin),
            }
          );
          let response = await res.json();
          setLoader(false)
          if (response.success == true) {
           
            router.push(`${process.env.NEXT_PUBLIC_HOST}/components/admin/admin`);
          } 
        } 
      } 
      
    };
  return(<> 
 
      <div className="justify-items-center my-[4rem] min-h-screen content-center overflow-y-scroll hideBar">
      <Slide direction="left" > <div className="font-black xsm:text-[18px] sm:text-[22px] text-white ">Give New Make New ~~!!</div>
        <div className="shadow-lg sm:space-y-[2rem] sm:space-x-[2rem] shadow-black p-[2rem] rounded-[2rem] m-4 space-y-[1rem] bg-[---blur]">
          <div className="xsm:hidden sm:block"></div>
          <div>
            <p className="font-black xsm:text-[18px] sm:text-[22px] text-white">
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
                      <p className="font-black xsm:text-[18px] sm:text-[22px] text-white">
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
                            className=" m-2 sm:text-[20px] mm:text-[26px] lm:text-[30px] t:text-[26px] l:text-[30px] ll:text-[37px] k:text-[45px] cursor-pointer text-white"
                          />
                        ) : (
                          <FaEye
                            onClick={hideP}
                            className=" m-2 sm:text-[20px] mm:text-[26px] lm:text-[30px] t:text-[26px] l:text-[30px] ll:text-[37px] k:text-[45px] cursor-pointer text-white"
                          />
                        )}</div>
                    </div>
           <div>
                      <p className="font-black xsm:text-[18px] sm:text-[22px] text-white">
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
                            className=" m-2 sm:text-[20px] mm:text-[26px] lm:text-[30px] t:text-[26px] l:text-[30px] ll:text-[37px] k:text-[45px] cursor-pointer text-white"
                          />
                        ) : (
                          <FaEye
                            onClick={hideCP}
                            className=" m-2 sm:text-[20px] mm:text-[26px] lm:text-[30px] t:text-[26px] l:text-[30px] ll:text-[37px] k:text-[45px] cursor-pointer text-white"
                          />
                        )}</div>
                    </div>
          <div className="flex justify-center space-x-[1rem] ">
          <button onClick={ChangePassword}  className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]  hover:bg-[---h2]">
             Change
            </button>
          </div>
        </div>
        </Slide></div></>)
}
export default Forgot