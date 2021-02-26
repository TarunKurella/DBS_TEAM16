const express = require('express');
const mongoose = require('mongoose');
const bycrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const checkAuth = require('./middlewares/check-auth');
const usermodel=require('./models/user');
const body_parser = require('body-parser');
const app = express();
const dburl= "mongodb+srv://jahnavi:jahnavi597@cluster0.hdseo.mongodb.net/dbsdb?retryWrites=true&w=majority";
mongoose.connect(dburl,{useNewUrlParser: true, useUnifiedTopology: true},(err,resp)=>{
 if(err)
 console.log("Some error in connecting database!\n",err);
 else
 console.log("Connected to database!");
})
app.use(body_parser.json());
app.use((req,res,next)=>{
 res.setHeader("Access-Control-Allow-Origin","*");
 res.setHeader(
 "Access-Control-Allow-Headers",
 "Origin, X-Requested-With, Content-Type, Accept, authorization"
 );
 res.setHeader("Access-Control-AllowMethods","GET, POST, PATCH, PUT, DELETE, OPTIONS");
 next();
})





app.post('/users/register',(req,res)=>{
    usermodel.findOne({email:req.body.email},(err,found)=>{
        if(err)
        {
            console.log(err);
        }
        else if(found)
        {
            res.json({message:"user exists"});
        }
        else
        {
            bycrypt.hash(req.body.password,7,(err,hashedpassword)=>
    {
      //to save data to db
      //to create duplicate value of req.boy with unique id
      const variable=new usermodel({...req.body,
        password:hashedpassword});
      //to save to db
      variable.save((err,result)=>{
        if(err)
        {
          console.log("error occurred");
        }
        else{

          res.json({message:"signup successfull"});
        }
      });
    })
        }
    })
});



app.post('/users/login',(req,res)=>{

    usermodel.findOne({email:req.body.email},(err,found)=>
    {
        if(found)
        {
            bycrypt.compare(req.body.password,found.password,(err,success)=>{
                if(err)
                {
                     console.log(err);
                }
                else if(success)
                {
                    jwt.sign({email:found.email,name:found.name},'jahnavi',(err,signedtoken)=>{
                        res.json({message:"login success",email:found.email,signedtoken:signedtoken});
                    })
                }
                else
                {
                    res.json({message:"pwd not match"});
                }
            })
        }
        else
        {
            res.json({message:"user not found"});
        }
        
    })
})





module.exports= app;
