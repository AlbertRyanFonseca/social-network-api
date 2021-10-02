const { Schema, model } = require('mongoose');

const Thought = new Schema({
    thoughtText: {
        type: String,
        required: true,
        trim: true

    },
    createdAt: {
        type: Date,

        required: true,
        unique: true,
    },

});

module.exports = Thought;