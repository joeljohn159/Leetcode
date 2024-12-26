/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let arr  = new Array(n+1).fill(0).map((_,i) => {
        return i.toString(2).split('').reduce((acc, curr, j) =>  curr === '1' ? acc + 1 : acc + 0
       , 0)
    })
    return arr
};