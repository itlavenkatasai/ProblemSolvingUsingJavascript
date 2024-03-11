let arr = ['254619738', '254619738'];
for (let index = 0; index < arr.length; index++) {
    arr[index] = arr[index].split("");
    for (let i = 0; i < arr[index].length; i++) {
        let min = i;
        for (let j = i; j < arr[index].length; j++) {
            if(arr[index][j] < arr[index][min]){
                min = j;
            }
        }
        temp = arr[index][i];
        arr[index][i] = arr[index][min];
        arr[index][min] = temp;
    }
    arr[index] = arr[index].join("");
}
console.log(arr);
