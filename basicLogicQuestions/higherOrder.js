// const radius = [2, 3, 4, 5];
// const area = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }
// const CircumFerence = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;

// }
// const Diameter = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i]);
//     }
//     return output;
// }
// const CaluclateArea = area(radius);
// const CaluclateCircumFerence = CircumFerence(radius);
// const CaluclateDiameter = Diameter(radius);
// console.log("Area", CaluclateArea);
// console.log("circumference", CaluclateCircumFerence);
// console.log("diameter", CaluclateDiameter);

//above code write using higher order function

const radius = [2, 3, 4, 5];
const area = function (radius) { //call back function
    return Math.PI * radius * radius;
}
const circumference = function (radius) { //call backs
    return 2 * Math.PI * radius;
}
const diameter = function (radius) {  //callback
    return 2 * radius;
}
const calculate = function (radius, logic) { //higher order function it means a function takes one (or) more functions as an arguments(parameters)
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}
console.log("area", calculate(radius, area));
console.log("circumference", calculate(radius, circumference));
console.log("diameter", calculate(radius, diameter));
