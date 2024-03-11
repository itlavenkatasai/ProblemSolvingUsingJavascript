//In JavaScript, primitive data types are passed by value.
//Primitive date types hold only one type of value.
// pass by value is when i pass vairable value to the function it takes only value but not memory address(reference) of the vairable.
var a = 10;
var b = 20;
function sum(a, b) {
    a = a + 10;
    b = b + 10;
    return a + b;
}
console.log("before calling function a,b values", a, b);
const output = sum(a, b);
console.log("after calling function a,b values", a, b);
console.log(output);
