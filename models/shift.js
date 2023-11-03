const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shiftSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  departureTime: {
    type: Date,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  trainNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Shift', shiftSchema);
