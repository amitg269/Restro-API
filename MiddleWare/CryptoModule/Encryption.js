var CryptoJS = require("crypto-js");
const uuidv4 = require('uuid/v4');
const NodeRSA = require('node-rsa');
var chars ="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz*&-%/!?*+=()";
var exports=module.exports={};


// var clientPublicKey="MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKTkpIb/XM80mk9+satPgxLJ6XO8Bx535ldNSpPCtnHcuZEJ36iDWqZ52e0rGvyU3DlVWFMt+D3vJUDFm+pBvlsCAwEAAQ==";
// var serverPrivatekey="MIIBOAIBAAJAVlw5KvTi/g4O5wznoAXqokABq3Mb0rnk0RhCNmxAxQpFwPNLkKRRuqDVRxz0xFX33zG/x+nuw68yvZQQJJOQ6wIDAQABAkA/nGSbiI/elFpTxASksVb3te/E6t+2oyiw/45d6fT3bVIVn0BYon8oWkrd5xRHki5bFynusyGoQsHWBHHVStERAiEApw+kZLbVK1J1f53dKs51iEA9JEfVGXYFnyjO++Sb7xMCIQCEVg4EgxZV6dx7CBNSIxw9goMHfqz6tF3iQT+rAoQZyQIgQKSV2P7CJ3xFyPa90MWIxwsMXZCKDcsUS8zPorqH+A8CIAwdEHVrRm0g1hTQ/WvEWP5sZvAVsWHVhs6CKIDP3yW5AiA8R4aM/xRc6d29TFFs2RgA2cubA7K0aO37Q08dNKaWPg==";


// var clientPrivateKey="MIIBOwIBAAJBAKTkpIb/XM80mk9+satPgxLJ6XO8Bx535ldNSpPCtnHcuZEJ36iDWqZ52e0rGvyU3DlVWFMt+D3vJUDFm+pBvlsCAwEAAQJAJj+rMm1Vt/K5wKrgx54gB2Gyt1fsRtMFKUcSf4fxDiQHfd6j50tsFV9UGgMK4XXJC+rKi1NfAwBtv9kv18ubUQIhAN7RMDHEvTQ+7Y6+RsbRrlDLuaFMJslWnygaTWb12Ei3AiEAvXMgJCP6ojKuQHNPWRwr2V5AxZM9CBCDIsQTPXWMq30CIQC9Bp5qOkuA/TmvdUC5/rxxEsPiUKY+/Ft9PAMaK8pWtQIgOsBNI2gU/eABsfMQlG3sG0jjhWIX9zxHrqxn2xNtQHECIQDLKPdRv6umCtZlJy/PBzbl606uIq6NXMEFoXmhxE4oXA==";
// var serverPublicKey="MFswDQYJKoZIhvcNAQEBBQADSgAwRwJAVlw5KvTi/g4O5wznoAXqokABq3Mb0rnk0RhCNmxAxQpFwPNLkKRRuqDVRxz0xFX33zG/x+nuw68yvZQQJJOQ6wIDAQAB";

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
      var session =generateKey(32);
      response.requestID=uuidv4();
      response.Data=CryptoJS.AES.encrypt(res,session).toString();
      response.sessionID=clientPublicKey.encrypt(session, 'base64');
     return response;
}


const generateKey=(keySize)=>{
    var randomstring = '';
    for (var i=0; i < keySize; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum,rnum+1);
    }
    return randomstring;
}


// const text = session;
// const aesEncrypt=CryptoJS.AES.encrypt(res,session).toString();
// const encrypted = clientPublicKey.encrypt(session, 'base64');
// console.log('encrypted: ', encrypted);
// const decrypted = clientPrivateKey.decrypt(encrypted, 'utf8');
// const aesDecrypt=CryptoJS.AES.decrypt(aesEncrypt,decrypted);
// const faes=aesDecrypt.toString(CryptoJS.enc.Utf8)
// console.log('decrypted: ', decrypted);