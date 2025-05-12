/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b)
    let results = [];
    for(let i=0; i<nums.length -2;i++){
        if(i > 0  && nums[i] === nums[i-1]) continue;
        let j = i+1;
        let k = nums.length-1;
        while (j < k){
            let sum = nums[i] + nums[j] + nums[k];
            if(sum === 0){
                results.push([nums[i], nums[j], nums[k]])
                while(nums[j] === nums[j+1]) j++;
                while(nums[k] === nums[k-1]) k--;
                k--;
                j++;
            }else if (sum < 0){
                j++;
            }else{
                k--;
            }
        }
    }
    return results;
};