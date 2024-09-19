/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if(nums.length < k) return null;
    let avgMax = -Infinity;
    let sum = 0;
    let left = 0;
    for(let right = 0; right < nums.length; right++){
        sum += nums[right];
        if(right - left + 1 === k){
            avgMax = Math.max(avgMax , sum/k);
            sum -= nums[left]
            left++
        }
    }
    return avgMax;

};