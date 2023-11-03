const axios = require('axios');

const IRCTC_API_BASE_URL = 'http://indianrailapi.com/api/v2/TrainSchedule';
const API_KEY = '<your_api_key>'; 

const TrainScheduleService = {
  getTrainScheduleByTrainNumber: async (trainNumber) => {
    try {
      const response = await axios.get(`${IRCTC_API_BASE_URL}/apikey/${API_KEY}/TrainNumber/${trainNumber}`);

      if (response.status === 200) {
        return response.data; 
      } else {
        throw new Error('Failed to fetch train schedule');
      }
    } catch (error) {
      throw new Error('Failed to fetch train schedule');
    }
  },

};

module.exports = TrainScheduleService;
