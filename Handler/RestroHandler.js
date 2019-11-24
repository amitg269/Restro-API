var express=require('express');
var app=express();
var router=express.Router();
var middleWARE=require('.././MiddleWare/Middleware.js');
const bodyParser = require('body-parser');
var portEnv=require('./../Enum.js');
var Genresponse=require('../Common/Response.js');

app.use(bodyParser.json())

const TokenAuth=(req,res,next)=>{
    var data=middleWARE.JWTAuth(req);
    if(data.Result==true){
        next();
    }
    else{
        res.body=Genresponse.createResponse(null,portEnv.ReturnCode.Fail,data.message);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(res.body));
    }
   
}

const RequestDecryption=(req,res,next)=>{
    console.log("Request Decryption");
    next();
}
const ResponseEncryption=(req,res,next)=>{
    console.log("Response Encrytion");
    res.send("Response Encrytion");   
}

app.use(TokenAuth);
app.use(RequestDecryption);

app.get('/default',function(req,res,next){
    console.log("API CALLED");
    next();      
});

app.all("/",function(req,res,next){
    res.send("This All Default"); 
});

app.use('/',router)
app.use(ResponseEncryption);
app.listen(portEnv.Port);