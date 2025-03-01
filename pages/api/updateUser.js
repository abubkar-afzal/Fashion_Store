import { MongoClient } from "mongodb";
var jwt = require("jsonwebtoken");

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
      const collection = database.collection("users");
      const name = req.body.user_name;

      const password = req.body.user_password;
      const phone = parseInt(req.body.user_phone);
      const address = req.body.user_address;
      const post_code = req.body.user_post_code;
      const email = req.body.user_email;
      const photo = req.body.user_photo;

     
      var token = jwt.sign(
        {
      
          email: email,
          name: name,
          password: password,
          phone: phone,
          address: address,
          post_code: post_code,
          
          photo: photo,
        },
        process.env.JWTSECRET,
        { expiresIn: "30d" }
      );
      await collection.findOneAndReplace(
        { user_email: email },
        {
          
          user_email: email,
          user_name: name,
          user_password: password,
          user_phone: phone,
          user_address: address,
          user_post_code: post_code,
          user_photo: photo,
        },
        { new: true }
      );

      res.status(201).json({ success: true, token });
    } catch (error) {
      res.status(201).json({ success: false });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
