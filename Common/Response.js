var exports=module.exports={};

exports.createResponse=(data,returnCode,returnMessage)=>{
 var APIResponse={};
 APIResponse.Data=data;
 APIResponse.ReturnCode=returnCode;
 APIResponse.ReturnMessage=returnMessage;
 return APIResponse;
}