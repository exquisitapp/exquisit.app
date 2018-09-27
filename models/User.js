const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  avatarName: String,
  avatarPath: {type: String, default:"/images/user_placeholder.png"}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


const User = mongoose.model('User', userSchema);
module.exports = User;
