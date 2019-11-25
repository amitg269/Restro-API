var CryptoJS = require("crypto-js");
const uuidv4 = require('uuid/v4');
const NodeRSA = require('node-rsa');
var chars ="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz*&-%/!?*+=()";

var exports=module.exports={};

exports.ResponseEncryptionBuilder=(res)=>{
 var session =generateKey(32);
}


const generateKey=(keySize)=>{
    var randomstring = '';
    for (var i=0; i < keyLength; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum,rnum+1);
    }
    return randomstring;
}