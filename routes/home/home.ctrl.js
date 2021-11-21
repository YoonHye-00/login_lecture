//controller 분리

"use strict"

const hello = (req, res) => {   // (==) function hello(req, res) { res.render("home/login"); };
    res.render("home/index")
};

const login = (req, res)=>{
    res.render("home/login");
};

module.exports = {
    hello,  // == hello : hello
    login,  // == login : login
};