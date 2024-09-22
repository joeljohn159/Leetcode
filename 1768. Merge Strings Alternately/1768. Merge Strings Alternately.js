/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
    let resultString = '';
    const longestString = Math.max(word1.length, word2.length);
    for(let i = 0; i< longestString; i++){
        if(word1[i]){
            resultString += word1[i]
        }
        if(word2[i]){
            resultString += word2[i]
        }
    }
    return resultString
};