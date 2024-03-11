let n = 6;
let string = "python";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
        process.stdout.write(string[j]);
    }
    console.log();
}
for (let i = n; i > 0; i--) {
    for (let j = 0; j < i-1; j++) {
        process.stdout.write(string[j]);
    }
    console.log();
}