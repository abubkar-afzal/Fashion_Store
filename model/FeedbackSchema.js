
const mongoose = require('mongoose');
const {Schema} = mongoose;
//Schema of feedbacks
const feedbackSchema = Schema ({
    user_name: {type : String, index : true, required : true, default : ""},
    user_email: {type : String, index : true, required : true, default : ""},
    user_feedback: {type : String, index : true, required : true, default : ""},
    
})


export default mongoose.models.feedbacks || mongoose.model("feedbacks",feedbackSchema);