var JWTOBJ=require('jsonwebtoken');
const fs   = require('fs');
var prop=require('./../../Enum.js');
var exports = module.exports={};
var Logger=require('../../Logger.js');
var Genresponse=require('../../Common/Response.js');
var enums=require('../../Enum.js');

var signOptions = {
    issuer:  prop.Issuer,
    subject:  prop.Subject,
    audience:  prop.Audience,
    expiresIn:  "24h",
    algorithm:  "RS256"
   };

   var verifyOptions = {
    issuer:  prop.Issuer,
    subject:  prop.Subject,
    audience:  prop.Audience,
    expiresIn:  "24h",
    algorithm:  ["RS256"]
   };

// PRIVATE and PUBLIC key
var privateKEY  = fs.readFileSync('Keys/private.key', 'utf8');
var publicKEY  = fs.readFileSync('Keys/public.key', 'utf8');

exports.CreateToken=(req,AppId)=>{ 
    var data;
    try {
        var payload={AppId:AppId, UserName:req.Username};
        var Token=JWTOBJ.sign(payload,privateKEY,signOptions);   
        data=Genresponse.createResponse(Token,enums.ReturnCode.Success,enums.ReturnMsg.Success);
        Logger.infoLogger("CreateToken","JWT","Test","Token Created for "+req.Username);        
    } catch (error) {
         data=Genresponse.createResponse(null,enums.ReturnCode.Exception,"Failed");
         Logger.errorLogger("CreateToken","JWTTokenAuth.js",error.stack,"Token creation failed for"+req.Username);
    }
    return data;
}


exports.VerifyToken=(Token)=>{
    var Legit = JWTOBJ.verify(Token, publicKEY, verifyOptions);
    return Legit;
}
