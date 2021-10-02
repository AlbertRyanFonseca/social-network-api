const { Schema, model } = require('mongoose');

const User = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },

});

module.exports = User;