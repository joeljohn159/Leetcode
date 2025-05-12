/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s.length) return 0;
    let left = 0;
    let right = 0;
    let max = 0;
    let set = new Set();
    while(right < s.length){
        if(set.has(s[right])){
            set.delete(s[left])
            left++;
        }else{
            max = Math.max(max, set.size)
            set.add(s[right]);
            right++;
        }
    }
    return max+1
};