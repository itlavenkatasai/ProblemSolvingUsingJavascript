let str = "hello";

function recursiveReverse(str) {
    if (str == "") {
        return "";
    } else {
        return recursiveReverse(str.substr(1)) + str.charAt(0);
    }
}
const output = recursiveReverse(str);
console.log(output);

//hello  