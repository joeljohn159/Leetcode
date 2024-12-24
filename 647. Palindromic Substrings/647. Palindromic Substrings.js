/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {

    let res = []
    //Odd
    for (let i = 0; i < s.length; i++) {
        let l = i;
        let r = i;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            res.push(s.substring(l, r + 1))
            l--;
            r++;
        }
    }

    //even
    for (let i = 0; i < s.length; i++) {
        let l = i;
        let r = i+1;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            res.push(s.substring(l, r + 1))
            l--;
            r++;
        }
    }

    // console.log(res)
    return res.length
};