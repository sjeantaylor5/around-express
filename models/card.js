const mongoose = require('mongoose');
const userSchema = require('./user.js');
// const regex = /(http|https):\/\/(www.)?[a-zA-Z0-9._~:/?%#[]@!$&'()*+,;=]{2,256}\#?/

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
    // validate: {
    //  validator: function(v) {
    //    return regex.test(v);
    //  }
    // }
  },
  owner: {
    userSchema,
    required: true
  },
  likes: [{
    userSchema,
    default: []
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('card', cardSchema);
