var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
var ticketSchema = new Schema(
        {
            category: {type: String},
            number: {type: Number},
            client: {type: String},
            sold_day: {type: Number},
            flight: {type: Schema.ObjectId, ref: "Flights"},
            price: {type: Number},
            sold_month: {type: Number},
            sold_year: {type: Number}
        }
    );

module.exports = mongoose.model('Tickets', ticketSchema);