/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let zeroPresent = {};
    if(nums.length < 2 || nums.length >= 10**5 ) return nums;
    // let mul = nums.reduce((ele,acc)=>ele === 0 ? zeroPresent = true : {console.log(acc);ele * acc}, 1)

    let mul = nums.reduce((acc,ele,i) =>{
        if(ele === 0){
            zeroPresent[i] = i; 
            return acc 
        }else {
            // console.log(ele, acc, ele*acc);
            return ele * acc
        }
    }, 1)
    let zeroLength = Object.keys(zeroPresent).length
    let answer = nums.map((ele, i) => {
        if(zeroLength === 0 ) { 
            return mul/nums[i];
        } 
        else if(ele !== 0 && zeroLength) {
            return 0
        }else if(ele === 0  && zeroLength === 1 ){ 
            return mul
        }else{
            return 0
        }
    })
    return answer
};