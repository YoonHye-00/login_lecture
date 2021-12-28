//controller 분리
"use strict"

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage")

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



        // const id = req.body.id;
        // const password = req.body.password;
        
        // const users = UserStorage.getUsers("id", "password");   //id와 password만 가져옴
        
        // const response = {};
        // if(users.id.includes(id)){  //front에서 전달한 id가 users id에 있으면
        //     const idx = users.id.indexOf(id);
        //     if(users.password[idx]==password){
        //         response.success = true;
        //         return res.json(response);   //front-end로 응답해줌
        //     }
        // }
        // response.success = false;
        // response.msg = "로그인에 실패하셨습니다.";
        // return res.json(response);
     }
}


module.exports = {
    output,
    process
};