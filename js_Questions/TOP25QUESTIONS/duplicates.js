// if in this array contain duplicates return true otherwise return false.
function duplicates(nums){
    let obj = {};
    for(let i=0;i<nums.length;i++){
        if(nums[i] in obj){
            obj[nums[i]] = obj[nums[i]] + 1;
        }else{
            obj[nums[i]] = 1;
        }
    }
    for(let key in obj){
        if(obj[key] > 1) return true;
    }
    return false;
}
console.log(duplicates([1, 2, 3, 4,5]))