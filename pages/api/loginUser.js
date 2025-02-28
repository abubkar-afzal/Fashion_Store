import { MongoClient } from "mongodb";
var jwt = require("jsonwebtoken");

    
export default async function handler(req, res) {
    if (req.method === "POST") {
      const client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      //Data
        
      
      try { 
        await client.connect();
  
        // Choose a name for your database
        const database = client.db("fashion_store");
  
        // Choose a name for your collection
        const collection = database.collection("users");
  
        let Login = await collection.findOne(req.body);
        if(Login !== null){
         
          var token = jwt.sign(
            {
              _id: Login._id,
              email: Login.user_email,
              name: Login.user_name,
              password: Login.user_password,
              phone: Login.user_phone,
              address: Login.user_address,
              postCode: Login.user_post_code,
              photo: Login.user_photo,
            },
            process.env.JWTSECRET,
            { expiresIn: "30d" }
          ) 
          res.status(201).json({login:true, token});
        }else{
        res.status(201).json({login:false});

        }
      } catch (error) {
        res.status(500).json({ message: "Something went wrong!" }, error);
      } finally {
        await client.close();
      }
    } else {
      res.status(405).json({ message: "Method not allowed!" });
    }
  }
  
  
  