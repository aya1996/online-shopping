const express=require('express');
const mongoose=require('mongoose');
const dbProduct= require('../src/modules/products');
const route= express.Router();

// console.log('server file')

 
route.post('/',async(req,res)=>{
    console.log("in the post function")
console.log(req.body)
    const {name,price,img }=req.body;
    let product={};
    product.name=name;
    product.price=price;
    product.img=img;
   
    let productModel=new dbProduct(product);
    await productModel.save();
    res.json(productModel);
})
route.get('/',async (req,res)=>{
    console.log('in the back')
    const allproducts = await dbProduct.find({});
    res.json(allproducts);


})
module.exports=route;