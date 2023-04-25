# FlightBooking
FlightBooking

## Api Workings

   - Register user ->    post : localhost:8088/api/register
   - Login user ->    post : localhost:8088/api/login
   - list of all available flights. -> get  : localhost:8088/api/flight
   - specific flight. -> get  : localhost:8088/api/flights/:id
   - add new flight -> post  : localhost:8088/api/flights
   - update the details of a specific flight -> Patch  : localhost:8088/api/flights/:id
   - Delete a Specific flight -> Delete : localhost:8088/api/flights/:id
   - all flight bookings -> get : localhost:8088/api/dashboard
   - post a flight booking -> post : localhost:8088/api/booking
