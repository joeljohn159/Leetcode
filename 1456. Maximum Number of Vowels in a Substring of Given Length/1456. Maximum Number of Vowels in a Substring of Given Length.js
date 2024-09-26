/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let left = 0;
    let vowelCount = 0;
    let max = 0
    let vowelArr = ['a', 'e', 'i', 'o', 'u'];

    for(let i = 0 ; i < k; i++){
        if(vowelArr.includes(s[i])){
                vowelCount++
            }
    }
    max = vowelCount;
    // console.log('Vowels in range of k = ',k, " Total = ",max)
    for(let right = k; right < s.length ; right++){
        // console.log('START ====== Left = ',left, '- Right =',right);
        if(vowelArr.includes(s[left])){
            vowelCount--;
            // console.log(' Vowel Decremented = ',vowelCount);
        }
        if(vowelArr.includes(s[right])){
            vowelCount++;
            // console.log(' Vowel Incremented ',vowelCount);
        }
        if(max < vowelCount){
            max = vowelCount;
            // console.log('MAX is = ',vowelCount);
        }
        left++;
        // console.log(' LEFT Incremented = ',vowelCount);
        // console.log('END ====== Left = ',left, '- Right = ',right);
    }
  
    return max;
    };