//given input string is "the sky is blue";
//it return "the blue is sky the". reverse the words in same order

// let str = "the sky is blue";
// str = str.split(" ");
// for (let i = 0; i < Math.floor(str.length / 2); i++) {
//     let temp = str[i];
//     str[i] = str[str.length - 1 - i];
//     str[str.length - 1 - i] = temp;
// }
// console.log(str.join(" "));
const reverseWord = function (s) {
    const splitS = s.split(" ");
    const stack = [];
    for (let i of splitS) {
        stack.push(i);
    }
    let finalS = " ";
    while (stack.length) {
        let current = stack.pop();
        if (current) {
            finalS += " " + current;
        }
    }
    return finalS.trim();
}
console.log(reverseWord("My name is venkatasai"));