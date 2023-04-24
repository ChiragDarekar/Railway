const express = require('express');
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/traininfo",{
    useNewUrlParser:true,useUnifiedTopology:true
},)
.then(() => console.log("connected successfully"))
.catch((err) => {console.error(err);});

const traininfoSchema = new mongoose.Schema({

});

const traininfo = new mongoose.model("traininfo",traininfoSchema);

const getDocument = async(req,res)=>{
    var result = await traininfo.find();
    app.get('/',(req,res)=>{
        res.send(`${result}`);
    })
}

getDocument(); 


app.listen(5000,()=>{console.log("connection listen")})