var express=require('express');
var app=express();
var portEnv=require('./Enum.js')
var port=process.env.PORT || portEnv.Port
var openAPIHandler=require('./Handler/OpenAPIHandler.js');
var restroAuthAPI=require('./Handler/RestroHandler.js');
var viewErrorLogs=require('./Handler/ErrorHandler.js');
var MongoConnect=require('./DB/Connect.js');


app.use('/RestroAPI', openAPIHandler);
app.use('/RestroAPIAuth',restroAuthAPI);
app.use('/RestroLogs',viewErrorLogs);


//app.listen(port);

MongoConnect.MongoConnect((client)=>{
    app.listen(port);
});