const mongodb= require('mongodb');
const MongoClient = mongodb.MongoClient;



const MongoConnect=(callback)=>{
    MongoClient.connect('mongodb+srv://amitg269:SbXdNaHeEQUHKnea@restro-nkntu.mongodb.net/test?retryWrites=true&w=majority',{useUnifiedTopology: true}).then(client=>{
        console.log('Connected!');
        callback(client);
    }).catch(err=>{
      console.log(err);
    })
}


module.exports=MongoConnect;