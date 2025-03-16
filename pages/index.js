import React from "react";
import Page1 from "./components/page1";
import { Fade } from "react-awesome-reveal";
import { MongoClient } from "mongodb";

export default function Home({ allNewCollection, bestFashion, bestSeller, men, women, kids, family,DealOfDay,Intro,allFeedbacks }) {
  return (
    <>
      <Fade duration={2000}>
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
