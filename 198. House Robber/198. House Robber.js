/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //[rob1, rob2, n,n+1, n+2, ....]

    let rob1 = 0;
    let rob2 = 0;
    for(let i=0; i<nums.length; i++){
        let temp = Math.max(rob1+nums[i] , rob2)
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2
};