const express=require('express');

const dbProduct= require('../src/modules/phones');
const route= express.Router();

route.post('/',async(req,res)=>{
   
console.log(req.body)
    const {name,price,img }=req.body;
    let phone={};
    phone.name=name;
    phone.price=price;
    phone.img=img;
   
    let phoneModel=new dbProduct(phone);
    await phoneModel.save();
    res.json.toString(phoneModel);
})
route.get('/', (req, res, next) => {
    dbProduct.find()
        .then(phones => {
            res.status(200).json(phones);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

module.exports=route;