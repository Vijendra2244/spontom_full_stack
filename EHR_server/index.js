const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
const { patientRouter } = require("./routes/patient.routes");
const {auth} = require("./middleware/auth.middleware")

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://127.0.0.1:5173","https://spontom-full-stack.onrender.com"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  try {
    res.status(200).send({ status: "success", msg: "Home page" });
  } catch (error) {
    res.status(400).send({ status: "fail", err: error.message });
  }
});

//Router

app.use("/users", userRouter);
app.use("/patients", auth ,  patientRouter);

app.listen(PORT, () => {
  try {
    connection
      .then((res) => {
        console.log("connected to db");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(`server is running on port ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
