# Write your MySQL query statement below
select tweet_id from tweets where length(content) > 15/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    let dpArr = Array(n+1).fill(0)
    
    dpArr[0] = 1  
    dpArr[1] = 1  
    dpArr[2] = 2  
    dpArr[3] = 5
    if(n <= 3) return dpArr[n]
    for(let i=4; i<=n; i++){
        let res = (2*dpArr[i-1] + dpArr[i-3]) % 1_000_000_007;
        dpArr[i] = res 
    }
    // console.log(dpArr)
    return dpArr[n]  
}; 