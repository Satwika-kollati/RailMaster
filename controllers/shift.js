const Shift = require('../models/shift');
const User = require('../models/userSchema');
const TrainScheduleService = require('../services/TrainService');

module.exports = {
  createShift: async (req, res) => {
    try {
      const { userId, departureTime, destination, trainNumber } = req.body;

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const shift = new Shift({
        user: userId,
        departureTime,
        destination,
        trainNumber,
      });

      await shift.save();
      res.status(201).json(shift);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create shift' });
    }
  },

  getShiftsByUser: async (req, res) => {
    try {
      const { userId } = req.params;

      const shifts = await Shift.find({ user: userId });
      res.status(200).json(shifts);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch shifts' });
    }
  },

  updateShift: async (req, res) => {
    try {
      const { shiftId } = req.params;
      const { destination, departureTime } = req.body;

      const shift = await Shift.findByIdAndUpdate(shiftId, { destination, departureTime }, { new: true });
      res.status(200).json(shift);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update shift' });
    }
  },

  allocateShift: async (req, res) => {
    try {
      const { supervisorId, userId, trainNumber, departureTime } = req.body;


      const supervisor = await User.findById(supervisorId);
      const user = await User.findById(userId);

      if (!supervisor || !user) {
        return res.status(404).json({ error: 'Supervisor or user not found' });
      }

      user.status = 'In Train';
      user.currentShift = {
        trainNumber,
        departureTime,
        destination,
      };

      await user.save();

      res.status(200).json({ message: 'Shift allocated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to allocate shift' });
    }
  },

  calculateOverworkPay: async (req, res) => {
    try {
      const { shiftId } = req.params;

      const shift = await Shift.findById(shiftId);
      if (!shift) {
        return res.status(404).json({ error: 'Shift not found' });
      }

      const overworkPay = calculateOverworkPay(shift);

      res.status(200).json({ overworkPay });
    } catch (error) {
      res.status(500).json({ error: 'Failed to calculate overwork pay' });
    }
  },

  getTrainSchedules: async (req, res) => {
    try {
      const schedules = await TrainScheduleService.getTrainSchedules();

      res.status(200).json(schedules);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch train schedules' });
    }
  },

  acceptRequest: async (req, res) => {
    try {
      const { userId, shiftId } = req.body;

     
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      user.status = 'In Train';
      user.currentShift = shiftId;

      await user.save();

      res.status(200).json({ message: 'Request accepted' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to accept request' });
    }
  },

  rejectRequest: async (req, res) => {
    try {
      const { userId } = req.body;


      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      user.status = 'Available';
      user.currentShift = null;

      await user.save();

      res.status(200).json({ message: 'Request rejected' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to reject request' });
    }
  },

  updateStatus: async (req, res) => {
    try {
      const { userId } = req.params;
      const { status } = req.body;

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      user.status = status;
      user.currentShift = null; 

      await user.save();

      res.status(200).json({ message: 'Status updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update status' });
    }
  },

  allocateReturnTrain: async (req, res) => {
    try {
      const { locoPilotId, assistantId, returnTrainNumber, returnDepartureTime } = req.body;


      const locoPilot = await User.findById(locoPilotId);
      const assistant = await User.findById(assistantId);

      if (!locoPilot || !assistant) {
        return res.status(404).json({ error: 'Loco pilot or assistant not found' });
      }


      if (locoPilot.status === 'Temporary Rest' && assistant.status === 'Temporary Rest') {
        locoPilot.currentShift = {
          trainNumber: returnTrainNumber,
          departureTime: returnDepartureTime,
          destination: locoPilot.homeTown,
        };
        assistant.currentShift = {
          trainNumber: returnTrainNumber,
          departureTime: returnDepartureTime,
          destination: assistant.homeTown,
        };

        locoPilot.status = 'In Train';
        assistant.status = 'In Train';

        await locoPilot.save();
        await assistant.save();

        res.status(200).json({ message: 'Return train allocated successfully' });
      } else {
        res.status(400).json({ error: 'Loco pilot and assistant must be in Temporary Rest status' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to allocate return train' });
    }
  },

};
