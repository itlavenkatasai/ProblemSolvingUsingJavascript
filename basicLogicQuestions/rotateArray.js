let arr = [17, 18, 5, 4, 6, 1];
let max = -1;
for (let i = arr.length - 1; i >= 0; i--) {
    temp = arr[i];
    arr[i] = max;
   max=temp;
}
console.log(arr);