//Front-End

"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#password"), 
    confirmPassword = document.querySelector("#confirm-password"),   //javascript에서는 대문자로 공백 구분함 -> confirmPassword
    registerButton = document.querySelector("#button"); 

registerButton.addEventListener("click", register); 
registerButton.addEventListener("keypress", (e) => {
    if(e.key == "Enter"){register();}
});
confirmPassword.addEventListener("keypress", (e) => {
    if(e.key == "Enter"){register();}
});

function register(){
    if (!id.value) return alert("아이디를 입력해주세요. ");   //id 값이 비어있으면 아래 수행 x
    //confirmPassword 값은 server로 보낼 필요가 없음. front에서 처리!!
    if (password.value !== confirmPassword.value) return alert("비밀번호가 일치하지 않습니다.");
        
    const req = {
        id : id.value,
        name : name.value,
        password : password.value,
    };
    //fetch를 통해 서버로 req 전달. promise타입의 객체를 반환함
    fetch("/register", {
        method : "POST",    //POST : 내용 전송. 요청된 자원을 생성함.
        headers: {  //내가 전달하는 데이터가 json 데이터라고 알려줘야함 (client가 전달 받고자 하는 data type)
            "Content-Type" : "application/json" //내가 보내고자 하는 데이터 타입 명시
        },
        body : JSON.stringify(req)  //req를 문자열로 바꿔준 뒤 JSON 형태로 감싸줌
    }).then((res) => res.json())    //fetch로 전달한 후 서버에서 응답한 데이터를 받음. res.json()의 반환값 : Promise
      .then((res) => {
          if(res.success){  //success 값이 true이면
            location.href = "/login";
          } else {
              alert(res.msg);
          }
      })  //반환된 promise에 then으로 또 접근
      .catch((err) => {
          console.error(new Error("회원가입 중 에러 발생"));  //Error: 로그인 중 에러 발생. new Error없이 문구만 적으면 Error없이 문구만 나타남.
      });
}
