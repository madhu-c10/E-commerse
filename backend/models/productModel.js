const mongoose = require("mongoose");

const productSchma = new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    rating:String,
    images:[
        {
            image:String
        }
    ],
    category:String,
    seller:String,
    stock:String,
    numOfReview:String,
    createdDate:Date
})

const productModel = mongoose.model('product',productSchma)

module.exports = productModel