nums =  [1,1,0,1,1,1];
let temp = nums[0];
let count = 0;
let arr = [];
for(let i=0;i<nums.length;i++){
    if(nums[i] === temp){
        count++;
    }else{
        count = 1;
        temp = nums[i];
    }
    arr.push(count);
}

console.log(Math.max(...arr));
