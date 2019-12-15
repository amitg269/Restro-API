var mongoose = require('mongoose');
const Logger=require('../Logger.js')

const MongooseConnect=()=>{
    mongoose.connect('mongodb+srv://amitg269:SbXdNaHeEQUHKnea@restro-nkntu.mongodb.net/Restro?retryWrites=true&w=majority',{ useUnifiedTopology: true,useNewUrlParser: true }).then(result=>{
      db = mongoose.connection;
    }).catch(err=>{
        Logger.errorLogger("MongooseConnect","Connect.js",err.stack,"connection failed");
    })
}

const getDB=()=>{
    if(db)
    {
        return db;
    }
    else{
        Logger.errorLogger("MongoConnect","Connect.js",err.stack,"connection failed");
        return "No connection";
    }
}

exports.MongooseConnect=MongooseConnect;
exports.getDB=getDB;