str = 'ab'.split("");
inputString = 'a'.split("");
for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < inputString.length; j++) {
        if (str[i] == inputString[j]) {
            console.log(inputString.length);
            if(inputString.length == 0){
                break;
            }else{
                inputString.splice(j, 1);
            }
        }
    }

}
console.log(inputString);
if (inputString.length == 0) {
    console.log("true");
} else {
    console.log("false");
}