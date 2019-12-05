var express=require('express');
var app=express();
var portEnv=require('./Enum.js')
var port=process.env.PORT || portEnv.Port
var openAPIHandler=require('./Handler/OpenAPIHandler.js');
var restroAuthAPI=require('./Handler/RestroHandler.js');
var mongoConnect=require('./DB/Connect.js');


app.use('/RestroAPI', openAPIHandler);
app.use('/RestroAPIAuth',restroAuthAPI);


//app.listen(port);

mongoConnect((client)=>{
    app.listen(port);
    console.log(client);
});