const mongoose = require('mongoose');
const assert = require('assert');
before((done)=>{
    mongoose.connect('mongodb://localhost/ledger_test');
    mongoose.connection
        .once('open', ()=>{console.log("good to go"); done();})
        .on('error', (error)=>{
            console.warn('warning', error)
        });
});

beforeEach((done)=>{
    mongoose.connection.collections.ledgers.drop(()=>{
        done();
    });
});

