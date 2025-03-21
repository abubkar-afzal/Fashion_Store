import React, { useEffect, useState } from "react";
import Page1 from "./components/page1";
import { Fade } from "react-awesome-reveal";
import { MongoClient } from "mongodb";
import Popup from "reactjs-popup";

export default function Home({ allNewCollection, bestFashion, bestSeller, men, women, kids, family,DealOfDay,Intro,allFeedbacks,checkloginornot,setLoader }) {
  const [open, setOpen] = useState(false);
  const [message, setmessage] = useState("");

    useEffect(() => {
      if(!localStorage.getItem("Fashion_Store")){
          setOpen(true)
        }
    }, [])
    
    const closeModal = () => {setOpen(false) 
     
    };
  if(open  == true){
    document.body.style.overflow = "hidden";
   
}else{
    document.body.style.overflow = "auto";
   
}
  return (
    <>
    <Popup open={open} closeOnDocumentClick onClose={closeModal} contentStyle={{ background: 'rgba(255, 255, 255, 0)', border: 'none', width:500,  }}  >
              <div className="items-center text-center rounded-[2rem] bg-[---c1] xsm:mx-[2rem] sm:mx-[1px] shadow-lg">
              <video className="w-full rounded-[2rem]" autoPlay controls src="/buy.mp4" type="video/mp4">

Your browser does not support the video tag
</video>
                <h2 className=" text-black font-black p-4 rounded-[2rem] sm:text-[20px] xsm:text-[16px] m-4 ">This is Tutorial That How to Buy First Time ..!!</h2>
                <button onClick={closeModal} className="bg-[---c7] text-white font-black p-4 rounded-[1.5rem] sm:text-[20px] xsm:text-[14px] m-4">Ok..!!</button>
              </div>
            </Popup>
      <Fade duration={2000} className={`${open  ? "blurred-background":null}`}>
        <Page1
          allNewCollection={allNewCollection}
          bestFashion={bestFashion}
          bestSeller={bestSeller}
          men={men}
          women={women}
          kids={kids}
          family={family}
          DealOfDay={DealOfDay}
          Intro={Intro}
          allFeedbacks={allFeedbacks}
          checkloginornot={checkloginornot}
          setLoader={setLoader}
        />
      </Fade>
    </>
  );
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
  const feedbacks = database.collection("feedbacks");
  const allFeedbacks = await feedbacks.find({}).toArray();
  const allNewCollection = await collection
    .find({ product_display_page_place: "new_collection" })
    .toArray();
  const bestFashion = await collection
    .find({ product_display_page_place: "best_fashion" })
    .toArray();
  const bestSeller = await collection
    .find({ product_display_page_place: "best_seller" })
    .toArray();
  const men = await collection
    .find({ product_category: "men" }).limit(4)
    .toArray();
  const women = await collection
    .find({ product_category: "women" }).limit(4)
    .toArray();
  const kids = await collection
    .find({ product_category: "kids" }).limit(4)
    .toArray();
  const family = await collection
    .find({ product_category: "family" }).limit(4)
    .toArray();
    const DealOfDay = await collection
    .find({ product_display_page_place: "deal_of_day" }).limit(1)
    .toArray();
    const Intro = await collection
    .find({})
    .toArray();
    
  return {
    props: {
      allNewCollection: JSON.parse(JSON.stringify(allNewCollection)),
      bestFashion: JSON.parse(JSON.stringify(bestFashion)),
      bestSeller: JSON.parse(JSON.stringify(bestSeller)),
      men: JSON.parse(JSON.stringify(men)),
      women: JSON.parse(JSON.stringify(women)),
      kids: JSON.parse(JSON.stringify(kids)),
      family: JSON.parse(JSON.stringify(family)),
      DealOfDay: JSON.parse(JSON.stringify(DealOfDay)),
      Intro: JSON.parse(JSON.stringify(Intro)),
      allFeedbacks: JSON.parse(JSON.stringify(allFeedbacks)),
    },
  };
}
