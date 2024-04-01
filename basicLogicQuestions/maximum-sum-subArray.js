// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//kadne's algorithm
function maximumSumSubArray(arr) {
    let max = arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
}
const output = maximumSumSubArray([2,4,-8,5,4,5]);
console.log(output);                                           