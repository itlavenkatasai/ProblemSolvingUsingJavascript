let arr = [1,2,3,4,5,0];
let lar = arr[0];
let small = arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>lar){
        lar = arr[i];
    }else if(arr[i] < small){
        small = arr[i];
    }
}
console.log(lar,small);