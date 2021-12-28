"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body) {     //생성자
        this.body = body;   //파라미터로 받아온 body를 User의 body에 넣음. 
    }

    login() {
        const { i, password } = UserStorage.getUsers("id", "password");
        console.log(i, password);
    }
}

module.exports = User;