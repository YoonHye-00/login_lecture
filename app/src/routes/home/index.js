"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get('/login',ctrl.output.login);
router.post('/login',ctrl.process.login);    //front-end가 전달한 로그인 데이터를 받아서 로그인 기능을 처리해주는 API

module.exports = router;    //router를 외부에서 사용하기 위함.