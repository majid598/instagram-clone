const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    img_url: {
        type: String,
        required: true,
    },
    img_caption: {
        type: String,
    },
    comments: [
        {
            id: {
                type: String,
            },
            comment: {
                type: String,
            },
        },
    ],
    likes: [],
    shares: [],
});
const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
