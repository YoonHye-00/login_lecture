"use strict";

// 모듈
const express = require('express');
const bodyParser = require("body-parser");  //login.js에서 fetch에 body를 parsing하기 위한 모듈. bodyparser 사용 시 middleware 등록해줘야함.
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");    //view 폴더 지정
app.set("view engine", "ejs");  //views 폴더 안에 생성될 html코드를 해석할 엔진 -> ejs

app.use(express.static(`${__dirname}/src/public`));
                            //middleware 등록
app.use(bodyParser.json()); //(bodyParser가) json 데이터를 parsing하기 위함
app.use(bodyParser.urlencoded({extended : true}));  //URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결  

app.use("/", home);  //use -> 미들웨어를 등록해주는 메서드. 
                     //루트 경로로 들어가면 home으로 보내줌

module.exports = app;