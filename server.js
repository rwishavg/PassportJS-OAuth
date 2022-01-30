const dotenv = require("dotenv");
dotenv.config({
	path: "./utils/config.env",
});

const apiRoutes = require("./Routes/api");
const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const session = require("cookie-session");

const cors = require("cors");
const auth = require("./Middlewares/auth");
const passport = require("passport");

const app = express();
const url = process.env.MONGO;
const { goog } = require("./Controllers/callback.js");

app.use(cors());

const whitelist = ["http://localhost:3000"];
const corsOptions = {
	origin: function (origin, callback) {
		if (!origin || whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(session({ secret: "melody hensley is my spirit animal" }));
app.use(passport.initialize());
app.use(passport.session());
mongoose.connect(url).then(() => console.log("Connected to DB"));
// app.use(express.static(path.join(__dirname, "Public")));
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["email", "profile"],
			failWithError: true,
		})
	);

	
	app.get(
		"/google/callback",
		passport.authenticate("google", {
			failureRedirect: "/login",
		}),
		goog
	);
	app.use("/api", apiRoutes);
	app.get('*', (req, res) => res.sendFile(path.resolve('client', 'build', 'index.html')));
}

app.listen(process.env.PORT || 5000, () => {
	console.log(process.env.PORT);
	console.log(`Server running at port ${process.env.PORT}`);
});
