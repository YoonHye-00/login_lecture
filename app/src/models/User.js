"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body) {     //생성자
        this.body = body;   //파라미터로 받아온 body를 User의 body에 넣음. 
    }

    async login() {
        const client = this.body
        const { id, password } = await UserStorage.getUserInfo(client.id);  //id와 password만 받아옴 (id, password 이거 키 값이 반환값의 키 값과 동일해야함)
        
        if(id){ //사용자가 입력한 id가 UserStorage에 존재하면
            if (password === client.password) {     // === : 자료형 변환 없이 두 피연산자가 엄격하게 같은지 확인
                return {success : true};
            }
            return {success : false, msg: "비밀번호가 틀렸습니다."};
        }
        return {success : false, msg: "존재하지 않는 아이디입니다."};
    }

    register() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;