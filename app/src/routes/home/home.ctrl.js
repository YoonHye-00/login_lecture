//controller 분리
"use strict"

const User = require("../../models/User");


const output = {
    home : (req, res) => {   // (==) function hello(req, res) { res.render("home/index"); };
        res.render("home/index");
    },
    
    login : (req, res)=>{
        res.render("home/login");
    },

    register : (req, res) => {
        res.render("home/register");
    }
}

const process = {
    login : async (req,res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response); //response를 클라이언트에게 json형태로 응답해줌.
     },

     register : (req,res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response); //response를 클라이언트에게 json형태로 응답해줌.
     }
}


module.exports = {
    output,
    process
};