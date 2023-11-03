const express = require('express');
const router = express.Router();
const shift = require('../controllers/shift');

router.post('/create', shift.createShift);

router.get('/user/:userId', shift.getShiftsByUser);

router.put('/:shiftId', shift.updateShift);

router.post('/allocate', shift.allocateShift);

router.get('/calculate/:shiftId', shift.calculateOverworkPay);

router.get('/schedules', shift.getTrainSchedules);

router.post('/accept-request', shift.acceptRequest);

router.post('/reject-request', shift.rejectRequest);

router.put('/update-status/:userId', shift.updateStatus);

router.post('/allocate-return-train', shift.allocateReturnTrain);

module.exports = router;
