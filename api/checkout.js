const express=require('express');

const dbProduct= require('../src/modules/checkout');
const route= express.Router();

route.post('/',async(req,res)=>{
   
console.log(req.body)
    const {name,email,address,city,state,zip }=req.body;
    let checkout={};
    checkout.name=name;
    checkout.email=email;
    checkout.address=address;
    checkout.city=city;
    checkout.state=state;
    checkout.zip=zip;
   
    let checkoutModel=new dbProduct(checkout);
    await checkoutModel.save();
    res.json.toString(checkoutModel);
})
route.get('/', (req, res, next) => {
    dbProduct.find()
        .then(checkouts=> {
            res.status(200).json(checkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

module.exports=route;