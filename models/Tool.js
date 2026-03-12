const mongoose = require("mongoose");

const toolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  website: {
    type: String
  },

  logo: {
    type: String
  },

  category: {
    type: String
  },

  tags: {
    type: [String]
  },

  price: {
    type: Number,
    default: 0
  },

  upvotes: {
    type: Number,
    default: 0
  },

  approved: {
    type: Boolean,
    default: false
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, { timestamps: true });

module.exports = mongoose.model("Tool", toolSchema);