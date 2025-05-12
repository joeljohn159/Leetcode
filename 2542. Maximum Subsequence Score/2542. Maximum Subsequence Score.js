/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {

    let merged = nums1.map((ele, i) => [nums2[i], ele])
    merged.sort((a,b)=>b[0]-a[0]);

    // console.log(merged)
    let result = 0, total =0;
    let pq = new MinPriorityQueue({priority : (ele) => ele})

    for(let [nums2Ele, nums1Ele] of merged){
        if(pq.size() === k){
            total-=pq.dequeue().element;
        }
        total += nums1Ele;
        pq.enqueue(nums1Ele)

        if(pq.size() === k){
            result = Math.max(result, total*nums2Ele)
        }
    }

    return result;


};