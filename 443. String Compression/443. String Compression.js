/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    if(chars.length <= 1) return 1;
    let prev = chars[0];
    let s = ''
    let totalPresent = 1;
    let sum = 0;
    for( let i=1; i < chars.length; i++){
        
        if(chars[i] === prev){
            // console.log(chars[i],'---',s)
            prev = chars[i]
            totalPresent++;
            
        }
        else if(chars[i] != prev && totalPresent === 1){
            // console.log(chars[i],'---',s)
            s += prev 
            prev = chars[i]
            sum += totalPresent;
            totalPresent = 1
            
        }else{
            // console.log(chars[i],'---',s)
            s += prev + totalPresent;
            prev = chars[i]
            sum += totalPresent;
            totalPresent = 1;
        }

        if(i === chars.length - 1){
            if(totalPresent > 1){
                s += prev + totalPresent;
                sum += totalPresent
                break;
            }else{
                s += prev;
                sum += totalPresent
                break;
            }
        }
    }
    s = s.split('')
    for(let i = 0 ; i < s.length; i++){
        chars[i] = s[i] 
    }
    chars = chars.slice(0,s.length)
    // console.log(chars)
    return s.length
};