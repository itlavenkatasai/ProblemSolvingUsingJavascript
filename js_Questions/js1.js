let nums = [1,2,1,2,3,4,3,1];
let obj = {}

for(let i=0;i<nums.length;i++){
    if(nums[i] in obj){
        obj[nums[i]] += 1;
    }else{
        obj[nums[i]] = 1;
    }
    // console.log(obj)
}
console.log(Object.keys(obj));