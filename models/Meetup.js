const mongoose = require("mongoose");

const MeetupSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    Sport: {
        type: String,
    },
    likes: {
        type: Number,
        required: true,
    },
    interested: {
        type: Array,
    },
    going: {
        type: Array,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
})