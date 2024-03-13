const productModel = require('../models/productModel')


exports.getProducts= async(req,res,next)=>{

 const productDatas = await productModel.find({})

   res.json({
    status:true,
    productDatas
   })
}
exports.singleProduct=(req,res,next)=>{
    res.json({
        status:false,
        message:"this is singleProduct function"
    })
}