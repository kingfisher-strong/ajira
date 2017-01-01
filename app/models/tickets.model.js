var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ticketSchema = new Schema({
    createdBy: String,
    description: String,
    severity: Number,
    status: String,
    cancelledReason: String,
    cancelledOtherDescription: String,
    comment: String
});
 module.exports = mongoose.model('Ticket', ticketSchema);
