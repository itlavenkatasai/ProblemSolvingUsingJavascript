// [1,2,3,4,5] == 5*mul([1,2,3,4]) ==>5*4*mul([1,2,3]) ==> 5*4*3*mul([1,2]) ==>5*4*3*2*mul([1])==>5*4*3*2*1*mul([])===>5*4*3*2*1*1
// function multiple(arr) {
//     if (arr.length <= 0) {
//         return 1;
//     } else {
//         return arr[arr.length - 1] * multiple(arr.slice(0, arr.length - 1));
//     }
// }
// const output = multiple([1, 2, 3, 4, 5]);
// console.log(output);
function countDown(n) {
    if (n <= 1) {
        return n;
    }
    if (n > 1) {
        return n + "," + countDown(n - 1);
    }
}
const output = countDown(10);
console.log(output);