var exports=module.exports={};
exports.EnvURL="http://localhost";
exports.Issuer="Restro";
exports.Subject="Restro@Test";
exports.Audience="http://localhost";
exports.Port=3000;

exports.ReturnCode = {
    Success: 200,
    Exception: 300,
    NoRecordFound:10,
    Forbidden:403,
    Fail:20,
};

exports.ReturnMsg = {
    Success: "Success",
    Exception: "Fail",
    NoRecordFound:"No Record Found",
    Forbidden:"Forbidden",
    NoToken:"User Not Authorize Token Not Available",
    TokenFailed:"Token Authentication Failed",
};

exports.APIURL={
    CreateToken: "/CreateToken",
}