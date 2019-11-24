var express=require('express');
var app=express();
var router=express.Router();
var middleWare=require('.././MiddleWare/Middleware.js')
const bodyParser = require('body-parser');
var JWTModule=require("../MiddleWare/JWTAuth/JWTTokenAuth.js")
var portEnv=require('./../Enum.js')
var Genresponse=require('../Common/Response.js');
app.use(bodyParser.json())

var port=process.env.PORT || portEnv.Port

const RequestDecryption=(req,res,next)=> {
    var data=middleWare.RequestDecryption();
    next();
}

const ResponseEncryption=(req,res,next)=> {
    var data=middleWare.ResponseEncryption();
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(res.body));
}

app.use(RequestDecryption);

//*API Section */

app.post(portEnv.APIURL.CreateToken,function(req,res,next){
    var requestBody=req.body;
    var header=req.headers.appid;
    var data=JWTModule.CreateToken(requestBody,header);
    res.body=Genresponse.createResponse(data,portEnv.ReturnCode.Success,portEnv.ReturnMsg.Success);
    next();
});


//*API Section */

app.use(ResponseEncryption);
app.listen(port);