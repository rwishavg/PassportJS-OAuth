const passport = require('passport');
const GoogleStrategy = require('passport-google-oidc').Strategy;
const dotenv = require("dotenv");
const { func } = require('prop-types');

dotenv.config({
  path: "./utils/config.env",
});

passport.use(new GoogleStrategy({
    clientID: process.env.G_CLIENT_ID,
    clientSecret: process.env.G_CLIENT_SECRET,
    callbackURL: 'http://localhost:8000/google/callback',
    passReqToCallback: true
  },
  function(request, issuer, profile, done) {
      // console.log(request)
      return done(null, profile);
  }
))

passport.serializeUser(function(user, done){
  done(null, user)
})

passport.deserializeUser(function(user, done){
  done(null, user)
})