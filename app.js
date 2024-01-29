const express = require('express');
const app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

const indexRouter = require('./routes/index');
app.use("/", indexRouter);

const newRouter = require("./routes/new");
app.use("/new", newRouter);

module.exports = app;