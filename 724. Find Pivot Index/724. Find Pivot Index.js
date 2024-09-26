/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = 0;
    let pivot = 0
    let leftSum = 0;
    for(let i=0; i<nums.length; i++){
        total+= nums[i]
    }
    let rightSum = total - nums[pivot]
    while(leftSum !== rightSum && pivot < nums.length){
        leftSum += nums[pivot]
        pivot++;
        rightSum -= nums[pivot]
    }
    return leftSum === rightSum ?  pivot :  -1  

};