let input = [3,1,2,10,1];
let output = [];
let count = 0;
// for(let i=0;i<input.length;i++){
//     for(let j=i;j<=i;j++){
//         count = count + input[j];
//     }
//     output.push(count);
// }

for(let i=0;i<input.length;i++){
    count = count + input[i];
    output.push(count);
}
console.log(output);