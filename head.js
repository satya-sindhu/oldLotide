const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("✅ " + `Assertion Passed:  ${actual}  ===  ${expected}`);
    } else {
      console.log("🔴 " + `Assertion Failed:  ${actual}  !==  ${expected}`);
    }
  };

  const head = function(input_value) {
      head_value = input_value[0];
      //console.log(head_value)
      return head_value
  }


assertEqual(head([5,6,7]), 6)
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs")