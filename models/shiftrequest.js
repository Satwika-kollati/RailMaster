const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shiftRequestSchema = new Schema({
  supervisor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  employee: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  shift: {
    type: Schema.Types.ObjectId,
    ref: 'Shift',
  },
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected'],
    default: 'Pending',
  },
});

module.exports = mongoose.model('ShiftRequest', shiftRequestSchema);
