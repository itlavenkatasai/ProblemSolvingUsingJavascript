let arr = [1,4,3,6,8];
arr.map((num,index) => {
    if(num%2 === 0){
        arr[index] = num * num;
    }
})
console.log(arr);