const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');


const contactRouter=require('./contactRouter')

const app=express();


const MONGO_DB_CONNECT='mongodb+srv://rijen:rijensayami00438@cluster0.dp2qi.mongodb.net/portfolio?retryWrites=true&w=majority'



app.use(bodyParser.json());
app.use(cors());

app.post('/contact',contactRouter);


mongoose.connect(MONGO_DB_CONNECT)
.then(res=>{
  app.listen(5000);
})
.catch(err=>{
    console.log(err);
})



