let romanObj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000

}
let input = "MCMXCIV"; 
let output = 0
// I ==> V || X subtract
// X ==> L || C subtract
// C ==> D || M subtract
for (let i = 0; i < input.length; i++) {
    if (input[i] in romanObj) {
        if ((input[i - 1] === "I" && (input[i] === "V" || input[i] === "X")) ||
            (input[i - 1] === "X" && (input[i] === "L" || input[i] === "C")) ||
            (input[i - 1] === "C" && (input[i] === "D" || input[i] === "M"))) {
            output = output + ((romanObj[input[i]]) - (2 *(romanObj[input[i - 1]])))
        }else{
            output = output + romanObj[input[i]];
        }
        // console.log(output);
    }
}
console.log(output);