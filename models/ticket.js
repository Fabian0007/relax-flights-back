var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
var ticketSchema = new Schema(
        {
            category: {type: String},
            number: {type: Number},
            client: {type: String},
            flight: {type: Schema.ObjectId, ref: "Flights"},
            price: {type: Number},
            date_sold: {type: Date}
        }
    );

module.exports = mongoose.model('Tickets', ticketSchema);