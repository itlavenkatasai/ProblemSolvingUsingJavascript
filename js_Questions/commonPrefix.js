let arr = ['flower', 'flow','fly'];
let short = arr[0];
let common = "";
for (let i = 0; i < short.length; i++) {
    let char = short[i];
    if (arr.every(str => str[i] === char)) {
        common += char;
    } else {
        break;
    }
}
console.log(common);

