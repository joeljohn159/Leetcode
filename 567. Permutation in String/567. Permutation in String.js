/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false
    s1.toLowerCase();
    s2.toLowerCase();
    let counter1 = new Array(26).fill(0);
    let counter2 = new Array(26).fill(0);

    for(let i=0; i<s1.length; i++){
        counter1[(s1[i].charCodeAt(0) - 97)] += 1
    }

    // for(let i=0; i<s2.length; i++){
    //     counter2[(s2[i].charCodeAt(0) - 97)] += 1
    // }

    // console.log(counter1, counter2)
    let left = 0, right =0;

    while(right < s2.length){
        // console.log(left, right)
        while((right - left + 1) <= s1.length){
            counter2[(s2[right].charCodeAt(0) - 97)] += 1;
            // console.log('inner = ',s2[right].charCodeAt(0))
            right++;
            if(JSON.stringify(counter1) === JSON.stringify(counter2)) return true;
    // console.log(counter1, counter2)

        }
        // console.log(s2[left].charCodeAt(0)-97)
        counter2[(s2[left].charCodeAt(0) - 97)] -= 1;
        left++
    }

    return false
};