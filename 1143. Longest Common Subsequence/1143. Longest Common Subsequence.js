/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let arr = new Array(text1.length + 1).fill(null).map(() => new Array(text2.length + 1).fill(0))

    // function DP(i, j) {
    //     if (i == text1.length || j == text2.length) return 0
    //     if (arr[i][j] != 0) return arr[i][j]
    //     if (text1[i] === text2[j]) {
    //         arr[i][j] = 1 + DP(i + 1, j + 1)
    //     } else {
    //         arr[i][j] = Math.max(DP(i + 1, j), DP(i, j + 1))
    //     }
    //     return arr[i][j]
    // }
    // DP(0, 0)


    for (let i = text1.length - 1; i >= 0; i--) {
        for (let j = text2.length - 1; j >= 0; j--) {
            // if (arr[i][j] != 0) return arr[i][j]
            if (text1[i] === text2[j]) {
                arr[i][j] = 1 + arr[i + 1][j + 1]
            } else {
                arr[i][j] = Math.max(arr[i][j + 1],arr[i + 1][j])
            }
            
        }
    }

return arr[0][0]
};