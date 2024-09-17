/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    let hashMap = {}
    hashMap[0] = 1
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
        if(hashMap[sum - k]){
            count += hashMap[sum-k];
        } 
        hashMap[sum] = (hashMap[sum] || 0) + 1;
    }
    return count;
};