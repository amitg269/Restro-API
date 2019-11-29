var express=require('express');
var app=express();
var middleWare=require('.././MiddleWare/Middleware.js')
const bodyParser = require('body-parser');
var JWTModule=require("../MiddleWare/JWTAuth/JWTTokenAuth.js")
var portEnv=require('./../Enum.js')
var Genresponse=require('../Common/Response.js');
app.use(bodyParser.json())

var port=process.env.PORT || portEnv.Port

const RequestDecryption=(req,res,next)=> {
    var data=middleWare.RequestDecryption(req.body);
    req.body=data;
    next();
}

const ResponseEncryption=(req,res,next)=> {
    var data=middleWare.ResponseEncryption(JSON.stringify(res.body));
    res.body=data;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(res.body));
}

app.use(RequestDecryption);

//*API Section */

app.post(portEnv.APIURL.CreateToken,function(req,res,next){
    var requestBody=req.body;
    var header=req.headers.appid;
    var data=JWTModule.CreateToken(requestBody,header);
    res.body=data;
    next();
});

app.use(ResponseEncryption);

module.exports = app;

