import Link from "next/link";
import React, { useState, useEffect } from "react";
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
    useEffect(()=>{
        findeOneProduct();
    },[id])
    const findeOneProduct = async () => {
         let productOne = {
            product_id: parseInt(id)
        }
        let post = await fetch(`/api/getOneProduct`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(productOne),
        });
        if (!post.ok) {
            throw new Error('Network response was not ok');
          }
        let res = await post.json();
        if(res.data){
        setTimeout(() => {
                settitle(res.data.product_title)
                setdesc(res.data.product_desc)
                setprice(res.data.product_price)
                setrating(res.data.product_rating)
                setcolor(res.data.product_color)
                setsize(res.data.product_size)
                setqty(res.data.product_quantity)
                setimage(res.data.product_img)
                setcategory(res.data.product_category)
                settrend(res.data.product_trend)
                setdisplayPlace(res.data.product_display_page_place)
                setdisplayTitle(res.data.product_display_page_title)
                setdisplayDesc(res.data.product_display_page_desc)
           
        }, 1000);
    }
    } 
    const updateProduct = async () => {
        let product = {
            product_id: id,
            product_title: title,
            product_img: image,
            product_desc: desc,
            product_category: category,
            product_price: price,
            product_color: color,
            product_size: size,
            product_quantity: qty,
            product_trend: trend,
            product_rating: rating,
            product_display_page_place: displayPlace,
            product_display_page_title: displayTitle,
            product_display_page_desc: displayDesc
        }
        let post = await fetch(`/api/updateProduct`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(product),
        });
        let res = await post.json();
        if(res.data){setid("")
            settitle("")
            setdesc("")
            setprice("")
            setrating("")
            setcolor("")
            setsize("")
            setqty("")
            setimage("")
            setcategory("")
            settrend("")
            setdisplayPlace("")
            setdisplayTitle("")
            setdisplayDesc("")
       }
         }
return (<>
            <div className="justify-items-center my-[4rem]">
            <Slide direction="left" triggerOnce >

                <div className="font-black xsm:text-[18px] sm:text-[22px] text-center px-[1rem]">Update Product Update Production ~~!!</div>
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
                        <button onClick={updateProduct} className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]  hover:bg-[---h2]">
                            Update
                        </button>
                    </div>
                </div>
                </Slide> </div></>)
}

export default UpdateProduct;