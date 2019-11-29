var log4js = require('log4js'); 
var exports=module.exports={}

log4js.addLayout('json', function(config) {
  return function(logEvent) { return JSON.stringify(logEvent) + config.separator; }
});

log4js.configure({
    appenders: { info: { type: 'file', filename: 'Logs/info.json',layout: { type: 'json', separator: ',' }  }, error: { type: 'file', filename: 'Logs/error.json',layout: { type: 'json', separator: ',' } } },
    categories: { default: { appenders: ['info'], level: 'info' },error: { appenders: ['error'], level: 'error' } }
  });

  var loggerinfo = log4js.getLogger('info'); 
  var loggererror= log4js.getLogger('error');

  exports.infoLogger=(MethodName,Module,Data,Comment)=>{ 
    loggerinfo.info(MethodName+" "+Module+" "+Data+" "+Comment);
}

exports.infoLogger=(MethodName,Module,Data,Comment)=>{ 
  loggererror.error(MethodName+" "+Module+" "+Data+" "+Comment);
}






