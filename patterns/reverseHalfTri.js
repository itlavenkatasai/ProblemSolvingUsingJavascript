let n = 10;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
        process.stdout.write(" ");
    }
    for (let j = n; j > i; j--) {
        process.stdout.write("*");
    }
    console.log()
}