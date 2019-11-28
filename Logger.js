var log4js = require('log4js'); 
var exports=module.exports={}

log4js.configure({
    appenders: { info: { type: 'file', filename: 'Logs/info.log' }, error: { type: 'file', filename: 'Logs/error.log' } },
    categories: { default: { appenders: ['info'], level: 'info' },error: { appenders: ['error'], level: 'error' } }
  });


  var loggerinfo = log4js.getLogger('info'); 
  var loggererror= log4js.getLogger('error');

  exports.infoLogger=(MethodName,Module,Data,Comment)=>{ 
    loggerinfo.info(MethodName+" "+Module+" "+Data+" "+Comment);
    errorLogger("TestMethod","demo","Data","Comment")
}

const errorLogger=(Method,Message,FileName,LineNumber)=>{
    loggererror.error("Test Log");
}