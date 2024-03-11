function reverseString(s) {
    if (s.length <= 1) {
        return s;
    }
    return s[s.length - 1] + reverseString(s.slice(0,-1));
}
const output = reverseString("venkatasai");
console.log(output);