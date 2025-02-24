
const mongoose = require('mongoose');
const {Schema} = mongoose;
//Schema of user
const userSchema = Schema ({
    user_name: {type : String, index : true, required : true, default : ""},
    user_email: {type : String, index : true, required : true, default : ""},
    user_password: {type : String, index : true, required : true, default : ""},
    user_phone: {type : Number, index : true, required : true, default : ""},
    user_address: {type : String, index : true, required : true, default : ""},
    user_post_code: {type : Number, index : true, required : true, default : 0},
})


export default mongoose.models.users || mongoose.model("users",userSchema);