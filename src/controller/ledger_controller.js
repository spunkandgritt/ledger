const ledger = require('../model/ledger');



module.exports = {
    greeting(req, res){
        console.log("vidyut");
        res.send ({hi: 'there'});
        
    },
    create(req, res){
        const ledProps = req.body;
        console.log(ledProps);
       ledger.create(ledProps)
        .then(something => res.send(something));
    }
}