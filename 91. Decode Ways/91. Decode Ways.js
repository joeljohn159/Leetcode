/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const dp = new Array(s.length+1).fill(0)
    dp[s.length] = 1
    function dfs(i){

        if(dp[i] != 0){
            return dp[i]
        }
        if(s[i] === "0"){
            return 0
        }

       
        let res = dfs(i+1);
        

        if(i+1 < s.length && (s[i] === "1" || (s[i] === "2" && ["0","1","2","3","4","5","6"].includes(s[i+1])))){
            res += dfs(i+2)
        }

        dp[i] = res
        return res

    }
    return dfs(0)
};