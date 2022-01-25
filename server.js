const dotenv = require("dotenv");
dotenv.config({
  path: "./utils/config.env",
});

const apiRoutes = require("./Routes/api");
const path = require("path");
const mongoose = require("mongoose")
const express = require("express");
const session = require('cookie-session');

const cors = require("cors");
const auth = require("./Middlewares/auth");
const passport = require("passport");

const app = express();
const url = process.env.MONGO 

app.use(cors());
app.use(express.json());
app.use(session({ secret: 'melody hensley is my spirit animal' }));
app.use(passport.initialize())
app.use(passport.session())
mongoose.connect(url).then(()=>console.log("Connected to DB"))

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('/auth/google', 
    passport.authenticate('google', {scope: ['email', 'profile']})
  )
  app.get('/google/callback', 
    passport.authenticate('google', {
      successRedirect: 'http://localhost:3000',
      failureRedirect: 'http://localhost:3000/login',
    })
  )
  app.use('/api', apiRoutes)
  
}

app.listen(process.env.PORT || 5000, () => {
  console.log(process.env.PORT)
  console.log(`Server running at port ${process.env.PORT}`);
});