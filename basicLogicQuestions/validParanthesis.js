arr = [1,2,3,4,5,5];
largest = arr[0];
secondlargest = -Infinity;
for(let i=1;i<arr.length;i++){
    if(arr[i]>largest){
        secondlargest = largest;
        largest = arr[i];
    }
    if(arr[i]<largest && arr[i]>secondlargest){
        secondlargest = arr[i];
    }
}
console.log(secondlargest);