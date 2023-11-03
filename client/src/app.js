import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import ShiftSchedule from './components/ShiftSchedule';
import TrainSchedules from './components/TrainSchedule';
import Navbar from './Navbar';


function App() {
  return (
    <Router>
      <div>
      <Navbar /> 
      <div className="container">
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile/:userId" component={UserProfile} />
          <Route path="/shift-schedule" component={ShiftSchedule} />
          <Route path="/train-schedules" component={TrainSchedules} />
          <Route path="/user-status/:userId" component={UserStatus} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
