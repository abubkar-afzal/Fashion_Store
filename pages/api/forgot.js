

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const client = new MongoClient(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

               

            await client.connect();

            // Choose a name for your database
            const database = client.db("fashion_store");

            // Choose a name for your collection
            const collection = database.collection("users");
            
        
            
            
            let forgot = await collection.findOne({"user_email":req.body.email});
            
            if(forgot){
                res.status(200).json({success : true, forgot})
               
            }else{
                res.status(200).json({success : false})

            }

            
        
    } else {
        res.status(405).json({ message: "Method not allowed!" });
    }
}