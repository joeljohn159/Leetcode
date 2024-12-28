/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // nums.sort((a,b)=>a-b)

    // for(let i =0 ; i< nums.length;i++){
    //     if(nums[i] === nums[i+1]){
    //         i+=1
    //     }else{
    //         return nums[i]
    //     }
    // }
    //
    //Using HashSet

    // let set = new Set();
    // for(let i=0; i<nums.length; i++){
    //     if(set.has(nums[i])){
    //         set.delete(nums[i])
    //     }else{
    //         set.add(nums[i])
    //     }
    // }

    // return set.values().next().value


    //Using XOR

    let x = 0;

    for(let i=0; i<nums.length; i++){
        x ^= nums[i]
    }

    return x

};