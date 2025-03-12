import { MongoClient } from "mongodb";

    
export default async function handler(req, res) {
    if (req.method === "POST") {
      const client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      //Data
        let order = req.body;
        
        console.log(req.body)
      try { 
        await client.connect();
  
        // Choose a name for your database
        const database = client.db("fashion_store");
  
        // Choose a name for your collection
        const collection = database.collection("orders");
  
        await collection.findOneAndDelete(order);
  
        res.status(201).json({success:true});
      } catch (error) {
        res.status(500).json({ message: "Something went wrong!" }, error);
      } finally {
        await client.close();
      }
    } else {
      res.status(405).json({ message: "Method not allowed!" });
    }
  }
  
  
  