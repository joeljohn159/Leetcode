/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let found = 0;
    let totalFound = 0;
    let firstIndex;
    while(found !== -1){
        found = nums.findIndex(ele => ele === target);
        if(found === -1 && totalFound === 0) return [-1,-1];
        if(found === -1) return [firstIndex, firstIndex+totalFound-1]
        nums.splice(found,1)
        totalFound++;
        firstIndex = found;
    }
    // return [firstIndex, firstIndex+totalFound-1];
    // return [firstIndex, firstIndex+totalFound]
};