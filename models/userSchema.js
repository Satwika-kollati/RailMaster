const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['Employee', 'Supervisor'],
  },
  homeTown: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'Available',
  },
});

module.exports = mongoose.model('User', userSchema);
export default User;