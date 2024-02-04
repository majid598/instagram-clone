const jwt = require("jsonwebtoken");
const User = require("../models/User");
const key = "raju@programmer";

exports.isAuthenticated = async (req, res, next) => {
    const { token } = req.body;
    
    if (!token)
        return res
            .status(400)
            .json({ msg: "Please Login", success: false });
    try {
        const decoded = jwt.verify(token, key);
        req.body.user = decoded.id;
        next();
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
};
