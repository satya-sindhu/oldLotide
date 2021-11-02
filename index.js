const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');
const without = require('./without');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const findkeyByValue = require('./findkeyByValue');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');


module.exports = {
    head: head,
    tail: tail,
    middle: middle,
    assertEqual: assertEqual,
    eqArrays: eqArrays,
    assertArraysEqual: assertArraysEqual,
    eqObjects: this.eqObjects,
    assertObjectsEqual:assertObjectsEqual,
    without: without,
    countOnly: countOnly,
    countLetters: countLetters,
    findKey: findKey,
    findkeyByValue: findkeyByValue,
    letterPositions: letterPositions,
    takeUntil: takeUntil
};