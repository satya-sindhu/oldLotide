function eqArrays(arr1, arr2){
    for (let i = 0; i < arr1.length ; i++) {
      if (arr1[i] === arr2[i] && (i < arr1.length - 1)) {
        continue;
      }
      else if (arr1[i] === arr2[i] && (i === arr1.length - 1)) {
        return true;
      }
      else {
        return false
      }
    }
  }
  const assertArrayEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`:white_check_mark::white_check_mark::white_check_mark: Assertion Passed : ${(actual)} === ${(expected)}`);
    } else {
      console.log(`:octagonal_sign::octagonal_sign::octagonal_sign: Assertion Failed : ${(actual)} !== ${(expected)}`);
    }
  };
  const middle = function(arr) {
    let length = arr.length;
    if(length === 0 || length === 1 || length === 2){
      return []
    } else if (length % 2 === 0){
      let index = length / 2;
      return [arr[index - 1], arr[index]]
    } else {
      let index = Math.floor(length / 2);
      return [arr[index]];
    }
  }
  //Test//
assertArrayEqual(middle([1,2,3]),[2]);
assertArrayEqual(middle([1,2,3,4]), [2,3]);
assertArrayEqual(middle([]),[]);
assertArrayEqual(middle([1,2,3,4]),[2]); //false
assertArrayEqual(middle([1,2,3,4]),[2,3]);
assertArrayEqual(middle([1]),[]);
assertArrayEqual(middle([1,2]),[]);
assertArrayEqual(middle([1,2]),[1]); //false