/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let one = 1;
    let two = 1;
    for(let i=2; i<=n ;i++){
        let temp = one+two;
        one=two
        two=temp
        // console.log(one, two)
    }
    return two
};