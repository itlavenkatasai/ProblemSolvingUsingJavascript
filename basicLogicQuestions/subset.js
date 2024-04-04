let arr = [1, 2, 3, 4];
let arr1 = []
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        arr1.push(arr[i], arr[j]);
    }
}
console.log(arr1)