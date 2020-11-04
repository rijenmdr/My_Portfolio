const { timeStamp } = require('console');
const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const contactSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timeStamp:true});

module.exports=mongoose.model('contact',contactSchema);