/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0, right = 0;
    const swap = (right, left) => {
        nums[left] = nums[right]
        nums[right] = 0;
        left++;
        right++
    }
    while(right < nums.length){
        if(left === right){
            right++;
            // continue;
        }
        else if(nums[right] === 0 && nums[left] === 0){
            right++;
            
            // continue;
        }else if(nums[right] !== 0 && nums[left] === 0){
            swap(right,left)
            // continue
        }else{
            right++;
            left++; 
            // continue;
        }
        
    }
    return nums
};


// 1 3 0 0 12
// LR
//     L   R

