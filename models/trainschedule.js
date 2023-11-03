const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainScheduleSchema = new Schema({
  trainNumber: {
    type: String,
    required: true,
    unique: true,
  },
  departureTime: {
    type: Date,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('TrainSchedule', trainScheduleSchema);
