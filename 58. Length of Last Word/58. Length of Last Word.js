/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    let lastWord = s.split(' ').pop();
    // console.log()
    return lastWord.length
};