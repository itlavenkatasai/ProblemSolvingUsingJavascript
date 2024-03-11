function countdown(n) {
    arr = [];
    if (n <= 1) return n;
    if (n > 1) {
        arr.push(n);
    }
    return arr +" " + countdown(n - 1);
}
const output = countdown(20);
console.log(output);