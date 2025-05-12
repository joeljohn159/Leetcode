/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {

  

    let newArr = new Array(word1.length+1).fill(0).map((_,i) => new Array(word2.length+1).fill(0).map((_, j) => i === word1.length ? word2.length - j : (j === word2.length ? (word1.length - i) : 0)))

    // console.log(newArr)

    for(let i=word1.length - 1; i >= 0; i--){
        for(let j=word2.length -1 ; j >= 0; j--){
            if(word1[i] === word2[j]){
                newArr[i][j] = newArr[i+1][j+1]
            }else{
                newArr[i][j] = 1 +  Math.min(newArr[i][j+1], newArr[i+1][j], newArr[i+1][j+1]) 
            }
        }
    }

    // console.log(newArr)
    return newArr[0][0]

};