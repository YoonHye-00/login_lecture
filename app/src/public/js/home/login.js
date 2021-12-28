"use strict";
//Front-End
//DOM -> html에 존재하는 데이터를 가져와서 javascript에서 제어 가능

const id = document.querySelector("#id"),   //id가 id인 태그를 가져옴
    password = document.querySelector("#password"), //id가 password인 태그를 가져옴
    loginButton = document.querySelector("button"); //button 태그를 가져옴

loginButton.addEventListener("click", login);   //로그인 버튼이 눌리면 login 함수 실행
loginButton.addEventListener("keypress", (e) => {
    if(e.key == "Enter"){login();}
});
password.addEventListener("keypress", (e) => {
    if(e.key == "Enter"){login();}
});

function login(){
    const req = {
        id : id.value,
        password : password.value
    };
    //fetch를 통해 서버로 req 전달. promise타입의 객체를 반환함
    fetch("/login", {
        method : "POST",    //POST : 내용 전송. 요청된 자원을 생성함.
        headers: {  //내가 전달하는 데이터가 json 데이터라고 알려줘야함 (client가 전달 받고자 하는 data type)
            "Content-Type" : "application/json" //내가 보내고자 하는 데이터 타입 명시
        },
        body : JSON.stringify(req)  //req를 문자열로 바꿔준 뒤 JSON 형태로 감싸줌
    }).then((res) => res.json())    //fetch로 전달한 후 서버에서 응답한 데이터를 받음 (then). res.json()의 반환값 : Promise
      .then((res) => {
          if(res.success){  //success 값이 true이면
            location.href = "/";
          } else {
              alert(res.msg);
          }
      })  //반환된 promise에 then으로 또 접근
      .catch((err) => {
          console.error(new Error("로그인 중 에러 발생"));  //Error: 로그인 중 에러 발생. new Error없이 문구만 적으면 Error없이 문구만 나타남.
      });
}


