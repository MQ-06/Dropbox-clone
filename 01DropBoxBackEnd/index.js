const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter');
require("dotenv").config();
const passport = require("passport");
const passportStrategy = require("./passport");
require('./models/db');
const session = require('express-session');

const PORT = process.env.PORT || 5000;

app.use(
  session({
    secret: process.env.SESSION_SECRET , 
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, 
  })
);

app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: "GET,POST,PUT,DELETE",
    credentials: true, 
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());


app.use('/auth', AuthRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});