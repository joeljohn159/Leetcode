/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    let myArr = new Array(m).fill(null).map(() => new Array(n).fill(1))

    for(let i = 1; i < m; i++){
        for(let j=1;j<n;j++){
            myArr[i][j] = myArr[i][j-1] + myArr[i-1][j];
        }
    }

    return myArr[m-1][n-1]
    

};