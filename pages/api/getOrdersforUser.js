

import { MongoClient } from "mongodb";
var jwt = require('jsonwebtoken');

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
            const collection = database.collection("orders");
            
            const Usertoken = req.body.userToken;
            const Userdata = jwt.verify(Usertoken, process.env.JWTSECRET)
            let FromUserEmail = await collection.find({"user_email":Userdata.email}).toArray();
            if(FromUserEmail){
                res.status(200).json({success : true, FromUserEmail})
               
            }else{
                res.status(200).json({success : false})

            }

            
        
    } else {
        res.status(405).json({ message: "Method not allowed!" });
    }
}