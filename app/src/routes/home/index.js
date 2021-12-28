"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//서버 <-> 클라이언트 전달 경로
router.get("/", ctrl.output.home);
router.get('/login',ctrl.output.login);
router.get('/register',ctrl.output.register);
router.post('/login',ctrl.process.login);    //front-end가 전달한 로그인 데이터를 받아서 로그인 기능을 처리해주는 API. 
                                             //login.js에서 fetch를 통해 서버로 req 전달을 수행하기 위해 필요함

module.exports = router;    //router를 외부에서 사용하기 위함.