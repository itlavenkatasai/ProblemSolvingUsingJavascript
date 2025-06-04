let str1 = "aabd";
let str2 = "abd";
str1 = str1.split("");
str2 = str2.split("");
let newArr = [];
let extraChar;
let extraCharIndex;
for(let i=0;i<str1.length;i++){
    if(str1[i] !== str2[i]){
        extraChar = str1[i];
        extraCharIndex = i;
        break;
    }
}
for(let i=extraCharIndex;i>=0;i--){
    if(str1[i] === extraChar){
        newArr.push(i);
    }else{
        break;
    }
}
// console.log(extraChar,extraCharIndex);
console.log(newArr.reverse());
