const mongoose = require('mongoose');
const validator = require('validator');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: (v) => {
        return validator.isUrl(v);
      }
    }
  },
  owner: {
    type: mongoose.ObjectId,
    required: true
  },
  likes: [{
    type: [mongoose.ObjectId],
    default: []
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('card', cardSchema);
