// 
var romanToInt = function (s) {
    let obj1 = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let re = 0;
    s = s.split(""); // Split the input string into individual characters
    for (let i of s) {
        if (i in obj1) {
            re += obj1[i];
        } else {
            return "Invalid Roman numeral";
        }
    }
    return re;
};
console.log(romanToInt("III"))