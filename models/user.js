const mongoose = require('mongoose');
// const regex = /(http|https):\/\/(www.)?[a-zA-Z0-9._~:/?%#[]@!$&'()*+,;=]{2,256}\#?/

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  avatar: {
    type: String,
    required: true,
    // validate: {
    //  validator: function(v) {
    //    return regex.test(v);
    //  }
    // }
  }
});

module.exports = mongoose.model('user', userSchema);
