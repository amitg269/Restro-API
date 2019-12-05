var CryptoJS = require("crypto-js");
const uuidv4 = require('uuid/v4');
const NodeRSA = require('node-rsa');
var chars ="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz*&-%/!?*+=()";
var exports=module.exports={};



const serverPrivatekey=new NodeRSA('-----BEGIN RSA PRIVATE KEY-----\n'+
'MIIBOAIBAAJAbvY7IpsSULILxmXKhT/ZYVZ5U1T/HRpJ/2Cq1aIyJSvzULsd4coN\n'+
'rnbsgIm+qVFAd0PRjYuOschhdFEmIet7BQIDAQABAkA7MkucC6S6vjG/90AS1FxR\n'+
'LIPvbBHp4cOGZXjeHfiokVUQkvlP0nfxZeLFeNkvpxW0ckbWqdhT4tmzO+km7gVh\n'+
'AiEAq+FB47iZJOXZkQ5PsJYCmKe5+sLKmxJLkA11VF8Ulk0CIQClRJSxZO7dyXU9\n'+
'FEI4txlXWjXeMexiz1fQw5/QAyXDmQIgG8K5GqehDIWXO0d9dX71EmTcs/SsNpmg\n'+
'3LZfwe3NbG0CIFy4PTPJDLohbET4OK7ZCr6XPeGK4LQO35WgKujo2ycBAiBsr9Cu\n'+
'zhxHHgMG/IU5MlJyPg4EhM3dQ2uSkgWTmxcrlg==\n'+
'-----END RSA PRIVATE KEY-----');

const clientPublicKey=new NodeRSA('-----BEGIN PUBLIC KEY-----\n'+
'MFswDQYJKoZIhvcNAQEBBQADSgAwRwJAfOIP4z5oWeV+/FqETar/R2g+fvmMaQlZ\n'+
'zvCxv2uIV9Eq66VyF/nOkMrZJStjDrT0u0WhKIHr52QljAoHAH+1IQIDAQAB\n'+
'-----END PUBLIC KEY-----');

const serverPublicKey=new NodeRSA('-----BEGIN PUBLIC KEY-----\n'+
'MFswDQYJKoZIhvcNAQEBBQADSgAwRwJAbvY7IpsSULILxmXKhT/ZYVZ5U1T/HRpJ\n'+
'/2Cq1aIyJSvzULsd4coNrnbsgIm+qVFAd0PRjYuOschhdFEmIet7BQIDAQAB\n'+
'-----END PUBLIC KEY-----');


const clientPrivateKey=new NodeRSA('-----BEGIN RSA PRIVATE KEY-----\n'+
'MIIBOQIBAAJAfOIP4z5oWeV+/FqETar/R2g+fvmMaQlZzvCxv2uIV9Eq66VyF/nO\n'+
'kMrZJStjDrT0u0WhKIHr52QljAoHAH+1IQIDAQABAkBc6H4zbPmLb96yddEaS05S\n'+
'XK6qHpQkjM1g1NcYdzLfSXb96PDYbgFTSHHZmksbDxiSNMUDX+wBwXaIO3Orq93B\n'+
'AiEAuF7rUOO6CyI8eJIrnwnngIo8zlW0pAlzjMSCg9fd9JkCIQCtZqKE9PnKeKd1\n'+
'VE1BKHKERF7QxmUtL3piiFWFxzCRyQIgecpZ78k+8HPhNlR4dEp6nrKykCqVdXa4\n'+
'2dhFzwoeGKECIQCYKEvMJ7tZc+5eAo+X8YorjmM1CCKYN+VIuSFytotkIQIgB5w9\n'+
'G2NJ83ruKGG+aut0c8ZfW6v4WuUVHrql0Hcim3o=\n'+
'-----END RSA PRIVATE KEY-----');


exports.ResponseEncryptionBuilder=(res)=>{
      var response={};
      var enc={};
      var session =generateKey(32);
      response.requestID=uuidv4();
      response.Data=CryptoJS.AES.encrypt(res,session).toString();
      response.sessionID=clientPublicKey.encrypt(session, 'base64');
      var encodeResponseByte= CryptoJS.enc.Utf8.parse(JSON.stringify(response));
      enc.Response=CryptoJS.enc.Base64.stringify(encodeResponseByte);
     return enc;
}

exports.RequestDecryptionBuilder=(req)=>{
  let byteRequest = CryptoJS.enc.Base64.parse(req.Request);
  let request= byteRequest.toString(CryptoJS.enc.Utf8);
  let parsedJsonRequest=JSON.parse(request);
  let decryptRSA=serverPrivatekey.decrypt(parsedJsonRequest.sessionID, 'utf8');
  let aesDecrypt=CryptoJS.AES.decrypt(parsedJsonRequest.Data,decryptRSA);
  let plainRequest =aesDecrypt.toString(CryptoJS.enc.Utf8);
  return JSON.parse(plainRequest);
}


const generateKey=(keySize)=>{
    var randomstring = '';
    for (var i=0; i < keySize; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum,rnum+1);
    }
    return randomstring;
}


