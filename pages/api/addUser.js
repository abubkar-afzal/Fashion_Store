import userSchema from "@/model/UserSchema";
import { MongoClient } from "mongodb";
const jwt = require("jsonwebtoken");


export default async function handler(req, res) {
  if (req.method === "POST") {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //Data
    let user = new userSchema(req.body);
    user.save()

    try {
      await client.connect();

      // Choose a name for your database
      const database = client.db("fashion_store");

      // Choose a name for your collection
      const collection = database.collection("users");

      let newUser = await collection.insertOne(user);
      let jwtToken = await collection.findOne({"user_email":user.user_email});
      var token = jwt.sign(
        {
          _id: jwtToken._id,
          email: jwtToken.user_email,
          name: jwtToken.user_name,
          password: jwtToken.user_password,
          phone: jwtToken.user_phone,
          address: jwtToken.user_address,
          postCode: jwtToken.user_post_code,
          photo: jwtToken.user_photo,
        },
        process.env.JWTSECRET,
        { expiresIn: "30d" }
      )
      res.status(201).json({ signup: true, token });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong!" }, error);
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}


