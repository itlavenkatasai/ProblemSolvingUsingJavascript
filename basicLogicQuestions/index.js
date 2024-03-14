// console.log("i am global",a);
// //function scope

// function sum() {
//     let fun1 = 10;
//     let fun2 = 20;
//     console.log(fun1 + fun2);
// }
// // console.log("iam function",fun1 + fun2);//reference error fun1,fun2 is not defined.
// //block scope

// if (a=23) {
//     let block = 45;
//     console.log(block);
// }
// // console.log("i am block",block); //reference error block is not defined.

// //global scope

// var a = 23;
// var a = 0;  
// while(a < 10)  
// {  

//     a++;
//     console.log(a + " ");  
//     if(a == 5)  
//         continue;  
// }  
// var num = 10;
// // YOUR CODE GOES HERE
// var i = 1;
// while (i <= num) {
//     if (i % 2 == 0) {
//         i++;
//         continue
//     }else{
//         console.log(i)
//     }
//     i++;
// }
// var a = 6;
// var arr = [];
// while(a>0){
//     m=a%2;
//     arr.push(m);
//     a=Math.floor(a/2);
// }
// console.log(arr.reverse().join(""))
// var A=[2,4,6,20];
// var B=A.map((x)=>x*2);
// var C=B.filter((x)=>{
//     if(x%8 == 0){
//         return x;
//     }
// });
// console.log(C);
// function getKeyByValue(object, value) {
//     for (let prop in object) {
//         if (object.hasOwnProperty(prop)) {
//             if (object[prop] === value)
//                 return prop;
//         }
//     }
// }

// const exampleObject = {
//     "Maths": 120,
//     "Pysics": 240,
//     "Chemistry": 60
// };
// var check = exampleObject['Maths'];
// for (let i in exampleObject) {
//     if(check<exampleObject[i]){
//         check=exampleObject[i];
//     }
// }
// for (let i in exampleObject){
//     // console.log(i);
//     if(exampleObject[i] == check){
//         console.log(i);
//     }
// }
// function recuur(n) {
//     if (n == 0) {
//         return 0;
//     }
//     else {
//         console.log(n + recuur(n - 1));
//     }
// }
// const results = recuur(3);
// console.log(results);
// var a = "10";
// console.log(a);
// if (a == 10) {
//     console.log("true");
// }
// else {
//     console.log("false");
// }
// obj1 = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
// let s = 'MCMXCIV'.split("");
// let x = 0;
// for (let i = 0; i < s.length; i++) {
//     x = x + obj1[s[i]];
// }
// console.log(x);
let str = "v@@enk@at".split("");
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let f_i = 0;
let l_i = str.length - 1;
for (let i = f_i; i < l_i; i++) {
    if (!(alphabet.includes(str[f_i].toUpperCase()))) {
        f_i++;
        continue;
    }
    if (!(alphabet.includes(str[l_i].toUpperCase()))) {
        l_i--;
        continue;
    }
    temp = str[f_i];
    str[f_i] = str[l_i];
    str[l_i] = temp;
    f_i++;
    l_i--;
}
console.log(str.join(""));