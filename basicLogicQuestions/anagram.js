let str1 = "anagram";
let str2 = "nagaram";
let arr = [str1, str2];
for (let index = 1; index <= arr.length; index++) {
    let obj1 = {};
    let obj2 = {};
    arr[index] = arr[index].split("");
    for (let i = 0; i < arr[index].length; i++) {
        if (arr[index][i] in obj1) {
            obj1[arr[index][i]] += 1;
        } else {
            obj1[arr[index][i]] += 1;
        }
    }
    arr[index] = arr[index].join("");
}
console.log(obj1);
console.log(obj2);