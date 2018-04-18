var express = require("express");
var nodemailer = require("nodemailer");
var fs = require("fs");
var path = require("path");
var bodyParser = require("body-parser");
const app = express();

const dotenv = require('dotenv');
dotenv.load();

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  port: 25,
  auth: {
    user: process.env.EMAIL_USER_NAME,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("port", process.env.PORT || 5000);
app.use(express.static(__dirname + "/public"));

app.get("/", function(request, response) {
  response.send("Welcome to Corsia Veloce's API!");
});

app.post("/api/newReservation", function(request, response) {

  const reservationSummary = {
    from: '"Corsia Veloce" <reservations.corsiaveloce',
    to: "melcarned@gmail.com",
    subject: "Test Mail",
    text: "So AMAZINGAF",
    html: "<b> How ya doin' </b>"
  };

  const newReservationAlert = {
    from: '"Corsia Veloce" <reservations.corsiaveloce',
    to: "reservations.corsiaveloce@gmail.com",
    subject: "New Reservation",
    text: "WOOWWW",
    html: "<b> Reservation for 4 at 6pm Sat </b>"
  };

  transporter.sendMail(reservationSummary, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
  });

  transporter.sendMail(newReservationAlert, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
  });

  response.end(JSON.stringify(request.body));
});

app.listen(app.get("port"), () => {
  console.log("Node app is running at localhost:" + app.get("port"));
});
