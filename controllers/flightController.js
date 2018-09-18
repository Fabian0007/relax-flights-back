//Controller for the model flight
var mongoose = require('mongoose');
var FlightsModel  = mongoose.model('Flights');

//POST - Insert a new flight
exports.addFlight = function (req, res) {
    'use strict';
    console.log('POST /flight');
    var flight = new FlightsModel({
        day:    req.body.day,
        month:    req.body.month,
        year:    req.body.year,
        hour:    req.body.hour,
        minute:    req.body.minute,
        destination:  req.body.destination,
        start:  req.body.start
    });
    flight.save(function (err, flight) {
        if (err) {
            return res.send(500, err.message);
        }
        res.status(200).jsonp(flight);
    });
};

//GET - Return all flights
exports.findAllFlights = function (req, res) {
    'use strict';
    console.log(req);
    FlightsModel.find(function (err, flights) {
        if (err) {
            return res.send(500, err.message);
        }
        FlightsModel.populate(flights, {path: "flights"}, function (err, flights_response) {
            if (err) {
                return res.send(500, err.message);
            }
            console.log('GET /flights');
            res.status(200).send(flights_response);
        });
    });
};

//GET - Return a specific flight
exports.findFlightById = function (req, res) {
    'use strict';
    console.log(res);
    FlightsModel.findById(req.params.id, function (err, flight) {
        if (err) {
            return res.send(500, err.message);
        }
        console.log('GET /flight/' + req.params.id);
        res.status(200).jsonp(flight);
    });
};