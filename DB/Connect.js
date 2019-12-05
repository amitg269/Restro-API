const mongodb= require('mongodb');
const Logger=require('../Logger.js')
const MongoClient = mongodb.MongoClient;
let db;


const MongoConnect=(callback)=>{
    MongoClient.connect('mongodb+srv://amitg269:SbXdNaHeEQUHKnea@restro-nkntu.mongodb.net/Restro?retryWrites=true&w=majority',{useUnifiedTopology: true}).then(client=>{
        db=client.db();
        callback();
        console.log(db);
    }).catch(err=>{
     Logger.errorLogger("MongoConnect","Connect.js",err.stack,"connection failed");   
    })
}


const getDB=()=>{
    if(db){
        return db;
    }
    return "Connection Not Done";
}

exports.MongoConnect=MongoConnect;
exports.getDB=getDB;
