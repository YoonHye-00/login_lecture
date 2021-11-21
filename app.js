"use strict";

// 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require("./routes/home")

// 앱 세팅
app.set("views", "./views");    //view 폴더 지정
app.set("view engine", "ejs");  //views 폴더 안에 생성될 html코드를 해석할 엔진 -> ejs


app.use("/", home);  //use -> 미들웨어를 등록해주는 메서드. 
                     //루트 경로로 들어가면 home으로 보내줌

module.exports = app;