//controller 분리
"use strict"

const output = {
    home : (req, res) => {   // (==) function hello(req, res) { res.render("home/index"); };
        res.render("home/index");
    },
    
    login : (req, res)=>{
        res.render("home/login");
    }
}

const users = {
    id: ["aaaa", "bbbb", "cccc"],
    password: ["1111", "2222", "3333"]
}

const process = {
    login : (req,res) => {
        const id = req.body.id;
        const password = req.body.password;

        if(users.id.includes(id)){  //front에서 전달한 id가 users id에 있으면
            const idx = users.id.indexOf(id);
            if(users.password[idx]==password){
                return res.json({   //front-end로 응답해줌
                    success : true
                });
            }
        }
        return res.json({
            success: false,
            msg : "로그인에 실패하셨습니다."
        });
    }
}


module.exports = {
    output,
    process
};