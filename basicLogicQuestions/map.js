//Map function is used to change the total elements value.
//The map() function in JavaScript is a higher-order function that operates on arrays. 
//It takes a callback function as its argument and applies that function to each element of the array, creating a new array with the results of calling the callback function on each element.
// let arr = [10,20,30,40];
// function multipleIntoTen(num){
//     return num*10;
// }
// const output = arr.map(multipleIntoTen);
// console.log(output);

//another way optimization ****

// let arr = [10, 20, 30, 40];
// const output = arr.map(function (num) {
//     return num * 10;
// })
// console.log(output);

//anothe way optimization  ****
const arr = [
    { firstname: "itla", lastname: "venkatasai", age: 21 },
    { firstname: "itla", lastname: "naresh", age: 27 },
    { firstname: "vemula", lastname: "tejashwini", age: 30 },
    { firstname: "itla", lastname: "naveena", age: 31 },
    { firstname: "porandla", lastname: "raju", age: 21 },
    { firstname: "adpu", lastname: "laxmi", age: 23 },
    { firstname: "adpu", lastname: "ravali", age: 27 },
    { firstname: "adpu", lastname: "rajitha", age: 27 }
]
const output = arr.filter((x) => x.firstname == "adpu").map((x)=>x.firstname = "adepu");
console.log(arr);
