var express=require('express');
var app=express();
var portEnv=require('./Enum.js')
var port=process.env.PORT || portEnv.Port
var openAPIHandler=require('./Handler/OpenAPIHandler.js');
var restroAuthAPI=require('./Handler/RestroHandler.js');


app.use('/RestroAPI', openAPIHandler);
app.use('/RestroAPIAuth',restroAuthAPI);


app.listen(port);