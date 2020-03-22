const express=require('express');

const dbProduct= require('../src/modules/cart');
const route= express.Router();

route.post('/',async(req,res)=>{
   
console.log(req.body)
    const {name,price,img }=req.body;
    let cart={};
    cart.name=name;
    cart.price=price;
    cart.img=img;
   
    let cartModel=new dbProduct(cart);
    await cartModel.save();
    res.json.toString(cartModel);
})
route.get('/', (req, res, next) => {
    dbProduct.find()
        .then(pcart => {
            res.status(200).json(pcart);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});
route.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    dbProduct.findByIdAndRemove(id)
        .then(deletedProduct => {
            res.status(200).json(deletedProduct)
        })
        .catch(err => {
            res.status(400).json(err);
        })
})


module.exports=route;