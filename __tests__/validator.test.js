'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    let str = 'yes';
    expect(validator.isString(str)).toBeTruthy();
  });

  it('numbers', () => {
    let num = 1;
    expect(validator.isString(num)).toBeFalsy();
  });

  it('arrays', () => {
    let arr = ['a'];
    expect(validator.isString(arr)).toBeFalsy();
  });

  it('objects', () => {
    let obj = {x:'y'};
    expect(validator.isString(obj)).toBeFalsy();
  });

  it('booleans', () => {
    let func = () => {};
    expect(validator.isString(func)).toBeFalsy();
  });

  it('functions', () => {
    let bool = false;
    expect(validator.isString(bool)).toBeFalsy();
  });

});

describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(true).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(true).toBeFalsy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(true).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(true).toBeFalsy();
  });

  // TODO: Cover so, so many more cases

});

