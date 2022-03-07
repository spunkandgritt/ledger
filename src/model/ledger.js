const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LedgerSchema = new Schema({
    date: Date,
    account_type: String,
    gl_account_name: String,
    description: String,
    vendor: String,
    debit: Number,
    credit: Number
});

const ledger = mongoose.model('ledger', LedgerSchema);

module.exports = ledger;