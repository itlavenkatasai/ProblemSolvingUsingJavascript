function max(arr, index) {
    if (index === arr.length-1) {
        return arr[index]
    }
    return Math.max(arr[index], max(arr, index+1))
}
const output = max([11, 4, 12, 7], 0);
console.log(output);