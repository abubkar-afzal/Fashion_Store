import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Popup from "reactjs-popup";

const DeleteProduct =()=>{
    const [id, setid] = useState("");
    const [open, setOpen] = useState(false);
        const [message, setmessage] = useState("");
        const openModal = (msg) =>{ setOpen(true)
          setmessage(msg);
        };
        const closeModal = () => {setOpen(false)
            
        };
     
    if(open  == true){
        document.body.style.overflow = "hidden";
       
    }else{
        document.body.style.overflow = "auto";
       
    }
 
      const checkUniqueId = async ()=>{
        let req = await fetch(`/api/checkUniqueIdOfProduct`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(id),
        }
          );
          let res = await req.json();
          if(res.success == false){
            openModal("This ID Don't Exists..!!")
          }else{
            openModal("Product Is Delete Successfully !!")
          }
      }
    const deleteProduct = async () => {
        let product = {
            product_id: parseInt(id),
        }
        let post = await fetch(`/api/deleteProduct`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(product),
        });
        let res = await post.json();
        
        setid("")
        
    }
    return (<>
            <div className="justify-items-center my-[4rem]">
           
                <Popup open={open} closeOnDocumentClick onClose={closeModal} contentStyle={{ background: 'rgba(255, 255, 255, 0)', border: 'none', width:500,  }}  >
                          <div className="items-center text-center rounded-[2rem] bg-[---c1] xsm:mx-[2rem] sm:mx-[1px] shadow-lg">
                            <h2 className=" text-black font-black p-4 rounded-[2rem] sm:text-[14px] xsm:text-[12px] m-4 ">{message} </h2>
                            <button onClick={closeModal} className="bg-[---c7] text-white font-black p-4 rounded-[2rem] sm:text-[20px] xsm:text-[14px] m-4">Close Tutorial</button>
                          </div>
                        </Popup>
            <Slide direction="left" triggerOnce className={`${open ? "blurred-background":null}`}>

                <div className="font-black xsm:text-[18px] sm:text-[22px] text-center px-[1rem]">Delete Product Clean Store ~~!!</div>
                <div className="shadow-lg sm:space-y-[2rem] sm:space-x-[1rem] shadow-black p-[2rem] rounded-[2rem] m-4 space-y-[1rem] bg-[---c1]">
                    <div className="xsm:hidden sm:block"></div>
                    <div>
                        <p className="font-black xsm:text-[18px] sm:text-[22px]">
                            ID:
                        </p>
                        <input
                            onChange={(e) => {
                                setid(e.target.value)
                            }}
                            value={id}
                            type="number"
                            className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                            placeholder="Enter Your Product Id"
                        />
                    </div>
                    
                    <div className="flex justify-center space-x-[1rem] ">
                        <button onClick={()=>{checkUniqueId(),deleteProduct()}} className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]  hover:bg-[---h2]">
                            Delete
                        </button>
                    </div>
                </div>
                </Slide> </div></>)
}

export default DeleteProduct;