/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import https from 'https';
import assert from 'assert';
import server from '../app'
import { omdbService } from '../services';

describe('Backend', () => {
  it('should return 200', (done) => {
    https.get('https://expressjs-stockbit.herokuapp.com/', (res) => {
      assert.strictEqual(200, res.statusCode);
      done();
    });
  });
});

describe('Testing Search Service', () => {
  it('should return not null', (done) => {
      let query = {
        apikey: process.env.APIKEY,
        name: "Batman"
      }
      
      omdbService.search(null, query, (payload) => {
        assert.notEqual(payload, null)
        done();
      })
    
  });
});
