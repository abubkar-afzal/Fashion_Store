import { MongoClient, ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cleanCart } from "../redux/action";
import Link from "next/link";

const ProductDetails = ({details,checkloginornot})=>{
    const dispatch = useDispatch();
    const handleAddToCart = (details)=>{
      
    const popSound = new Audio("/pop.mp3");
    popSound.play();
      dispatch(addToCart(details))
    }
    const cartData = useSelector((state) => state.reducer);
    const handleCleanCart = (item)=>{
        dispatch(cleanCart(cartData))
      }
   return(<>
        <div className="justify-items-center space-y-[1rem] xsm:my-[5rem] sm:mt-[1px] sm:mb-[5rem] min-h-screen content-center overflow-y-scroll hideBar text-white bg-[---blur] m-[2rem] rounded-[2rem] py-[1rem]">
        <div className="xsm:text-[25px] sm:text-[35px] font-bold">!!~~Product Details~~!!</div>
        
        <div className="xsm:text-[25px] sm:text-[35px] font-black ">{details.product_title}</div>
        <div className="justify-items-center space-y-[1rem]  ">

            
        <div className="xsm:text-[20px] sm:text-[25px] font-bold text-center px-[2rem]">{details.product_desc}</div>
        <Image src={details.product_img} width={500} height={500} className="xsm:w-[200px] xsm:h-[200px] sm:w-[300px] sm:h-[300px]"/>
        <div className="flex items-baseline  xsm:text-[17px] sm:text-[22px] font-medium ">Color:<div className={`sm:w-[1rem] sm:h-[1rem] xsm:w-[10px] xsm:h-[10px] m-[5px]  bg-${details.product_color}`}></div> </div>
        <div className="xsm:text-[17px] sm:text-[22px] font-medium ">Avaliable Sizes: {details.product_size}</div>
         <div className="flex xsm:text-[11px] sm:text-[13px] items-baseline "> <p className="xsm:text-[17px] sm:text-[22px] font-medium ">Rating: </p> 
                                  {details.product_rating == 5 ? (
                                    <>
                                      <IoIosStar />
                                      <IoIosStar />
                                      <IoIosStar />
                                      <IoIosStar />
                                      <IoIosStar />
                                    </>
                                  ) : details.product_rating == 4 ? (
                                    <>
                                      <IoIosStar />
                                      <IoIosStar />
                                      <IoIosStar />
                                      <IoIosStar />
                                    </>
                                  ) : details.product_rating == 3 ? (
                                    <>
                                      <IoIosStar />
                                      <IoIosStar />
                                      <IoIosStar />
                                     
                                    </>
                                  ) : details.product_rating == 2 ? (
                                    <>
                                      <IoIosStar />
                                      <IoIosStar />
                                     
                                    </>
                                  ) : details.product_rating == 1 ? (
                                    <>
                                      <IoIosStar />
                                    
                                    </>
                                  ) : null}
                                </div>
        <div className="xsm:text-[17px] sm:text-[22px] font-medium ">Avaliable Quantity: {details.product_quantity}</div>
        <div className="xsm:text-[17px] sm:text-[22px] font-medium ">Price: ${details.product_price}</div>
       <div className=" flex xsm:space-y-2 xsm:items-center sm:justify-between space-x-[10px] pt-2">
                         <div></div>
                         <Link href={`/components/buyNow`}><button onClick={() => { handleCleanCart(),handleAddToCart(details),checkloginornot()} }  className="font-black xsm:text-[15px] sm:text-[18px] bg-black p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex  items-center hover:bg-[---b4]">
                           Buy Now
                           <FaShoppingBag className="xsm:text-[15px] sm:text-[18px] mx-1" />
                         </button></Link>
                         <button onClick={() => { handleAddToCart(details),checkloginornot() }} className="font-black xsm:text-[15px] sm:text-[18px] bg-black p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex items-center hover:bg-[---b4]">
                           Add To Cart
                           <FaCartShopping className="xsm:text-[15px] sm:text-[18px] mx-1" />
                         </button>
                       </div></div>
        </div>
    </>)
}
export async function getServerSideProps(context) {
  const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();

  // Choose a name for your database
  const database = client.db("fashion_store");

  // Choose a name for your collection
  const collection = database.collection("products");
  const productId = new ObjectId(context.params.slug);
  const details = await collection.findOne({ _id: productId })
    
    return {
        props: {
          details: JSON.parse(JSON.stringify(details)),
          
        },
      };
    }


export default ProductDetails;
