require('dotenv').config();
const mongoose = require("mongoose");

const dbConnect = ()=>{
    const DB_URI= process.env.DB_URI;
    mongoose.connect(DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    },(err,res)=>{
        if (!err) {
            console.log('*** C0NEXIÓN CORRECTA ***');
        }else{
            console.log("*** ERROR DE C0NEXIÓN ***");
        }
    });
}
module.exports = dbConnect;