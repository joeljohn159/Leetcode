/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let cl = console.log
    nums =[...new Set(nums.sort((a,b)=>a-b))];
    // console.log(nums)
    let previous = -Infinity;
    let counter = 1;
    let max = 0;
    for(let i=0; i<nums.length; i++){
        // console.log('-------------------Previous=',previous,' Counter=',counter,' Max=',max)
        if(previous + 1 === nums[i]){
            counter++;
            // console.log('Previous+1 is equal =',counter,' Previous=',previous,' Nums[i]=',nums[i])
        }else{
            counter = 1
            // console.log('Couter back to 1')
        }
        if(counter > max){
                max = counter;
                // console.log('Counter is Greater & max= ',max)
        }
        previous = nums[i]
        // console.log('Previous updated to = ',previous)

    }
    // cl(max)
    return max;
};