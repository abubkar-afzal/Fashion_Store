

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const client = new MongoClient(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        try {           

            await client.connect();

            // Choose a name for your database
            const database = client.db("fashion_store");

            // Choose a name for your collection
            const collection = database.collection("admin");
            const oldSecret = req.body.oldSecret;
            const newSecret = req.body.newSecret;
            const newPassword = req.body.newPassword;

            const update = await collection.findOneAndReplace({secret:oldSecret},{secret:newSecret,password:newPassword},{new:true});
            
            
            res.status(201).json({success:true});
            
        } catch (error) {
            res.status(500).json({ message: "Something went wrong!" });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: "Method not allowed!" });
    }
}