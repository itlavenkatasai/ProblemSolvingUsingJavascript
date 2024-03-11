let n = 5;
for (let i = 1; i <= n; i++) {
    for (let j = 2 * n; j > (2 * i); j--) {
        process.stdout.write("-");
    }
    for (let k = 1; k <= (2 * i) - 1; k++) {
        process.stdout.write("* ")
    }
    console.log();
}
for (let i = 1; i < n; i++) {
    for (let j = 1; j <= 2 * i; j++) {
        process.stdout.write(" ");
    }
    for (let k = (2 * n) - 1; k > i+1; k--) {
        process.stdout.write("* ");
    }
    console.log()
}
