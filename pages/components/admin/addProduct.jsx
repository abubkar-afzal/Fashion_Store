import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import Popup from "reactjs-popup";
import { AiFillFileAdd } from "react-icons/ai";
const AddProduct = () => {
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
 const [imagetutorial, setimagetutorial] = useState(false);
 const [open, setOpen] = useState(false);
    const [message, setmessage] = useState("");
    const openModal = (msg) =>{ setOpen(true)
      setmessage(msg);
    };
    const closeModal = () => {setOpen(false)
        
    };
 const showImageTutorial =()=>{
    setimagetutorial(true)
    
 }
 const closeImageTutorial =()=>{
    setimagetutorial(false)
    
 }
if(open || imagetutorial == true){
    document.body.style.overflow = "hidden";
   
}else{
    document.body.style.overflow = "auto";
   
}
useEffect(() => {
  checkUniqueId();
}, [id])
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
      if(res.success == true){
        openModal("Please Enter A Unique Id Of Product This Id Is Already Taken..!!")
      }
  }
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const itemsOfCategory = ["men", "women", "kids", "family"];
  const handleCategoryOptionClick = (itemOfCategory) => {
    setcategory(itemOfCategory);
    setIsCategoryOpen(false);
  };
  const [istrendOpen, setIstrendOpen] = useState(false);
  const itemsOftrend = ["yes", "no"];
  const handletrendOptionClick = (itemOftrend) => {
    settrend(itemOftrend);
    setIstrendOpen(false);
  };
  const [isratingOpen, setIsratingOpen] = useState(false);
  const itemsOfrating = ["1", "2", "3", "4", "5"];
  const handleratingOptionClick = (itemOfrating) => {
    setrating(itemOfrating);
    setIsratingOpen(false);
  };const [isplaceOpen, setIsplaceOpen] = useState(false);
  const itemsOfplace = ["new_collection", "best_fashion", "best_seller", "deal_of_day", "all"];
  const handleplaceOptionClick = (itemOfplace) => {
    setdisplayPlace(itemOfplace);
    setIsplaceOpen(false);
  };
  const addProduct = async () => {
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
      product_display_page_desc: displayDesc,
    };
    let post = await fetch(`/api/addProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(product),
    });
    let res = await post.json();
   openModal("Product Added Successfully !!")
    setid("");
    settitle("");
    setdesc("");
    setprice("");
    setrating("");
    setcolor("");
    setsize("");
    setqty("");
    setimage("");
    setcategory("");
    settrend("");
    setdisplayPlace("");
    setdisplayTitle("");
    setdisplayDesc("");
  };
 
  return (
    <>
      <div className="justify-items-center my-[4rem]">
        {
            imagetutorial ?<Popup open={imagetutorial} closeOnDocumentClick onClose={closeImageTutorial} contentStyle={{ background: 'rgba(255, 255, 255, 0)', border: 'none', width:500,  }}  >
            <div className="items-center text-center rounded-[2rem] bg-[---c1] xsm:mx-[2rem] sm:mx-[1px] shadow-lg">
              <h2 className=" text-black font-black p-4 rounded-[2rem] sm:text-[14px] xsm:text-[12px] m-4 ">This is not sponsered !! </h2>
              <button onClick={closeImageTutorial} className="bg-[---c7] text-white font-black p-4 rounded-[2rem] sm:text-[20px] xsm:text-[14px] m-4">Close Tutorial</button>
            </div>
          </Popup> :null
        }
<Popup open={open} closeOnDocumentClick onClose={closeModal} contentStyle={{ background: 'rgba(255, 255, 255, 0)', border: 'none', width:500,  }}  >
          <div className="items-center text-center rounded-[2rem] bg-[---c1] xsm:mx-[2rem] sm:mx-[1px] shadow-lg">
            <h2 className=" text-black font-black p-4 rounded-[2rem] sm:text-[14px] xsm:text-[12px] m-4 ">{message} </h2>
            <button onClick={closeModal} className="bg-[---c7] text-white font-black p-4 rounded-[2rem] sm:text-[20px] xsm:text-[14px] m-4">Close Tutorial</button>
          </div>
        </Popup>
        <Slide direction="left" triggerOnce className={`${open || imagetutorial ? "blurred-background":null}`}>
          <div className="font-black xsm:text-[18px] sm:text-[22px] text-center px-[1rem]">
            Add Product Increase Production ~~!!
          </div>
          <div className="  shadow-lg sm:space-y-[2rem] sm:space-x-[1rem] shadow-black p-[2rem] rounded-[2rem] m-4 space-y-[1rem] bg-[---c1]">
            <div className="xsm:hidden sm:block"></div>
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">ID:</p>
              <input
                onChange={(e) => {
                  setid(e.target.value);
                }}
                value={id}
                type="number"
                className="w-full h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Id"
              />
              <p className=" ml-2 xsm:text-[13px] sm:text-[15px]">
                Please there Give A Unique ID !!
              </p>
            </div>
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Title:
              </p>
              <input
                onChange={(e) => {
                  settitle(e.target.value);
                }}
                value={title}
                type="text"
                className="w-full h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Title"
              />
              <p className=" ml-2 xsm:text-[13px] sm:text-[15px]">
                The Main Title Of Product !!
              </p>
            </div>
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Image Url:
              </p>
              <input
                onChange={(e) => {
                  setimage(e.target.value);
                }}
                value={image}
                type="text"
                className="w-full h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Image Url"
              />
              <p className=" ml-2 xsm:text-[13px] sm:text-[15px]">
                Please there only give URL!!
              </p>
              <div className="flex ml-2 xsm:text-[13px] sm:text-[15px] font-semibold mt-2 space-x-2">
                <p className="text-[---c7]">To Generate URL =&gt;</p>

                <Link href={`https://imgur.com/upload`} target="_blank">
                  <button className="bg-[---c8] text-white px-2 rounded-[10px] hover:bg-[---h8]">
                    Press Me
                  </button>
                </Link>
                <button  onClick={showImageTutorial} className="bg-[---c9] text-white px-2 rounded-[10px] hover:bg-[---h9]">
                   How ? 
                  </button>
              </div>
              
            </div>
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Description:
              </p>
              <input
                onChange={(e) => {
                  setdesc(e.target.value);
                }}
                value={desc}
                type="text"
                className="w-full h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Desc"
              />
              <p className=" ml-2 xsm:text-[13px] sm:text-[15px]">
                The Description Of Product !!
              </p>
            </div>
            <div className="">
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Category:
              </p>
              <div className="relative">
                <input
                  disabled={true}
                  onChange={(e) => {
                    setcategory(e.target.value);
                  }}
                  value={category}
                  type="text"
                  className="w-[90%] h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                  placeholder="Enter Your Category"
                />
                <button
                  onClick={() => {setIsCategoryOpen(!isCategoryOpen),setIstrendOpen(false),setIsplaceOpen(false),setIsratingOpen(false)}}
                  className="absolute top-0 py-2 text-black rounded-md"
                >
                  ▼
                </button>
                {isCategoryOpen && (
                  <ul className="absolute w-full  bg-white border border-gray-300 rounded-md shadow-md">
                    {itemsOfCategory.map((option, index) => (
                      <li
                        key={index}
                        onClick={() => handleCategoryOptionClick(option)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <p className=" ml-2 xsm:text-[13px] sm:text-[15px]">
                Select Category It Will Display On This Category Page !!
              </p>
            </div>
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Price:
              </p>
              <input
                onChange={(e) => {
                  setprice(e.target.value);
                }}
                value={price}
                type="number"
                className="w-full h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Price"
              />
              <p className=" ml-2 xsm:text-[13px] sm:text-[15px]">
                Give A Good Price Of Product !!
              </p>
            </div>
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Color:
              </p>
              <input
                onChange={(e) => {
                  setcolor(e.target.value);
                }}
                value={color}
                type="text"
                className="w-full h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Color"
              />
              <p className=" ml-2 xsm:text-[13px] sm:text-[15px]">
                Give One Color Which Color Is Display In Image!!
              </p>
            </div>
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">Size:</p>
              <input
                onChange={(e) => {
                  setsize(e.target.value);
                }}
                value={size}
                type="text"
                className="w-full h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Size"
              />
              <p className=" ml-2 xsm:text-[13px] sm:text-[15px]">
                Give Only One Size According To Image !!
              </p>
            </div>
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Quantity:
              </p>
              <input
                onChange={(e) => {
                  setqty(e.target.value);
                }}
                value={qty}
                type="number"
                className="w-full h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Quantity"
              />
              <p className=" ml-2 xsm:text-[13px] sm:text-[15px]">
                Enter Total Qunatity Of Exact Size And Color Avaliable !!
              </p>
            </div>
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Trend:
              </p>
              <div className="relative">
                <input
                  disabled={true}
                  onChange={(e) => {
                    settrend(e.target.value);
                  }}
                  value={trend}
                  type="text"
                  className="w-[90%] h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                  placeholder="Enter Your Trend"
                />
                <button
                  onClick={() => {setIstrendOpen(!istrendOpen),setIsplaceOpen(false),setIsratingOpen(false),setIsCategoryOpen(false)}}
                  className="absolute top-0 py-2 text-black rounded-md"
                >
                  ▼
                </button>
                {istrendOpen && (
                  <ul className="absolute w-full  bg-white border border-gray-300 rounded-md shadow-md">
                    {itemsOftrend.map((option, index) => (
                      <li
                        key={index}
                        onClick={() => handletrendOptionClick(option)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <p className=" ml-2 xsm:text-[13px] sm:text-[15px]">
                If Trend Yes Then It Will Display In Trend Page OtherWise Not In
                Trend Page!!
              </p>
            </div>
            <div className="">
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Rating:
              </p><div className="relative">
                <input
                  disabled={true}
                  onChange={(e) => {
                    setrating(e.target.value);
                  }}
                  value={rating}
                  type="text"
                  className="w-[90%] h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                  placeholder="Enter Your Rating"
                />
                <button
                  onClick={() => {setIsratingOpen(!isratingOpen),setIsplaceOpen(false),setIsCategoryOpen(false),setIstrendOpen(false) }}
                  className="absolute top-0 py-2 text-black rounded-md"
                >
                  ▼
                </button>
                {isratingOpen && (
                  <ul className="absolute w-full  bg-white border border-gray-300 rounded-md shadow-md z-20">
                    {itemsOfrating.map((option, index) => (
                      <li
                        key={index}
                        onClick={() => handleratingOptionClick(option)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <p className=" ml-2 xsm:text-[13px] sm:text-[15px]">
                Only Give Default Rating In 1 To 5 !!
              </p>
            </div>
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Display Page Place:
              </p>
              <div className="relative">
                <input
                  disabled={true}
                  onChange={(e) => {
                    setdisplayPlace(e.target.value);
                  }}
                  value={displayPlace}
                  type="text"
                  className="w-[90%] h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                  placeholder="Enter Your Place Of Display"
                />
                <button
    
    onClick={() => {setIsplaceOpen(!isplaceOpen),setIsratingOpen(false),setIsCategoryOpen(false),setIstrendOpen(false) }}
                  className="absolute top-0 py-2 text-black rounded-md"
                >
                  ▼
                </button>
                {isplaceOpen && (
                  <ul className="absolute w-full  bg-white border border-gray-300 rounded-md shadow-md">
                    {itemsOfplace.map((option, index) => (
                      <li
                        key={index}
                        onClick={() => handleplaceOptionClick(option)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <p className=" ml-2 xsm:text-[13px] sm:text-[15px]">
                Select The Place There You Need To Display It On Store !!
              </p>
            </div>
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Display Page Title:
              </p>
              <input
                onChange={(e) => {
                  setdisplayTitle(e.target.value);
                }}
                value={displayTitle}
                type="text"
                className="w-full h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Display Page Title"
              />
              <p className=" ml-2 xsm:text-[13px] sm:text-[15px]">
                Select The Title Which Is Display On Page According To It's
                Place!!
              </p>
            </div>
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Display Page Description:
              </p>
              <input
                onChange={(e) => {
                  setdisplayDesc(e.target.value);
                }}
                value={displayDesc}
                type="text"
                className="w-full h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Display Page Description"
              />
              <p className=" ml-2 xsm:text-[13px] sm:text-[15px]">
                Select The Description Which Is Display On Page According To
                It's Place!!
              </p>
            </div>
            <div className="flex justify-center space-x-[1rem] ">
              <button
                onClick={addProduct}
                className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]  hover:bg-[---h2] flex  items-center"
              >
                Add Product <AiFillFileAdd className="xsm:text-[12px] sm:text-[16px] ml-2" />
              </button>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
};

export default AddProduct;
