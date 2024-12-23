/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if(nums.length === 1) return nums[0]
    function robi(x,y) {
        let rob1 = 0;
        let rob2 = 0;
        for (let i = x; i < y; i++) {
            let temp = Math.max(rob1 + nums[i], rob2)
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2
    }
    return Math.max(robi(0,nums.length-1), robi(1,nums.length))

};