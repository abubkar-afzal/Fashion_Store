
const mongoose = require('mongoose');
const {Schema} = mongoose;
//Schema of order
const orderSchema = Schema ({
    orders:{ items:[{
    order_id: {type : Number, index : true, required : true, default: 0 },
    order_title: {type : String, index : true, required : true, default : ""},
    order_img: {type : String, index : true, required : true, default : ""},
    order_desc: {type : String, index : true, required : true, default : ""},
    order_category: {type : String, index : true, required : true, default : ""},
    order_price: {type : Number, index : true, required : true, default : 0},
    order_color: {type : String, index : true, required : true, default : ""},
    order_size: {type : String, index : true, required : true, default : ""},
    order_quantity: {type : Number, index : true, required : true, default : 0},
    order_trend: {type : String, index : true, required : true, default : "no"},
    order_rating: {type : Number, index : true, required : true, default : 0},
    order_display_page_place: {type : String, index : true, required : true,  default : "all"},
    order_display_page_title: {type : String, index : true, required : true,  default : ""},
    order_display_page_desc: {type : String, index : true, required : true,  default : ""}}]
},
    user_name: {type : String, index : true, required : true, default : ""},
    user_email: {type : String, index : true, required : true, default : ""},
    user_phone: {type : Number, index : true, required : true, default : ""},
    user_address: {type : String, index : true, required : true, default : ""},
    user_post_code: {type : Number, index : true, required : true, default : 0}, 
    
})


export default mongoose.models.orders || mongoose.model("orders",orderSchema);