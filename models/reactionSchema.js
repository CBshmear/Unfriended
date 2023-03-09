const { Schema } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    new: true,
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  userName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //getter for timestamp
  },
});

module.exports = reactionSchema;
