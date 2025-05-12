/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    res = []
    function backTracking(currNumArr, num , sum){
        //base case
        if(k === currNumArr.length){
            console.log(currNumArr)
            if(sum === n){
             res.push(currNumArr)
            }
            return;
        }

        //DFS
        for(let i = num ; i <= 9 ; i++){
            if(sum+i > n) break;
            backTracking([...currNumArr,i], i+1, sum+i)
        }

    }

    backTracking([], 1, 0)
    return res
};