var fib = function (n) {
    if(n==0){
        return 0;
    }
    const arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[arr.length-1];
}
const output = fib(2);
console.log(output);