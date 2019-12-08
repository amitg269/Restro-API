var express=require('express');
var app=express();
const viewErrorInfo=require('../Common/Response.js');
const bodyParser = require('body-parser');
const createResponse=require('../Common/Response.js');
const Enum=require('../Enum.js');
app.use(bodyParser.json())



app.post("/viewerrors",function(req,res,next){

   var response;
    var data=viewErrorInfo.viewErros();
    if(data.Success==true && data.Data!="")
    {
        response= createResponse.createResponse(data.Data,Enum.ReturnCode.Success,Enum.ReturnMsg.Success);
    }
    else if(data.Success==true && data.Data==""){
        response= createResponse.createResponse(data.Data,Enum.ReturnCode.NoRecordFound,Enum.ReturnMsg.NoRecordFound);
    }
    else if(data.Success==false && data.Data==""){
        response= createResponse.createResponse(data.Data,Enum.ReturnCode.Exception,Enum.ReturnMsg.Exception);
    }
    res.body=response;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(res.body));
   
});

app.post("/infologs",function(req,res,next){

    var response;
    var data=viewErrorInfo.viewInfo();
    if(data.Success==true && data.Data!="")
    {
        response= createResponse.createResponse(data.Data,Enum.ReturnCode.Success,Enum.ReturnMsg.Success);
    }
    else if(data.Success==true && data.Data==""){
        response= createResponse.createResponse(data.Data,Enum.ReturnCode.NoRecordFound,Enum.ReturnMsg.NoRecordFound);
    }
    else if(data.Success==false && data.Data==""){
        response= createResponse.createResponse(data.Data,Enum.ReturnCode.Exception,Enum.ReturnMsg.Exception);
    }
    res.body=response;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(res.body));
   
});



module.exports = app;
