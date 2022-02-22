const LedgerController = require('../controller/ledger_controller');

module.exports = (app)=> {
    app.get('/api', LedgerController.greeting);
    app.post('/api/ledger', LedgerController.create);
};