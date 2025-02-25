import Link from "next/link";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

const DeleteProduct =()=>{
    const [id, setid] = useState("");
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
            <Slide direction="left" triggerOnce >

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
                        <button onClick={deleteProduct} className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]  hover:bg-[---h2]">
                            Delete
                        </button>
                    </div>
                </div>
                </Slide> </div></>)
}

export default DeleteProduct;