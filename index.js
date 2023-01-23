const express=require('express');
const cors=require('cors');
const userroute=require('./routers/user');

const app=express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/user',userroute);

module.exports=app;