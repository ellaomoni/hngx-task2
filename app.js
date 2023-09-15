//importing modules
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require("body-parser");
const morgan = require("morgan");
const person = require('./api/routes/person')
// const cors = require("cors");

const app = express()

//connecting to mongo db
mongoose
  .connect('mongodb+srv://emmanuellaomoni184:ella@hng.ja4cpwa.mongodb.net/',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    connectTimeoutMS: 5000,
  })
  .then(() => {
    console.log("Connected to port 5502");
  })
  .catch((err) => {
    console.log("error connection to port 5502" + err);
  })

 app.use(morgan("dev"));
 app.use(bodyParser.urlencoded ({extended:false}));
 app.use(bodyParser.json());

 app.use("/api", person);

//setting error code
 app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
 });
 app.use((error,req,res,next) => {
    res.status(error.staus || 500)
    res.json({
        error:{
            message: error.message,
        },
    });
 });


// exporting code
module.exports = app;