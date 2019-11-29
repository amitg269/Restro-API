// var log4js = require('log4js'); 
// const jsonLayout = require('log4js-json-layout');
// var exports=module.exports={}

// log4js.addLayout('json', function(config) {
//   return function(logEvent) { return JSON.stringify(logEvent) + config.separator; }
// });

// log4js.configure({
//     appenders: { info: { type: 'file', filename: 'Logs/info.log',layout: { type: 'json', separator: ',' }  }, error: { type: 'file', filename: 'Logs/error.log' } },
//     categories: { default: { appenders: ['info'], level: 'info' },error: { appenders: ['error'], level: 'error' } }
//   });

//   var loggerinfo = log4js.getLogger('info'); 
//   var loggererror= log4js.getLogger('error');

//   exports.infoLogger=(MethodName,Module,Data,Comment)=>{ 
//     loggerinfo.info(MethodName+" "+Module+" "+Data+" "+Comment);
//     //errorLogger("TestMethod","demo","Data","Comment")
// }

// const errorLogger=(Method,Message,FileName,LineNumber,StackTrace)=>{
//     loggererror.error();
// }

// log4js.shutdown(() => {});




const log4js = require('log4js');

log4js.addLayout('json', function(config) {
  return function(logEvent) { return JSON.stringify(logEvent) + config.separator; }
});

// log4js.configure({
//   appenders: {
//     out: { type: 'file',filename: 'Logs/test.json',layout: { type: 'json', separator: ',' } }
//   },
//   categories: {
//     default: { appenders: ['out'], level: 'info' }
//   }
// });

log4js.configure({
	appenders: {
		everything: {
			type: "file",
			filename:  "Logs/test.json",
			layout: { type: "json", separator: "," }
		}
	},
	categories: {
		default: { appenders: ["everything"], level: "info" }
	}
});

const logger = log4js.getLogger("everything");


  exports.infoLogger=(MethodName,Module,Data,Comment)=>{ 
    
  logger.info('this is just a test');
  //logger.error('of a custom appender');
  //logger.warn('that outputs json');
  
    //errorLogger("TestMethod","demo","Data","Comment")
}


