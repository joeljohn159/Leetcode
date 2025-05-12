/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let hashMap = new Map();
    let count = 0;
    let max = 0;

    for(let i = 0; i<nums.length; i++){
        count += nums[i] === 0 ? -1 : 1;

        if(count === 0){
            max = i + 1;
        }else if (hashMap.has(count)){
            max = Math.max(max, i - hashMap.get(count))
        }
        else hashMap.set(count, i)

    }
    return max;
};