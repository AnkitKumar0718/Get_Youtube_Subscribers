const express=require('express')
const app=express();

const path=require('path')
app.use(express.json());

const schema=require('./models/subscribers.js');

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.get('/subscribers',async(req,res)=>{
    try{
        const data=await schema.find();
        console.log("data fetched")
        res.status(200).json(data); 
    }
    catch(err){
        res.status(400);
        res.send(err);
    }
})

app.get('/subscribers/names',async(req,res)=>{
    try{
        const data=await schema.find({},{name:1,subscribedChannel:1,_id:0})
        res.status(200).json(data);
    }
    catch(err){
        res.status(400)
        res.send(err);
    }
})

app.get('/subscribers/:id',async(req,res)=>{
    try{
    const id = req.params.id; 
    if (!id) {
      res.status(400).json({ message: "No ID provided" }); 
      return;
    }
    const subscriber = await schema.findById(id);
    if (!subscriber) {
      res.status(404).json({ message: "Subscriber not found" }); 
      return;
    }
    res.send(subscriber); 
  }
   catch (error) {
    res.status(400).json({ message: error.message }); 
  }

})

app.use((req, res) => {
    res.status(404).json({ message: "Error - Route not found" }); 
  });

module.exports=app;