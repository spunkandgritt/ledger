const assert = require("assert");
const ledger = require('../src/model/ledger');

describe('saving records',(done)=>{

    it('save ledger',()=>{

        const leder = new ledger({
            date: '1/1/2022',
            account_type: "new",
            gl_account_name: "0001",
            vendor: "AOTax",
            debit: 100           
        });
        leder.save()
        .then(()=>{
            assert(!leder.isNew);
            done();
        });
    });


});