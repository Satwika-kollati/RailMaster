import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../src/app.css'; 


function TrainSchedules() {
  const [trainSchedules, setTrainSchedules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/train-schedules')
      .then((response) => {
        setTrainSchedules(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching train schedules:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Train Schedules</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {trainSchedules.map((train) => (
            <div key={train._id} className="card">
              <div className="card-body">
                <h5 className="card-title">Train Details</h5>
                <p>Train Number: {train.trainNumber}</p>
                <p>Departure Time: {train.departureTime}</p>
                <p>Destination: {train.destination}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TrainSchedules;
