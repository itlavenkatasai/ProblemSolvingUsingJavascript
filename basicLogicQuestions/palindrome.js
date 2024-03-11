function palindrome(x) {
    return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}
const output = palindrome(1131);
console.log(output);