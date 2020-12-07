var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
// var bodyParser = require('body-parser');

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var vatRoutes = require("./routes/note");
var app = express();
app.use(cors());



// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

vatRoutes(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

//pdf generation

//POST route PDF generation and fetching of the data
// app.post("create-pdf", (req, res) => {
//   pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
//     if (err) {
//       res.send(Promise.reject());
//     }

//     res.send(Promise.resolve());
//   });
// });

//GET route Send the generated pdf to the client
// app.get("/fetch-pdf", (req, res) => {
//   res.sendFile(`${__dirname}/result.pdf`);
// });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
