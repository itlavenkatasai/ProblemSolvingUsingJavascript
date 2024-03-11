let arr = [1, 3, 8, 5, 9, 2, 11, 1,10];
let max = arr[0];
let second_max = -Infinity;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        second_max = max;
        max = arr[i];
    }
    else if (arr[i] < max && arr[i] > second_max) {
        second_max = arr[i];
    }
}
console.log(second_max);