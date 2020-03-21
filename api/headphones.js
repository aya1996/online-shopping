const express=require('express');

const dbProduct= require('../src/modules/headphones');
const route= express.Router();

route.post('/',async(req,res)=>{
   
console.log(req.body)
    const {name,price,img }=req.body;
    let headphone={};
    headphone.name=name;
    headphone.price=price;
    headphone.img=img;
   
    let headphoneModel=new dbProduct(headphone);
    await headphoneModel.save();
    res.json.toString(headphoneModel);
})
route.get('/', (req, res, next) => {
    dbProduct.find()
        .then(headphones => {
            res.status(200).json(headphones);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

module.exports=route;