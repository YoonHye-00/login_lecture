//controller 분리
"use strict"

const User = require("../../models/User");


const output = {
    home : (req, res) => {   // (==) function hello(req, res) { res.render("home/index"); };
        res.render("home/index");
    },
    
    login : (req, res)=>{
        res.render("home/login");
    }
}

const process = {
    login : (req,res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(responese); //response를 클라이언트에게 json형태로 응답해줌.
     }
}


module.exports = {
    output,
    process
};