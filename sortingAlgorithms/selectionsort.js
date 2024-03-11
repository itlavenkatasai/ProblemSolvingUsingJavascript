arr = [21, 78, 34, 19, 1, 0, 23];
for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
            min = j;
        }
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
}
console.log(arr);