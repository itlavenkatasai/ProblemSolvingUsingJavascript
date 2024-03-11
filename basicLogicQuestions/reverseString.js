const name = "venkata sai ram";
const splitName = name.split(" ");
// for (let i = 0; i < splitName.length; i++) {
//     r = splitName[i].split("").reverse().join("");
//     output.push(r);
// }
// console.log(output.join(" "));

function reverseString(arr, index = 0, output = []) {
    if (index === arr.length) return output;
    var reversed = arr[index].split("").reverse().join("");
    output.push(reversed);
    // console.log(output)
    return reverseString(arr, index + 1, output)
}
const output = reverseString(splitName);
console.log(output.join(" "));


