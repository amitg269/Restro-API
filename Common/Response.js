const fs = require('fs');
const path = require("path");
var ParentPath = require('../Logger.js')

var exports = module.exports = {};

exports.createResponse = (data, returnCode, returnMessage) => {
    var APIResponse = {};
    APIResponse.Data = data;
    APIResponse.ReturnCode = returnCode;
    APIResponse.ReturnMessage = returnMessage;
    return APIResponse;
}


exports.viewErros = () => {
    var response = {};
    try {

        var data = ParentPath.ParentDirectory;
        var directory = path.join(data, "/\//Logs/\//error.json");
        let ErrorList = fs.readFileSync(directory, 'utf8');
        if (ErrorList != "") {
            let regex = /\,(?!\s*?[\{\[\"\'\w])/g;
            let rawdata = ErrorList.replace(regex, '');
            var arr = "[" + rawdata + "]";
            let FinalJson = JSON.parse(arr);
            response.Success = true;
            response.Data = FinalJson;
           
        } else {
            response.Success = true;
            response.Data = "";
           
        }

    } catch (error) {
        ParentPath.errorLogger("viewErros", "viewErros", error.stack, "viewErros");
        response.Data = "";
        response.Success = false;
    }
    return response;

}


exports.viewInfo = () => {
    var response = {};
    try {

        var data = ParentPath.ParentDirectory;
        var directory = path.join(data, "/\//Logs/\//info.json");
        let ErrorList = fs.readFileSync(directory, 'utf8');
        if (ErrorList != "") {
            let regex = /\,(?!\s*?[\{\[\"\'\w])/g;
            let rawdata = ErrorList.replace(regex, '');
            var arr = "[" + rawdata + "]";
            let FinalJson = JSON.parse(arr);
            response.Data = FinalJson;
            response.Success = true;
        } else {
            response.Data = "";
            response.Success = true;
        }

    } catch (error) {
        ParentPath.errorLogger("viewInfo", "viewInfo", error.stack, "viewInfo");
        response.Data = "";
        response.Success = false;
    }
    return response;
}