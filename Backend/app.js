const URI = "mongodb://127.0.0.1:27017/Instagram";
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 5000;
const bodyParser = require("body-parser");
mongoose.connect(URI, () => {
    console.log("Connected to Instagram Database");
});

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/api", require("./routes/userRoutes"));
app.use("/post", require("./routes/postRoutes"));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
