var romanToInt = function (s) {
    obj1 = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    s = s.split("");
    let x = 0;
    for (let i = 0; i < s.length; i++) {
        x = x + obj1[s[i]];
    }
    return x;
};
const output = romanToInt("MCMXCIV");
console.log(output);