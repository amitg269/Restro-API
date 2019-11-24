var express=require('express');
var app=express();
var router=express.Router();
var middleWare=require('.././MiddleWare/Middleware.js')
const bodyParser = require('body-parser');
var JWTModule=require("../MiddleWare/JWTAuth/JWTTokenAuth.js")
var portEnv=require('./../Enum.js')
var Genresponse=require('../Common/Response.js');
app.use(bodyParser.json())

const RequestDecryption=(req,res,next)=> {
    var data=middleWare.RequestDecryption();
    console.log(data);
    next();
}

const ResponseEncryption=(req,res,next)=> {
    var data=middleWare.ResponseEncryption();
    console.log("this line should be seen in github");
    console.log("this line should be seen in github1");
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(res.body));
}

app.use(RequestDecryption);

app.post(portEnv.APIURL.CreateToken,function(req,res,next){
    var requestBody=req.body;
    var header=req.headers.appid;
    var data=JWTModule.CreateToken(requestBody,header);
    res.body=Genresponse.createResponse(data,portEnv.ReturnCode.Success,portEnv.ReturnMsg.Success);
    next();
});


app.use(ResponseEncryption);
app.listen(portEnv.Port);