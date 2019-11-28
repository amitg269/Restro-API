var JWTOBJ=require('jsonwebtoken');
const fs   = require('fs');
var prop=require('./../../Enum.js');
var exports = module.exports={};
var Logger=require('../../Logger.js');

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
    var payload={AppId:AppId, UserName:req.Username};
    var Token=JWTOBJ.sign(payload,privateKEY,signOptions);
    var TokenOject={};
    TokenOject.Token=Token;
    Logger.infoLogger("CreateToken","JWT","Test","Token Created for "+req.Username);
    return TokenOject;
}


exports.VerifyToken=(Token)=>{
    var Legit = JWTOBJ.verify(Token, publicKEY, verifyOptions);
    return Legit;
}
