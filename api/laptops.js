const express=require('express');

const dbProduct= require('../src/modules/laptops');
const route= express.Router();

route.post('/',async(req,res)=>{
   
console.log(req.body)
    const {name,price,img }=req.body;
    let laptop={};
    laptop.name=name;
    laptop.price=price;
    laptop.img=img;
   
    let laptopModel=new dbProduct(laptop);
    await laptopModel.save();
    res.json.toString(laptopModel);
})
route.get('/', (req, res, next) => {
    dbProduct.find()
        .then(laptops => {
            res.status(200).json(laptops);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

module.exports=route;