const Post = require("../models/Post");
const User = require("../models/User");

exports.CreatePost = async (req, res, next) => {
    console.log(req.body);
    const post = await Post.create(req.body);
    const user = await User.findOne(post.user);
    user.posts.push(post);
    user.save();

    res.status(200).json({ msg: "Post has been created", post, user });
};

exports.getAllPosts = async (req, res, next) => {
    const posts = await Post.find();
    if (!posts) {
        return res.status(400).json({ msg: "No Posts Are here", posts });
    }
    res.status(200).json({ msg: "All Posts Fetched Successfully", posts });
};

exports.likePost = async (req, res, next) => {
    const post = await Post.findOne({ _id: req.body.postId });

    let check = post.likes.includes(req.body.user);
    if (check) {
        let data = post.likes.filter((elem) => {
            // elem !== req.body.user;
            
        });
        console.log(data);
        post.likes = data;
        post.save();

        return res.status(200).json({ msg: "Disliked Liked", post });
    }

    post.likes.push(req.body.user);
    await post.save();

    res.status(200).json({ msg: "Liked Successfully", post });
};
exports.commentPost = async (req, res, next) => {
    const post = await Post.findOne({ _id: req.body.postId });
    const { comment } = req.body;
    post.comments.push({ id: req.body.user, comment });
    await post.save();

    res.status(200).json({ msg: "Liked Successfully", post });
};
