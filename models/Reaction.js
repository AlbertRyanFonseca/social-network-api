const { Schema, model } = require('mongoose');

const Thought = new Schema({
    reactionId: {

    },
    reactionBody: {
        type: String,
        required: true,

    },
    //username
    createdAt: {
        type: Date,

        required: true,
    },

});

module.exports = Thought;