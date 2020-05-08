
exports.signup = (req,res) => {
    console.log("REQ BODY", req.body);
    res.json({
        message: "signup works!"
    });
};



exports.signout = (req,res) => {
    res.json({
        message: "signout"
    });
};