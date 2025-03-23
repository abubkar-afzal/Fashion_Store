import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import Popup from "reactjs-popup";

const Forgot = ()=>{
      const [email, setEmail] = useState("");
      const getPassword = async (e) => {
        e.preventDefault();
        if(email.includes("@gmail.com")){
        let d = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        });
        let res = await d.json();
       
    
        if (res) {
          if (res.success) {
            const phoneNumber = res.forgot.user_phone; 
            const message = `Hello! This message Is from Abubakar Afzal. ${res.forgot.user_name} !! You Forgot Your Password So I'm Here To Tell You That Your Password Is ${res.forgot.user_password}`; 
            const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`;
        window.location.href = whatsappLink; 
        openModal("Now Login Please..!!")

           
          } else {
            
            openModal("Account Not Found..!!")

          }
        } else {
          openModal("Account Not Found..!!")
        }} else {
          openModal("Please Enter Correct Email..!!")
        }
      };
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
    <div><Popup open={open} closeOnDocumentClick onClose={closeModal} contentStyle={{ background: 'rgba(255, 255, 255, 0)', border: 'none', width:500,  }}  >
              <div className="items-center text-center rounded-[2rem] bg-[---c1] xsm:mx-[2rem] sm:mx-[1px] ">
                <h2 className=" text-black font-black p-4 rounded-[2rem] sm:text-[20px] xsm:text-[16px] m-4 ">{message}</h2>
                <button onClick={closeModal} className="bg-[---c7] text-white font-black p-4 rounded-[1.5rem] sm:text-[20px] xsm:text-[14px] m-4">Ok..!!</button>
              </div>
            </Popup>
    <div className={`${open  ? "blurred-background":null} xsm:mt-[4rem] sm:mt-[1px] mb-[4rem] min-h-screen content-center overflow-y-scroll hideBar`} >

<div className="justify-items-center">
  <Slide triggerOnce direction="right" duration={2000}> <div className="font-black xsm:text-[18px] sm:text-[22px] text-white">Forgot Password ~~!!</div>
    <div className="shadow-lg sm:space-y-[2rem] sm:space-x-[2rem] shadow-black p-[2rem] rounded-[2rem] m-4 space-y-[1rem] bg-[---blur] justify-items-center">
      <div className="xsm:hidden sm:block"></div>

      <div>
        <p className="font-black xsm:text-[18px] sm:text-[22px] text-white">
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
      
      <div className="">      <button onClick={getPassword} className=" font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]  hover:bg-[---h2]">
            Submit
        </button>
        </div>

    </div></Slide ></div>
</div></div></>)

}

export default Forgot