const express = require("express");
const { isAuthenticated } = require("../authentication/auth");
const {
    CreatePost,
    getAllPosts,
    likePost,
    commentPost,
} = require("../controllers/postController");
const router = express.Router();

router.route("/createPost").post(isAuthenticated, CreatePost);
router.route("/allposts").post(isAuthenticated, getAllPosts);
router.route("/like").post(isAuthenticated, likePost);
router.route("/comment").post(isAuthenticated, commentPost);

module.exports = router;
