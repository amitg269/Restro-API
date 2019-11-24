var exports=module.exports={};
exports.EnvURL="https://restroapi.herokuapp.com";
exports.Issuer="Restro";
exports.Subject="Restro@Test";
exports.Audience="https://restroapi.herokuapp.com";
exports.Port=80;

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