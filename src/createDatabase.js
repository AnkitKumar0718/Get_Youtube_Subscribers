const mongoose=require('mongoose');

const data=require('./data.js');

const subscriberModel=require('./models/subscribers.js')
require('dotenv').config();

const Mongo_Uri=process.env.MONGO_URI;
  
mongoose.connect(Mongo_Uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
    newRecords();
}).catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});

async function newRecords() {
    try {
        await subscriberModel.deleteMany({});
        await subscriberModel.insertMany(data);
        console.log("Data insertion successful");
    } catch (error) {
        console.error("Error inserting data:", error);
    }
}
