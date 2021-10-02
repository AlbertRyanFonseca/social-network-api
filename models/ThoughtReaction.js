const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//Reaction Schema
const Reaction = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: [280, 'Max characters of 280 is allowed.']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
    },
    {
        toJSON: {
            getters: true
        },

    }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            trim: true,
            minLength: [1, 'Must be between 1 and 280 characters'],
            maxLength: [280, 'Must be between 1 and 280 characters']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,

        },
        reactions: [Reaction]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(() => {

});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;