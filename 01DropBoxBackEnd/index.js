const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter');
require("dotenv").config();
const passport = require("passport");
const passportStrategy = require("./passport");
const uploadRouter = require('./routes/uploadRoutes'); // Import the new uploadRouter

require('./models/db');
const session = require('express-session');
const contactRoutes = require("./routes/contact");
const userRoutes = require('./routes/userRoute');
const authenticateToken = require('./middlewares/AuthValidation')
const uploadRoutes = require('./routes/uploadRoutes');

const PORT = process.env.PORT || 5000;

app.use(
  session({
    secret: process.env.SESSION_SECRET,
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

app.use("/api/contact", contactRoutes);
app.get("/api/user", authenticateToken, (req, res) => {
  console.log("Decoded User:", req.user);

  const user = {
    id: req.user.id,
    firstName: req.user.firstName || "",
    lastName: req.user.lastName || "",
    profilePicture: req.user.profilePicture || null,
  };

  res.json(user);
});


app.use('/api', uploadRoutes); // Now routes are accessible under '/api/upload' for uploading



app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});