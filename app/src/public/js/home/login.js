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
    };
    //fetch를 통해 req 전달
    fetch("/login", {
        method : "POST",
        headers: {  //내가 전달하는 데이터가 json 데이터라고 알려줘야함
            "Content-Type" : "application/json" //데이터 타입 명시
        },
        body : JSON.stringify(req)  //req를 문자열로 바꿔줌
    });
}


