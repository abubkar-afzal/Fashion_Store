import ProductSchema from "@/model/ProductSchema";
import { MongoClient } from "mongodb";


export default async function handler(req, res) {
  if (req.method === "POST") {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //Data
    let product = new ProductSchema(req.body);
    product.save()
    console.log(typeof(product.product_id))

    try {
      await client.connect();

      // Choose a name for your database
      const database = client.db("fashion_store");

      // Choose a name for your collection
      const collection = database.collection("products");

      const data = await collection.findOneAndReplace({ product_id: product.product_id }, {
        product_id: product.product_id,
        product_title: product.product_title,
        product_img: product.product_img,
        product_desc: product.product_desc,
        product_category: product.product_category,
        product_price: product.product_price,
        product_color: product.product_color,
        product_size: product.product_size,
        product_quantity: product.product_quantity,
        product_trend: product.product_trend,
        product_rating: product.product_rating,
        product_display_page_place: product.product_display_page_place,
        product_display_page_title: product.product_display_page_title,
        product_display_page_desc: product.product_display_page_desc
      }, { new: true });
      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong!" }, error);
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}


