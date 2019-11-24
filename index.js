var express=require('express');
var app=express();
var port=process.env.PORT || 80;

app.get("/",function(req,res){
    res.send("I changed the line Test")
})

app.get("/hero",function(req,res){
    res.send("I changed the line Test")
})

app.listen(port);