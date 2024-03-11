let n = 5;
for (let i = n; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
        process.stdout.write(" ");
    }
    for (let k = n; k >= i; k--) {
        process.stdout.write("* ");
    }
    console.log();
}
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < i + 1; j++) {
        process.stdout.write(" ");
    }
    for (let k = n; k > i + 1; k--) {
        process.stdout.write("* ")
    }
    console.log();
}