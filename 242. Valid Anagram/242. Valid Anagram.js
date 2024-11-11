/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //nLog + n
    if(s.length != t.length) return false;
    let sArr = s.split('').sort();
    let tArr = t.split('').sort();

    for(let i=0; i<sArr.length; i++){
        if(sArr[i] === tArr[i]) continue;
        else return false;
    }
    return true
};