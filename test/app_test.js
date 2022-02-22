const { doesNotMatch } = require('assert');
const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('the express app', ()=>{

    it('handles get request', (done)=>{
        request(app)
        .get('/api', {vidyut: 'there'})
        .end((err, response) => {
            //console.log(response);
            assert(response.body.hi === 'there');
            done();
        });
    });

});