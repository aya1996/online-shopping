// to create server on the machine and run it using node js

const express=require('express');
const app=express();
require('./db')
const hostname='127.0.0.1';
const port=process.env.port||3000
app.use(express.json({extended:false}))
app.use('/api/userModel',require('./api/user'));
app.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`)
})