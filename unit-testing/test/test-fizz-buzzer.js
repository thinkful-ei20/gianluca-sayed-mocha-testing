'use strict';

const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer test', () => {
  it('should give correct output for given input', () => {
    const normalCases = [
      {num: 1, expected: 1},
      {num: 3, expected: 'fizz'},
      {num: 5, expected: 'buzz'},
      {num: 15, expected: 'fizz-buzz'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should give error if input isnt a number', () => {
    const badCases = [
      {num: '1', expected: 1},
      {num:'3', expected: 'fizz'},
      {num:'5', expected: 'buzz'},
      {num: '15', expected: 'fizz-buzz'}
    ];

    badCases.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input.num);
      }).to.throw(Error);
    });
  });
});