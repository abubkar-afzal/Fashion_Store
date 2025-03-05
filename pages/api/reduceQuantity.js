import ProductSchema from "@/model/ProductSchema";
import { MongoClient, ObjectId } from "mongodb";
const jwt = require('jsonwebtoken');

export default async function handler(req, res) {
  if (req.method === "POST") {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Data
    let products = req.body.map((item) => new ProductSchema(item));
   

    try {
      await client.connect();

      // Choose a name for your database
      const database = client.db("fashion_store");

      // Choose a name for your collections
      const collection = database.collection("products");
      const orders = database.collection("orders");

      // Array to store product IDs of successfully added products
      const successfulProductIds = [];
        
      // Process each product in the request body
      for (let product of products) {
        const productId = new ObjectId(product._id);
        const existingProduct = await collection.findOne({ _id: productId });

        if (!existingProduct) {
          return res.status(404).json({ message: `Product with ID ${product._id} not found!` });
        }

        // Subtract the quantity
        const remainingQuantity = existingProduct.product_quantity - product.product_quantity;

        if (remainingQuantity <= 0) {
          return res.status(400).json({ message: `Not enough quantity for product ID ${product._id}!` });
        }

        // Update the product quantity in the database
        const updateDoc = {
          $set: {
            product_quantity: remainingQuantity,
        
          },
        };

        const updateResult = await collection.updateOne({ _id: productId }, updateDoc);
        const insertResult = await orders.insertOne(product);
        successfulProductIds.push(productId);
      }

      const token = jwt.sign({ productIds: successfulProductIds }, process.env.JWTSECRET, { expiresIn: '30d' });
      res.status(201).json({ message: "All products processed successfully.", token });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong!", error });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
