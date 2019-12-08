var express=require('express');
var app=express();
const viewErrorInfo=require('../Common/Response.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json())



app.post("/viewerrors",function(req,res,next){

    var data=viewErrorInfo.viewErros();
    res.body=data;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(res.body));
   
});



module.exports = app;
