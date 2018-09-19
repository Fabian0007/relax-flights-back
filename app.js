//Node server for relax flights
var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose'),
    cors = require('cors');

// Connection to DB
mongoose.connect('mongodb://usuario_tech:usuario1234@ds027744.mlab.com:27744/relax-flights', function (err) {
    "use strict";
    if (err) {
        throw err;
    }
    console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

// Import Models and controllers
var ticketModel = require('./models/ticket');
var flightModel = require('./models/flight');
var ticketController = require('./controllers/ticketController');
var flightController = require('./controllers/flightController');


// Information Route
var router = express.Router();
router.get('/', function (req, res) {
    "use strict";
    console.log(req);
    res.send("Node server for Relax Flights");
});
app.use(router);

// API routes for tickets
var tickets = express.Router();

tickets.route('/tickets')
    .get(ticketController.findAllTickets)
    .post(ticketController.addTicket);

tickets.route('/tickets/:id')
    .get(ticketController.findByIdFlight);

tickets.route('/tickets/:id/:client')
    .put(ticketController.buyTicket);

tickets.route('/tickets-information/:client')
    .get(ticketController.findLastTicket);

tickets.route('/yourtickets/:client')
    .get(ticketController.findTickets);

app.use('/api', tickets);

// API routes for flights
var flights = express.Router();

flights.route('/flights')
    .get(flightController.findAllFlights)
    .post(flightController.addFlight);

flights.route('/flights/:id')
    .get(flightController.findFlightById);

app.use('/api', flights);

// Start server
app.listen(process.env.PORT, function () {
    'use strict';
    console.log("Node server running on PORT:" + process.env.PORT);
});