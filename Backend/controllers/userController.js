const User = require("../models/User");
const jwt = require("jsonwebtoken");
const key = "raju@programmer";

// ? ROUTE__2 LOGIN USER
exports.LoginUser = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({
            success: false,
            msg: "Try Different Credentials",
        });
    }

    const checkPassword = password.toString() == user.password;

    const token = jwt.sign({ id: user._id }, key);

    if (checkPassword) {
        return res
            .status(200)
            .cookie("token", token, {
                httpOnly: true,
                expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
            })
            .json({
                success: true,
                msg: "Login in Successfully",
                user,
                token,
            });
    } else {
        res.status(400).json({
            success: false,
            msg: "Email or password is incorrect",
        });
    }
};

// ? ROUTE__1 REGISTER USER
exports.RegisterUser = async (req, res, next) => {
    const { name, email, contact, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
        return res.status(400).json({
            success: false,
            msg: "Try Different Credentials",
        });
    }
    user = await User.create({
        name,
        email,
        contact,
        password,
    });
    const token = jwt.sign({ id: user._id }, key);
    res.status(200).json({
        success: true,
        msg: "Account Created Successfully",
        user,
        token,
    });
};

// ? ROUTE__3 LOGOUT USER
exports.LogoutUser = async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({ success: true, msg: "Logout Successfully" });
};
exports.getUser = async (req, res, next) => {
    const { userId } = req.body;
    const user = await User.findOne({ _id: userId });
    if (!user) {
        return res.status(400).json({
            success: false,
            msg: "Sorry Couldn't find the user",
        });
    }

    res.status(200).json({
        success: true,
        msg: "User found successfully",
        user,
    });
};

exports.getLoggedInUserInfo = async (req, res, next) => {
    const user = await User.findById({ _id: req.body.user }).select(
        "-password"
    );
    res.json({ msg: "User Fetched Successfully", user, success: true });
};

exports.followUser = async (req, res, next) => {
    const loggedInUser = await User.findById({ _id: req.body.user }).select(
        "-password"
    );

    const user = await User.findById({ _id: req.body.userId }).select(
        "-password"
    );
    if (loggedInUser.following.includes(req.body.userId)) {
        return res.json({ msg: "Already Followed ", user });
    }
    loggedInUser.following.push(req.body.userId);
    loggedInUser.save();

    user.followers.push(req.body.user);
    user.save();

    res.json({ msg: "User Followed Successfully", user });
};

exports.removeFollower = async (req, res, next) => {
    const loggedInUser = await User.findById({ _id: req.body.user }).select(
        "-password"
    );

    const user = await User.findById({ _id: req.body.userId }).select(
        "-password"
    );

    let newData = loggedInUser.followers.filter((elem) => {
        elem !== req.body.userId;
    });
    loggedInUser.followers = newData;
    loggedInUser.save();

    newData = user.following.filter((elem) => {
        elem !== loggedInUser._id;
    });
    user.following = newData;
    user.save();

    res.json({ msg: "User Removed  Successfully", user, loggedInUser });
};

exports.unFollowUser = async (req, res, next) => {
    const loggedInUser = await User.findById({ _id: req.body.user }).select(
        "-password"
    );

    const user = await User.findById({ _id: req.body.userId }).select(
        "-password"
    );

    let newData = loggedInUser.following.filter(
        (item) => req.body.userId !== item
    );
    loggedInUser.following = newData;
    loggedInUser.save();
    console.log(loggedInUser.following);

    newData = user.followers.filter((item) => req.body.user !== item);
    user.followers = newData;
    user.save();
    console.log(user.followers);

    res.json({ msg: "User Un followed Successfully", user });
};

exports.getAllUsers = async (req, res, next) => {
    const users = await User.find();

    res.json({ msg: "All Users Fetched Successfully", users });
};
exports.sendMessage = async (req, res, next) => {
    console.log("Sending Message");
};
