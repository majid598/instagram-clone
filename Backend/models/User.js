const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    contact: {
        required: true,
        type: Number,
    },
    password: {
        required: true,
        type: Number,
    },
    posts: [],
    followers: [],
    following: [],
    chats: [
        {
            chat: {
                user: {
                    type: String,
                    required: true,
                },
                messages: [],
            },
        },
    ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
