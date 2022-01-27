const passport = require("passport");
const GoogleStrategy = require("passport-google-oidc").Strategy;
const dotenv = require("dotenv");
const { func } = require("prop-types");
const User = require("../Models/newUser");

dotenv.config({
	path: "./utils/config.env",
});

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.G_CLIENT_ID,
			clientSecret: process.env.G_CLIENT_SECRET,
			callbackURL: "http://localhost:8000/google/callback",
			passReqToCallback: true,
		},
		function (request, issuer, profile, done) {
			User.findOne({
				googleID: profile.id
			}).then((existingUser) => {
				if(existingUser){
					console.log('Exists!!');
				}
				else{
					console.log('Does not Exist');
					new User({ 
						googleID: profile.id,
						firstName: profile.name.givenName,
						lastName: profile.name.familyName,
						emailID: profile.emails[0].value,
					}).save();
					console.log('New User Created')
				}
			})
			return done(null, profile);
		}
	)
);

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});
