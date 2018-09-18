var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var flightSchema = new Schema({
    day:    { type: Number },
    month: {type: Number},
    year: {type: Number},
    hour: { type: Number},
    minute: { type: Number},
    destination:     { type: String },
    start:  { type: String }
});

module.exports = mongoose.model('Flights', flightSchema);