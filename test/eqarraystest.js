const assertEqual = require('../assertEqual');
const eqarrays = require('../eqArrays');
assertEqual(eqarrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqarrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqarrays(["1", "2", "3"], ["1", "2", 3]), false) // => false

assertEqual(eqarrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
