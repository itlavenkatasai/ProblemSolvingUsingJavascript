//The filter() function in JavaScript is another higher-order function used with arrays. It iterates over each element in an array and applies a test function. If the test function returns true for an element, that element is included in the resulting array. If the test function returns false, the element is excluded.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function greaterThanFive(num){
//     if(num>5){
//         return num;
//     }
// }
// const output = arr.filter(greaterThanFive);
// console.log(output);
//optimized above code.
// const output = arr.filter(function (x) {
//     return x > 5;
// });
// console.log(output);
//again optimization above code
const output = arr.filter((x) => x > 5);
console.log(output);