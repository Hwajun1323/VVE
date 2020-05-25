const mongoose = require('mongoose')
  mongoose.connect('mongodb://127.0.0.1')


//create Schema
const UserSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: {type: String},
});

const User = mongoose.model('myuser', UserSchema);
module.exports = User;