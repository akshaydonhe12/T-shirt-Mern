const User = require("../models/user");




exports.signup = (req,res) => {
   const user = new User(req.body);
   user.save((err,user) =>{
    if(err){
        return res.status(400).json({
            err: "NOT ABLE TO SAVE"
        })
    }
    res.json({
        name: user.name,
        password: user.password,
        id: user._id
    });
   })
};



exports.signout = (req,res) => {
    res.json({
        message: "signout"
    });
};