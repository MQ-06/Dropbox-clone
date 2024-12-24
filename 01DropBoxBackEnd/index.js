const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter');


require('dotenv').config();
require('./models/db');
const PORT = process.env.PORT || 5000;

<<<<<<< HEAD
app.use(
  session({
    secret: process.env.SESSION_SECRET , 
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, 
  })
);

app.use(passport.initialize());
app.use(passport.session());
=======
app.get('/ping', (req, res) => {
    res.send('PONG');
});
>>>>>>> parent of dfba2a8 (Authentication with google completed)

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})