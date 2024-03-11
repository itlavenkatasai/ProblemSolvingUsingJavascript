// 5=5*4*3*2*1 = 120
function fibo(n) {
    if (n <= 1) return n;
    return fibo(n - 1) + fibo(n - 2);
}
const output = fibo(2);
console.log(output);