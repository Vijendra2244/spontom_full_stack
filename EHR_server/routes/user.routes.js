const express  = require("express")
const { loginUser, registerUser, logoutUser } = require("../controllers/user.conrollers")


const userRouter  =express.Router()


userRouter.route("/register").post(registerUser)
userRouter.route("/login").post(loginUser)
userRouter.route("/logout").post(logoutUser)

module.exports = {userRouter}