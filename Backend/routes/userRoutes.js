const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../authentication/auth");
const {
    LoginUser,
    RegisterUser,
    LogoutUser,
    getLoggedInUserInfo,
    getAllUsers,
    followUser,
    unFollowUser,
    sendMessage,
    getUser,
    removeFollower,
} = require("../controllers/userController");

// ? Routes
router.route("/login").post(LoginUser);
router.route("/register").post(RegisterUser);
router.route("/logout").get(LogoutUser);
router.route("/aboutme").post(isAuthenticated, getLoggedInUserInfo);
router.route("/message").post(isAuthenticated, sendMessage);
router.route("/follow").post(isAuthenticated, followUser);
router.route("/unfollow").post(isAuthenticated, unFollowUser);
router.route("/removefollower").post(isAuthenticated, removeFollower);
router.route("/getuser").post(getUser);
router.route("/admin/getallusers").get(getAllUsers);

module.exports = router;
