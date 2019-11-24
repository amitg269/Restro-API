var exports = module.exports = {};
var JWTObj=require("../MiddleWare/JWTAuth/JWTTokenAuth.js");
var ConsEnum=require("../Enum.js")

exports.JWTAuth=(req)=>{
    var TokenAuth={};
   try{
        let token = req.headers['x-access-token'] || req.headers['authorization'];
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
            var data=JWTObj.VerifyToken(token);
            TokenAuth.message="Success";
            TokenAuth.Result=true; 
        }
        else{
            TokenAuth.message=ConsEnum.ReturnMsg.NoToken;
            TokenAuth.Result=false;           
        }
   }
   catch(e){
    TokenAuth.message=e.message;
    TokenAuth.Result=false;
   }

   return  TokenAuth;

}

exports.RequestDecryption=(req)=>{
    return "Request Decrytption";
}

exports.ResponseEncryption=(req)=>{
    return "Response Encryption";
}
