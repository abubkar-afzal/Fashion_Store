

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
            const collection = database.collection("admin");
            
            let secret = req.body.secret;
            let admin = await collection.find().toArray();
            let login = admin.map(p=>p.secret).toString();
            
            if(login){
                
                    if(login===secret){
                        res.status(201).json({success:true});
                    }else{
                        res.status(400).json({success:false});
                       
                    }
                
            }else{
                console.warn("no admin exisit")
            }

            
            res.status(200).json(login);
        
    } else {
        res.status(405).json({ message: "Method not allowed!" });
    }
}