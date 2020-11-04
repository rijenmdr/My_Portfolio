const express=require('express');

const contactController=require('./contactController');

const route=express.Router();

route.post('/contact',contactController.postContact)

module.exports=route;