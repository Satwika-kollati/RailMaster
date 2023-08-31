## RailMaster
# Problem:  
The process of Allocation of Shifts for Railway employees is done mostly manually and is a hectic process due to the constraints that an employee will be travelling only up-to a certain distance, and need proper rest until he takes duty for next train, and he should also be returning to the home town. There is documentation that a train should go at particular speeds at particular places, and stop when signal is given. This is also done on paper. 

# How this project ains to solve those problems by providing the features:

1.Authentication and Authorization for Railway Employees and Supervisors. <br> 
2.Profile for railway employees which show -their details, the depo's in between which they travel-which remain constant, location they are currently in, the total distance they travelled on weekly, monthly basis -can be used for their salary calculation. <br> 
3.Status of Railway Employees-Show if they're Available/In Train/One day-Rest/Temporary Rest/Leave. <br> 
4.Temporary Rest if they are in a location and need to to return to hometown by another train as part of duty itself. <br> 
5.One day Rest if they have a done a complete shift. sending notice to change their state from rest to available if time exceeds. <br> 
6.Getting details of trains Schedules from Railway API. Supervisor will be sending Shift Acceptance requests to all the available officers and officers in temporary rest for a particular train based on their location, and the time of departure of that train. <br> 
7.Any officer can accept request (if accepted, request to be closed for all other employees) or reject the request. <br> 
8.Calculating the amount of overwork pay based on the distance they travelled. <br> 
9.Using the Train Live Status API and coordinating it with the current train in which the officer is travelling, showing the speed they should maintain at a particular instance. <br> 
10.Making sure that the loco pilot and assistant of his are allotted same return train if they are coming from temporary rest to hometown.
