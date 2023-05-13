const express=require("express");
const morgan = require("morgan");
const app=express();

const db={
    123:"Utkarsh",
    567:"Rahul",
    873:"Shrey"
}

app.get("/",function(req,res){
    res.send("Express js backend http endpoint is ready !!!");
});

app.get("/name",function(req,res){
    res.send("Express js backend http endpoint is ready! Name: Harshit Raj");
})

app.get(/^\/users\/(\d+)$/,function(req,res){
    const userId=req.params[0];
    const UserDetails=db[userId]; 
    res.send(`Hello from ${UserDetails}`);
})

app.listen(8000,()=>{
    console.log("Application is listening on port 8000");
})