import React from "react";
import Page1 from "./components/page1";
import { Fade } from "react-awesome-reveal";
import { MongoClient } from "mongodb";

export default function Home({ allNewCollection,bestFashion }) {
  return (
    <>
      <Fade duration={2000}>
        <Page1 allNewCollection={allNewCollection} bestFashion={bestFashion}/>
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
  const allNewCollection = await collection
    .find({ product_display_page_place: "new_collection" })
    .toArray();
    const bestFashion = await collection
    .find({ product_display_page_place: "best_fashion" })
    .toArray();
  return {
    props: { allNewCollection: JSON.parse(JSON.stringify(allNewCollection)),bestFashion: JSON.parse(JSON.stringify(bestFashion)) },
  };
}
