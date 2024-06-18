const mongoose=require('mongoose');

const data=require('./data.js');

const subscriberModel=require('./models/subscribers.js')
  
mongoose.connect("mongodb://127.0.0.1:27017/subscribersDB")
.then(()=>{
    console.log("connected sucessfully")
})
.catch((err)=>{
    console.log(err)
})
    
async function newRecords(){
   await subscriberModel.deleteMany({});
   await subscriberModel.insertMany(data);
   console.log("inserted");
} 

newRecords();

