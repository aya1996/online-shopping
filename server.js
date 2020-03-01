// to create server on the machine and run it using node js

const express=require('express');
const cors=require('cors');
const app=express();
require('./db')
const hostname='127.0.0.1';
const port=process.env.port||3000
app.use(express.json({extended:false}))
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,PATCH, DELETE');
    res.setHeader('Access-Control-Alnlow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });
app.use('/api/userModel',require('./api/user'));
app.use(cors());
app.use('/api/productModel',require('./api/product'));
console.log("in the server page")
app.use('/getPro',require('./api/product'));
app.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`)
})