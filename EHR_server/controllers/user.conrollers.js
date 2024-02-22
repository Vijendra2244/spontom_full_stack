const dotenv = require("dotenv");
const { BlacklistModel } = require("../models/blacklist.models");
const { UserModel } = require("../models/user.models");
dotenv.config();

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = new UserModel({
      username,
      email,
      password,
  
    });
    await user.save();
    res.status(200).send({
      status: "success",
      msg: "User has been created successfully",
    });
  } catch (error) {
    res.status(400).send({ status: "fail", msg: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUserWithMail = await UserModel.findOne({ email });

    const passwordValidation = await findUserWithMail.comparePasswordIsSame(
      password
    );

    if (!passwordValidation) {
      return res
        .status(401)
        .send({ status: "fail", msg: "Password is incorrect" });
    }

    const access_token = await findUserWithMail.generateAccessToken();
    const refresh_token = await findUserWithMail.generateRefreshToken();

    res.cookie("access_token", access_token,{httpOnly:true,secure:true,sameSite:'none'});
    res.cookie("refresh_token", refresh_token,{httpOnly:true,secure:true,sameSite:'none'});

    res.status(200).send({
      status: "success",
      msg: "User login successfully",
    });
  } catch (error) {
    res.status(400).send({ status: "fail", msg: error.message });
  }
};

const logoutUser = async (req, res) => {
  try {
    const access_token = req.cookies["access_token"];
    const findToken = await BlacklistModel.findOne({ access_token });

    if (findToken) {
      return res
        .status(401)
        .send({ status: "all ready", msg: "You are already logged out" });
    }

    const blackListToken = new BlacklistModel({ access_token });
    await blackListToken.save();
    res
      .status(200)
      .send({ status: "success", msg: "User logged out successfully" });
  } catch (error) {
    res.status(400).send({ status: "fail", msg: error.message });
  }
};

module.exports = { loginUser, logoutUser, registerUser };
