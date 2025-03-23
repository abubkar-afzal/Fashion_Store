import { MongoClient, ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSquareMinus } from "react-icons/fa6";

const OrderDetails = ({ details,setLoader }) => {
  const deleteOrder = async () => {
    setLoader(true)
    let d = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/deleteOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details._id),
    });
    let res = await d.json();
    setLoader(false)
    if (res.success == true) {
      openModal("Order Placed ..!!")
    } else {
      openModal("Order Not Placed ..!!")

    }
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
  return (
    <>
    <Popup open={open} closeOnDocumentClick onClose={closeModal} contentStyle={{ background: 'rgba(255, 255, 255, 0)', border: 'none', width:500,  }}  >
                    <div className="items-center text-center rounded-[2rem] bg-[---c1] xsm:mx-[2rem] sm:mx-[1px] ">
                      <h2 className=" text-black font-black p-4 rounded-[2rem] sm:text-[20px] xsm:text-[16px] m-4 ">{message}</h2>
                      <button onClick={closeModal} className="bg-[---c7] text-white font-black p-4 rounded-[1.5rem] sm:text-[20px] xsm:text-[14px] m-4">Ok..!!</button>
                    </div>
                  </Popup>
      <div  className={`${open  ? "blurred-background":null} justify-items-center space-y-[1rem] xsm:my-[5rem] sm:mt-[1px] sm:mb-[5rem] min-h-screen content-center overflow-y-scroll hideBar text-white bg-[---blur] m-[2rem] py-[1rem] rounded-[2rem] `}>
        <div className="xsm:text-[25px] sm:text-[35px] font-black ">
          !!~~Order Details~~!!
        </div>

        <div className="xsm:text-[16px] sm:text-[20px] py-2 font-black">
          Buyer Name: {details.user_name}
        </div>
        <div className="xsm:text-[16px] sm:text-[20px] py-2 font-black">
          Buyer Email: {details.user_email}
        </div>
        <div className="xsm:text-[16px] sm:text-[20px] py-2 font-black">
          Buyer Phone: {details.user_phone}
        </div>
        <div className="xsm:text-[16px] sm:text-[20px] py-2 font-black">
          Buyer Address: {details.user_address}
        </div>
        <div className="xsm:text-[16px] sm:text-[20px] py-2 font-black">
          Buyer Post Code: {details.user_post_code}
        </div>
        {details.orders.items.map((item) => {
          return (
            <div
              key={item._id}
              className="  xsm:mt-[1rem] sm:mt-[2rem] cursor-pointer shadow-lg px-[1rem] rounded-[1rem] justify-items-center   "
            >
              <div className=" xsm:w-[30%] overflow-scroll hideBar">
                <p className="xsm:text-[16px] sm:text-[20px] py-2 font-arial">
                  Item Id: {item._id}
                </p>
              </div>
              <div className=" ">
                <p className="xsm:text-[16px] sm:text-[20px] py-2 font-arial">
                  Item Color: {item.order_color}
                </p>
              </div>
              <div className=" ">
                <p className="xsm:text-[16px] sm:text-[20px] py-2 font-arial">
                  Item Size: {item.order_size}
                </p>
              </div>

              <div className=" ">
                <p className="xsm:text-[16px] sm:text-[20px] py-2 font-arial">
                  Item Category: {item.order_category}
                </p>
              </div>
              <div className=" place-items-end">
                <Image
                  width={500}
                  height={500}
                  alt="order item image"
                  src={item.order_img}
                  className="xsm:w-[200px] xsm:h-[200px] sm:w-[300px] sm:h-[300px] font-arial"
                />
              </div>

              <div className=" ">
                <p className="xsm:text-[16px] sm:text-[20px] py-2 font-arial">
                  Item Price: ${item.order_price}
                </p>
              </div>

              <div className=" ">
                <p className="xsm:text-[16px] sm:text-[20px] py-2 font-arial">
                  Item Deliver Quantity: {item.order_quantity}
                </p>
              </div>
              <div className=" ">
                <p className="xsm:text-[16px] sm:text-[20px] py-2 font-arial break-words px-2">
                  Item Pick From Which Page: {item.order_display_page_place}
                </p>
              </div>
              <div></div>
            </div>
          );
        })}
        <div className=" place-items-end">
          <Link href={`${process.env.NEXT_PUBLIC_HOST}/components/admin/allOrders`}><button onClick={deleteOrder} className="flex xsm:text-[18px] sm:text-[22px]  items-center font-black bg-[---c8] hover:bg-[---h8] px-[1rem] py-[10px] text-white  rounded-[2rem]">
            Placed
            <FaSquareMinus className="mx-2" />
          </button></Link>
        </div>
      </div>
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
  const collection = database.collection("orders");
  const OrderId = new ObjectId(context.params.slug);
  const details = await collection.findOne({ _id: OrderId });

  return {
    props: {
      details: JSON.parse(JSON.stringify(details)),
    },
  };
}

export default OrderDetails;
