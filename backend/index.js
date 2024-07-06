const express = require("express");

const app = express();
const PORT = 8000;

const userRouter = require("./routes/user");

const { connectMongoDB } = require("./connection.js");

const { logReqRes } = require("./middlewares");

//Connection
connectMongoDB("mongodb://127.0.0.1:27017/learnnjs");

//MiddleWare -- Plugin of sorts
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

//Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server started on PORT:${PORT}`);
});
