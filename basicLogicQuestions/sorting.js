let n = 7;
function fibonacci(n) {
    for (let i = 0; i < n; i++) {
        let a = 0;
        let b = 1;
        let arr = [];
        if (n <= 1) {
            arr.push(a);
            arr.push(b);
            return arr;
        }
        let i = 1;
        arr.push(a);
        arr.push(b);
        while (i < n) {
            c = a + b;
            a = b;
            b = c;
            arr.push(c);
            i = i + 1;
        }
        return arr;
    }
}
const output = fibonacci(n);
console.log(output);