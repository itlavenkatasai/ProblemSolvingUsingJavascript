// function palindrome(s) {
//     if (s.length <= 1) return true;
//     if (s.toString().split("").reverse().join("") === s.toString()) { return true } else { return false }
// }
// const output = palindrome("ADDAs");
// console.log(output);
//fibonacci  0,1,1,2,3,5,8,13,21,34,55........
// arr = [1,2,3,4,5,0]
//[3,2,1,8,2,6]
//[8,2,1,3,2,6]
// for (let i = 0; i < arr.length; i++) {
//     let max = i;
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] > arr[max]) {
//             max = j;
//         }
//     }
//     let r = arr[i];
//     arr[i] = arr[max];
//     arr[max] = r;
// }

// console.log(arr);
str = "My name is Venkatsai.";
// My is name venkatsai.
str = str.split(" ");
for (let i = 0; i < str.length; i++) {
    let min = i;
    for (let j = i + 1; j < str.length; j++) {
        if (str[j].length < str[min].length) {
            min = j;
        }
    }
    let r = str[i];
    str[i] = str[min];
    str[min] = r;
}
console.log(str.join(" "));




