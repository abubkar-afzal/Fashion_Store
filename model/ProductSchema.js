
const mongoose = require('mongoose');
const {Schema} = mongoose;
//Schema of product
const productSchema = Schema ({
    product_id: {type : Number, index : true, required : true, default: 0 },
    product_title: {type : String, index : true, required : true, default : ""},
    product_img: {type : String, index : true, required : true, default : ""},
    product_desc: {type : String, index : true, required : true, default : ""},
    product_category: {type : String, index : true, required : true, default : ""},
    product_price: {type : Number, index : true, required : true, default : 0},
    product_color: {type : String, index : true, required : true, default : ""},
    product_size: {type : String, index : true, required : true, default : ""},
    product_quantity: {type : Number, index : true, required : true, default : 0},
    product_trend: {type : String, index : true, required : true, default : "no"},
    product_rating: {type : Number, index : true, required : true, default : 0},

})


export default mongoose.models.products || mongoose.model("products",productSchema);