"use strict";

//DOM -> html에 존재하는 데이터를 가져와서 javascript에서 제어 가능

const id = document.querySelector("#id"),   //id가 id인 태그를 가져옴
    password = document.querySelector("#password"), //id가 password인 태그를 가져옴
    loginButton = document.querySelector("button"); //button 태그를 가져옴

loginButton.addEventListener("click", login);   //로그인 버튼이 눌리면 login 함수 실행

function login(){
    const req = {
        id : id.value,
        password : password.value
    }
    console.log(req);
}


