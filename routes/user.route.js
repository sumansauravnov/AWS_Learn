const express=require("express");
const { getUser, createUser, userLogin } = require("../controller/user.controller");
const userRoute=express.Router();

userRoute.get("/get/user", getUser);
userRoute.post("/add/user", createUser);
userRoute.post("/login/user", userLogin);



module.exports = {userRoute};



