// arr = [1, 2, 3, 4, 5];
// const output = arr.map((x) => {
//     return "number " + x;
// })
// console.log(output);
const obj = [{ name: 'ABC', age: 10 }, { name: 'BCD', age: 20 }, { name: 'XYZ', age: 40 }];
const output = obj.filter((x) => {
    return x.age > 15 && x.age < 50;
})
console.log(output);