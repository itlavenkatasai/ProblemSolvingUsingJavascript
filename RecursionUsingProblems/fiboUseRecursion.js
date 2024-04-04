/*
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.
The sequence starts as follows: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on.
if a=0,b=1,c=a+b,a=b,b=c

i want particuler fiboo number f(n) =  f(n-1)+f(n-2);
*/

// i write a code for particuler fiboo number.

// this code without recursion.
// var fibo = function (n) {
//     if (n == 0) return n;
//     let arr = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         arr.push(arr[i - 1] + arr[i - 2]);
//     }
//     return arr[n];
// }
// console.log(fibo(10));

// this code using recursion

var fibo = function (n) {
    if (n <= 1) return n;
    return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(10));