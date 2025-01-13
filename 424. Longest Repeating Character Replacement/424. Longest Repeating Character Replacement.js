/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let left = 0, right = 0;
    let max = 0;
    let arr = new Array(26).fill(0)
    while (right < s.length) {
        arr[s[right].charCodeAt(0) - 65] += 1;
        while (((right - left) + 1) - Math.max(...arr) > k) {
            arr[s[left].charCodeAt(0) - 65] -= 1;
            left++;
        } 
        max = Math.max(max, (right-left)+1)
        right++
    }
    return max;
};