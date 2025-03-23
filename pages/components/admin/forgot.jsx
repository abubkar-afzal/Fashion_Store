import { useRouter } from "next/router";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Popup from "reactjs-popup";

const Forgot=({setLoader})=>{
  const router = useRouter();
    const [secret , setsecret] = useState("");
    const CheckSecret = async (e) => {
      setLoader(true)
      e.preventDefault();
      let s = {
        secret : secret
      }
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/CheckSecret`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(s),
      });
      let response = await res.json();
      setLoader(false)
      if(response){
        if(response.success == true){
        router.push(`${process.env.NEXT_PUBLIC_HOST}/components/admin/changePassword/${secret}`);    
       
        }
        else{
          openModal("Please Give Our Secret Not Other !!")

        }
      }else{
        openModal("Please Give Our Secret Not Other !!")
       
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
    const [open, setOpen] = useState(false);
    const [message, setmessage] = useState("");
    const openModal = (msg) =>{ setOpen(true)
      setmessage(msg);
    };
    const closeModal = () => setOpen(false);
  if(open  == true){
    document.body.style.overflow = "hidden";
   
}else{
    document.body.style.overflow = "auto";
   
}
  return(<> 
 
      <div className="justify-items-center my-[4rem] min-h-screen content-center overflow-y-scroll hideBar ">
        <Popup open={open} closeOnDocumentClick onClose={closeModal} contentStyle={{ background: 'rgba(255, 255, 255, 0)', border: 'none', width:500,  }}  >
                  <div className="items-center text-center rounded-[2rem] bg-[---c1] xsm:mx-[2rem] sm:mx-[1px] ">
                    <h2 className=" text-black font-black p-4 rounded-[2rem] sm:text-[20px] xsm:text-[16px] m-4 ">{message}</h2>
                    <button onClick={closeModal} className="bg-[---c7] text-white font-black p-4 rounded-[1.5rem] sm:text-[20px] xsm:text-[14px] m-4">Ok..!!</button>
                  </div>
                </Popup>
      <Slide direction="left" className={`${open  ? "blurred-background":null}`}> <div className="font-black xsm:text-[18px] sm:text-[22px] text-white">Tell The Secret ~~!!</div>
        <div className="shadow-lg sm:space-y-[2rem] sm:space-x-[2rem] shadow-black p-[2rem] rounded-[2rem] m-4 space-y-[1rem] bg-[---blur]">
          <div className="xsm:hidden sm:block"></div>
          <div>
            <p className="font-black xsm:text-[18px] sm:text-[22px] text-white">
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
                              className=" m-2 sm:text-[20px] mm:text-[26px] lm:text-[30px] t:text-[26px] l:text-[30px] ll:text-[37px] k:text-[45px] cursor-pointer text-white"
                            />
                          ) : (
                            <FaEye
                              onClick={hideP}
                              className=" m-2 sm:text-[20px] mm:text-[26px] lm:text-[30px] t:text-[26px] l:text-[30px] ll:text-[37px] k:text-[45px] cursor-pointer text-white"
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