const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    postId: Number,
    id: Number,
    name: String,
    email: String,
    body: String
});


module.exports = mongoose.model("Comment", commentSchema);
