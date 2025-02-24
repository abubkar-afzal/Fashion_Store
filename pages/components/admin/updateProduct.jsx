import Link from "next/link";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

const UpdateProduct =()=>{
    const [id, setid] = useState("");
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const [price, setprice] = useState("");
    const [rating, setrating] = useState("");
    const [color, setcolor] = useState("");
    const [size, setsize] = useState("");
    const [qty, setqty] = useState("");
    const [image, setimage] = useState("");
    const [category, setcategory] = useState("");
    const [trend, settrend] = useState("");
    const [displayPlace, setdisplayPlace] = useState("");
    const [displayTitle, setdisplayTitle] = useState("");
    const [displayDesc, setdisplayDesc] = useState("");
    return (<>
            <div className="justify-items-center my-[4rem]">
            <Slide direction="left" triggerOnce >

                <div className="font-black xsm:text-[18px] sm:text-[22px]">Update Product</div>
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
                    <div>
                        <p className="font-black xsm:text-[18px] sm:text-[22px]">
                            Title:
                        </p>
                        <input
                            onChange={(e) => {
                                settitle(e.target.value)
                            }}
                            value={title}
                            type="text"
                            className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                            placeholder="Enter Your Title"
                        />
                    </div> <div>
                        <p className="font-black xsm:text-[18px] sm:text-[22px]">
                            Image Url:
                        </p>
                        <input
                            onChange={(e) => {
                                setimage(e.target.value)
                            }}
                            value={image}
                            type="text"
                            className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                            placeholder="Enter Your Image Url"
                        />
                    </div> <div>
                        <p className="font-black xsm:text-[18px] sm:text-[22px]">
                            Description:
                        </p>
                        <input
                            onChange={(e) => {
                                setdesc(e.target.value)
                            }}
                            value={desc}
                            type="text"
                            className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                            placeholder="Enter Your Desc"
                        />
                    </div> <div>
                        <p className="font-black xsm:text-[18px] sm:text-[22px]">
                            Category:
                        </p>
                        <input
                            onChange={(e) => {
                                setcategory(e.target.value)
                            }}
                            value={category}
                            type="text"
                            className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                            placeholder="Enter Your Category"
                        />
                    </div> <div>
                        <p className="font-black xsm:text-[18px] sm:text-[22px]">
                            Price:
                        </p>
                        <input
                            onChange={(e) => {
                                setprice(e.target.value)
                            }}
                            value={price}
                            type="number"
                            className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                            placeholder="Enter Your Price"
                        />
                    </div> <div>
                        <p className="font-black xsm:text-[18px] sm:text-[22px]">
                            Color:
                        </p>
                        <input
                            onChange={(e) => {
                                setcolor(e.target.value)
                            }}
                            value={color}
                            type="text"
                            className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                            placeholder="Enter Your Color"
                        />
                    </div> <div>
                        <p className="font-black xsm:text-[18px] sm:text-[22px]">
                            Size:
                        </p>
                        <input
                            onChange={(e) => {
                                setsize(e.target.value)
                            }}
                            value={size}
                            type="text"
                            className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                            placeholder="Enter Your Size"
                        />
                    </div> <div>
                        <p className="font-black xsm:text-[18px] sm:text-[22px]">
                            Quantity:
                        </p>
                        <input
                            onChange={(e) => {
                                setqty(e.target.value)
                            }}
                            value={qty}
                            type="number"
                            className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                            placeholder="Enter Your Quantity"
                        />
                    </div> <div>
                        <p className="font-black xsm:text-[18px] sm:text-[22px]">
                            Trend:
                        </p>
                        <input
                            onChange={(e) => {
                                settrend(e.target.value)
                            }}
                            value={trend}
                            type="text"
                            className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                            placeholder="Enter Your Trend"
                        />
                    </div> <div>
                        <p className="font-black xsm:text-[18px] sm:text-[22px]">
                            Rating:
                        </p>
                        <input
                            onChange={(e) => {
                                setrating(e.target.value)
                            }}
                            value={rating}
                            type="text"
                            className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                            placeholder="Enter Your Rating"
                        />
                    </div> <div>
                        <p className="font-black xsm:text-[18px] sm:text-[22px]">
                        Display Page Place:
                        </p>
                        <input
                            onChange={(e) => {
                                setdisplayPlace(e.target.value)
                            }}
                            value={displayPlace}
                            type="text"
                            className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                            placeholder="Enter Your Display Page Place"
                        />
                    </div> <div>
                        <p className="font-black xsm:text-[18px] sm:text-[22px]">
                        Display Page Title:
                        </p>
                        <input
                            onChange={(e) => {
                                setdisplayTitle(e.target.value)
                            }}
                            value={displayTitle}
                            type="text"
                            className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                            placeholder="Enter Your Display Page Title"
                        />
                    </div> <div>
                        <p className="font-black xsm:text-[18px] sm:text-[22px]">
                        Display Page Description:
                        </p>
                        <input
                            onChange={(e) => {
                                setdisplayDesc(e.target.value)
                            }}
                            value={displayDesc}
                            type="text"
                            className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                            placeholder="Enter Your Display Page Description"
                        />
                    </div>

                    <div className="flex justify-center space-x-[1rem] ">
                        <Link href={`/components/admin/choice`}><button className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]  hover:bg-[---h2]">
                            Update
                        </button></Link>
                    </div>
                </div>
                </Slide> </div></>)
}

export default UpdateProduct;