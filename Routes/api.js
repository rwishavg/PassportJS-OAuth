const express = require("express");
const router = express.Router();

const { addNewPost, data, logout } = require("../Controllers/controller");

router.route("/add-new-post").post(addNewPost);
router.route("/data").get(data);
router.route("/logout").get(logout);
// router.route("/auth/google").get(auth)

module.exports = router;
