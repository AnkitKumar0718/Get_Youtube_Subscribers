const express=require('express');

const connectDB=require('./createDatabase.js')
const app=require('./app.js');

 const dotenv=require('dotenv');
 dotenv.config();
const port=process.env.PORT || 4001

 app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
 })