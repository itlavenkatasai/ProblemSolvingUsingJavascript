arr = [5, 3, 8, 5, 9, 2, 11, 1, 10];
for (let k = 0; k < arr.length; k++) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < max) {
            arr[i - 1] = arr[i];
            arr[i] = max;
            max = arr[i];
        }
        else {
            max = arr[i];
        }
    }
}
console.log(arr);