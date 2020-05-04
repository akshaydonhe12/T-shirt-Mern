const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    trim: true,
    maxlength: 32,
    uniq: true,
    required: true
},
    {timestamps: true}
)

module.exports = mongoose.model("Category",categorySchema );