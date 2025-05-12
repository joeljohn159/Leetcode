/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    res = []
    let digitToChar = {
        2 : ['a', 'b' ,'c'],
        3 : ['d', 'e' ,'f'],
        4 : ['g', 'h' ,'i'],
        5 : ['j', 'k' ,'l'],
        6 : ['m', 'n' ,'o'],
        7 : ['p', 'q' ,'r','s'],
        8 : ['t', 'u' ,'v'],
        9 : ['w', 'x' ,'y', 'z']
    }

    function backTracking(i , currStr){
        if(currStr.length === digits.length){
            res.push(currStr)
            return
        }
        for(let c of digitToChar[digits[i]]){
            console.log(i, c)
            backTracking(i+1 , currStr + c)
        }
    }
    backTracking(0, "")

    return digits.length === 0 ? [] : res
};