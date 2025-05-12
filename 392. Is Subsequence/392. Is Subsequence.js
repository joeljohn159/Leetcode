/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length === 0) return true
    let tPointer = 0;
    let sPointer = 0;
    let isSubsuquence = false
    // console.log(t ," length = ",t.length , s, " length = ",s.length)
    while(tPointer < t.length){
        if(s[sPointer] === t[tPointer]){
            sPointer++;
            tPointer++;
            // console.log('TPointer = ', tPointer, ' SPointer = ', sPointer)
        }else{
            tPointer++
            // console.log('TPointer = ', tPointer, ' SPointer = ', sPointer)

        }

        if(sPointer === s.length){
            // console.log('FINAL ITERATION = ', sPointer)
           isSubsuquence = true 
        }
        
    }
    return isSubsuquence
};