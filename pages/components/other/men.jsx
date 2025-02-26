import Image from "next/image";
import React from "react";
import { IoIosStar } from "react-icons/io";
import { Fade } from "react-awesome-reveal";
import { MongoClient } from "mongodb";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action";
import { removeFromCart } from "../redux/action";
const Men = ({ allProducts }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item)=>{
    dispatch(addToCart(item))
  }
 

  return (
    <>
      <Fade duration={2000}>
        <div className="flex flex-wrap space-x-[1rem] space-y-[2rem] mx-[2rem] justify-center mb-[2rem]">
          <div></div>
          {allProducts.map((item) => {
            return (
              <div
                key={item._id}
                className=" xsm:hover:cursor-pointer xsm:border-[2px] xsm:w-[9rem] sm:w-[15rem] xsm:m-2 "
              >
                <Link href={`${item._id}`}>
                  <Image
                    src={item.product_img}
                    width={1200}
                    height={1200}
                    alt="product"
                    className="xsm:w-[9rem] xsm:h-[9rem] sm:w-[15rem] sm:h-[15rem]"
                  />
                  <div className="xsm:text-[10px] xsm:bg-white xsm:text-center xsm:items-center xsm:space-y-2 p-2 justify-items-center">
                    <div className="flex xsm:text-[11px] sm:text-[13px]">
                      {item.product_rating == 5 ? (
                        <>
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                        </>
                      ) : item.product_rating == 4 ? (
                        <>
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                        </>
                      ) : item.product_rating == 3 ? (
                        <>
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                        
                        </>
                      ) : item.product_rating == 2 ? (
                        <>
                          <IoIosStar />
                          <IoIosStar />
                        
                        </>
                      ) : item.product_rating == 1 ? (
                        <>
                          <IoIosStar />
                        
                        </>
                      ) : null}
                    </div>
                    <p className="xsm:text-[14px] sm:text-[16px]">
                      {item.product_title}
                    </p>
                    <p className="xsm:text-[11px] sm:text-[13px]">
                      price: {item.product_price}$
                    </p>                  </div>
                    </Link>
                    <div className="flex xsm:flex-col xsm:space-y-2 xsm:items-center bg-white sm:justify-between space-x-[1rem] p-2">
                      <div></div>
                      <button className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex  items-center hover:bg-[---c1]">
                        Buy Now
                        <FaShoppingBag className="xsm:text-[10px] sm:text-[12px] mx-1" />
                      </button>
                      <button onClick={()=>handleAddToCart(item)} className="font-black xsm:text-[10px] sm:text-[12px] bg-[---c2] p-2 sm:px-4 xsm:px-3 text-white rounded-[2rem] flex items-center hover:bg-[---c1]">
                        Add To Cart
                        <FaCartShopping className="xsm:text-[10px] sm:text-[12px] mx-1" />
                      </button>
                    </div>

              </div>
            );
          })}
          {allProducts.length == 0 ? (
            <div className="bg-[---c1] p-4 ">NO Product Add Product</div>
          ) : null}
        </div>
      </Fade>
    </>
  );
};

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
  const allProducts = await collection
    .find({ product_category: "men" })
    .toArray();

  return { props: { allProducts: JSON.parse(JSON.stringify(allProducts)) } };
}

export default Men;
