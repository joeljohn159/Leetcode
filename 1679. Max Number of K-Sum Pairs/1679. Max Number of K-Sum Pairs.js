/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let count = 0;
    let left = 0;
    let right = nums.length - 1;
    // while(left != nums.length){
    //     // console.log(nums, ' Left = ',left, ' Right = ',right)
    //     if(left === right){ right++;continue;}
    //     if(nums[right] === '*'){
    //         right++;
    //         continue
    //     }
    //     if(nums[left] === '*'){
    //         left++;
    //         continue
    //     }

    //     if(nums[left] + nums[right] === k){
    //         nums[left] = '*'
    //         nums[right] = '*'
    //         count++;
    //         right++;
    //     }else{
    //         right++;
    //     }
    //     if(right >= nums.length){
    //         left++;
    //         right = left+1;
    //     }
    // }
    nums.sort((a,b)=>a-b)
    while(left < right){
        if(nums[left] + nums[right] === k){
            count++;
            left++;
            right--;
        }else if(nums[left] + nums[right] > k){
            right--;
        }else if(nums[left] + nums[right] < k){
            left++;
        }else{
            continue
        }

    }
    return count;
};