/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arrS = s.split('')
    let reversedVowels = []
    arrS.forEach((ele,i) => {
        if(ele === 'a' || ele === 'e' || ele === 'i' || ele === 'o' || ele === 'u' || ele === 'A' || ele === 'E' || ele === 'I' || ele === 'O' || ele === 'U'){
            arrS[i] = '*'
            reversedVowels.push(ele)
        }

    })
    arrS.forEach((ele,i) => {
        if(ele === '*'){
            arrS[i] = reversedVowels.pop()
        }
    })
    return arrS.join('')
};


