# Node server for relax flights

GET /api/flights/ <- return all the flights 

GET /api/flights/:id <- Return a specific flight 

POST /api/flights <- Insert a new flight 

GET /api/tickets/ <- Return all tickets 

POST /api/tickets/ <- Insert a new ticket 

GET /api/tickets/:id <- Return all tickets of a specific flight and and that haven't been purchased (client = "") 

PUT /api/tickets/ <- Update the client in a ticket register
