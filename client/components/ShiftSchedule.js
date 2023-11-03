import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../src/app.css'; 

function ShiftSchedule() {
  const [shifts, setShifts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/shifts')
      .then((response) => {
        setShifts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching shift schedules:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Shift Schedules</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {shifts.map((shift) => (
            <div key={shift._id} className="card">
              <div className="card-body">
                <h5 className="card-title">Shift Details</h5>
                <p>Employee: {shift.employeeName}</p>
                <p>Depot: {shift.depotName}</p>
                <p>Status: {shift.status}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShiftSchedule;
