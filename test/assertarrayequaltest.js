const assertarraysEqual = require('../assertarraysEqual');
const eqarrays = require('../eqarrays');


assertarraysEqual([1, 2, 3], [1, 2, 3]);
  assertarraysEqual([3, 2, 3], [3, 2, 3]);
  assertarraysEqual([4, 2, 3], [1, 2, 3]);
  assertarraysEqual([1, 2, 3], [4, 2, 3]);
