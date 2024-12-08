/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    
    if(n===0) return 0;
    if(n === 1 || n === 2) return 1;

    x = 2;
    function DP(a,b,c){
        sum = a + b + c
        x++;
        if(x === n){
            return sum
        }
        return DP(b,c,sum)
    }

    return DP(0,1,1)

};