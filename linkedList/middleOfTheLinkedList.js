let head = [1, 2, 3, 4, 5, 6];
let output = [];
for (let i = Math.floor(head.length / 2); i < head.length; i++) {
    output.push(head[i]);
}
console.log(output);