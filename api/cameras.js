const express=require('express');

const dbProduct= require('../src/modules/cameras');
const route= express.Router();

route.post('/',async(req,res)=>{
   
console.log(req.body)
    const {name,price,img }=req.body;
    let camera={};
    camera.name=name;
    camera.price=price;
    camera.img=img;
   
    let cameraModel=new dbProduct(camera);
    await cameraModel.save();
    res.json.toString(cameraModel);
})
route.get('/', (req, res, next) => {
    dbProduct.find()
        .then(cameras => {
            res.status(200).json(cameras);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

module.exports=route;