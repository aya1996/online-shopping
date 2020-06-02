const express=require('express');
const mongoose=require('mongoose');
const dbUser= require('../src/modules/users');
const route= express.Router();

route.post('/',async(req,res)=>{
    const {username,email,age ,password,gender,img}=req.body;
    let user={};
    user.username=username;
    user.email=email;
    user.age=age;
    user.password=password;
    user.gender=gender;
    user.img=img;
    let userModel=new dbUser(user);
    await userModel.save();
    res.json(userModel);
})
route.get('/', (req, res, next) => {
    dbUser.find()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});
module.exports=route;