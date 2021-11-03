//const head = require('../head');

//TEST CODE
// ("Lighthouse Labs", "Bootcamp");
// head(1, 1);
// head("Bootcamp", "Bootcamp");
// head("bootcamp", "Bootcamp");
// head(1, 100);
//head[1,2,3,4];
const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});