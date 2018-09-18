//Controller for the model ticket
var mongoose = require('mongoose');
var TicketsModel  = mongoose.model('Tickets');

//GET - Return all tickets
exports.findAllTickets = function (req, res) {
    'use strict';
    console.log(req);
    TicketsModel.find({client: ""}, function (err, tickets) {
        if (err) {
            return res.send(500, err.message);
        }
        TicketsModel.populate(tickets, {path: "tickets"}, function (err, tickets_response) {
            if (err) {
                return res.send(500, err.message);
            }
            console.log('GET /tickets');
            res.status(200).send(tickets_response);
        });
    });
};

//GET - Return all tickets of a specific flight and and that haven't been purchased (client = "")
exports.findByIdFlight = function (req, res) {
    'use strict';
    TicketsModel.find({flight: req.params.id, client: ""}, function (err, tickets) {
        if (err) {
            return res.send(500, err.message);
        }
        console.log('GET /tickets/' + req.params.id);
        res.status(200).jsonp(tickets);
    });
};

//POST - Insert a new ticket
exports.addTicket = function (req, res) {
    'use strict';
    console.log('POST /tickets/');
    var ticket = new TicketsModel({
        flight: req.body.flight,
        price:  req.body.price,
        category:  req.body.category,
        number: req.body.number,
        client: req.body.client,
        sold_day: req.body.sold_day,
        sold_month: req.body.sold_month,
        sold_year: req.body.sold_year
    });
    ticket.save(function (err, ticket) {
        if (err) {
            return res.send(500, err.message);
        }
        res.status(200).jsonp(ticket);
    });
};

//PUT - Update the client in a ticket register
exports.buyTicket = function (req, res) {
    'use strict';
    TicketsModel.update({'_id': req.params.id},
        {
            client: ""
        }, function (err) {
            if (err) {
                return res.send(500, err.message);
            }
            console.log('UPDATE /tickets/' + req.params.id);
            return res.status(200);
        });
};