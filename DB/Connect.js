const mongodb= require('mongodb');
const Logger=require('../Logger.js')
const MongoClient = mongodb.MongoClient;
let db;


const MongoConnect=(callback)=>{
    MongoClient.connect('mongodb+srv://amitg269:SbXdNaHeEQUHKnea@restro-nkntu.mongodb.net/test?retryWrites=true&w=majority',{useUnifiedTopology: true}).then(client=>{
        console.log('Connected!');
        db=client;
    }).catch(err=>{
     Logger.errorLogger("MongoConnect","Connect.js",err.stack,"connection failed");
     
    })
}


const getDB=()=>{
    if(db!=null){
        return db;
    }
    return "Connection Not Done";
}

module.exports=MongoConnect;