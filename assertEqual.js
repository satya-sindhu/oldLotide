const assertEqual = function(actual, expected) {
if (actual===expected)
{
    console.log( `Assertion Passed:  ${actual}  === ${expected}`);
}
};


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("lighthouselabs", "lighthouselabs");
assertEqual(2,5);