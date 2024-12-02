const express = require('express');
const mongoose = require("mongoose")
require('dotenv').config();
const cors = require('cors')
const {userModel} = require('./db')
const app = express();

app.use(express.json())
app.use(cors());

app.post('/', async function(req,res){
    const { name, phoneNumber, location, treatment } = req.body;
    const userdetails = await userModel.create({
        name: name,
        phoneNumber: phoneNumber,
        location: location,
        treatment: treatment
    })
    res.json({
        message: "care connect",
        userdetails
    })
});

const PORT = 3000;

async function main () {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(PORT);
    console.log("port started");
}
main();