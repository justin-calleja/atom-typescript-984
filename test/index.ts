import * as chai from  'chai';
import { hello } from '../lib';

describe('issue 984', function() {
  it('is not clear how to write tests in Typescript (with a different compilation context)', function () {
    chai.assert.equal(hello('basarat'), 'hello basarat');
    chai.assert.equal(hello(), 'hello world');
  });
});
