var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ticketSchema = new Schema({
    createdBy: String,
    description: String,
    severity: number,
    status: String,
    cancelledReason: String,
    cancelledOtherDescription: String,
    comments: String
});
 mongoose.exports = mongoose.model('Ticket', ticketSchema);
