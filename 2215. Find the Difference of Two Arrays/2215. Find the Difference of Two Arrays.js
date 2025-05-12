/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    set1 = new Set(nums1)
    set2 = new Set(nums2)
    nums1Unique = []
    nums2Unique = []

    for(let n of set1){
        if(!set2.has(n)){
            nums1Unique.push(n)
        }
    } 

    for(let n of set2){
        if(!set1.has(n)){
            nums2Unique.push(n)
        }
    }

    return [nums1Unique,nums2Unique]
};