const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxLength: 280,
    minLength: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //getter to format timestamp on query
  },
  userName: {
    type: String,
    required: true,
  },
});
