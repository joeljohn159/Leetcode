/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    


    //Brute Force
    // let max = ''
    // for(let i=0; i<s.length; i++){
    //     for(let j=i; j<s.length; j++){
    //         let x = s.substring(i,j+1)
    //         let y = x.split('').reverse().join('');
    //         if(x === y && y.length > max.length){
    //             max = y
    //         }
    //     }
    // }

    // return max


    // Expand outward
    res = '';
    resLength = 0;

    for(let i=0; i < s.length; i++){
        //Odd Check
        var l = i ;
        var r = i ;
        while( l >= 0 && r < s.length && s[l] === s[r] ){
            if(r - l + 1 > resLength){
                resLength = r-l+1;
                res = s.substring(l,r+1)
                
            }
            l--;
            r++;
        }

        //even Check
         l = i ;
         r = i+1 ;
        while( l >= 0 && r < s.length && s[l] === s[r]){
            if(r - l + 1 > resLength){
                resLength = r-l+1;
                res = s.substring(l,r+1)
                
            }
            l -= 1;
            r += 1;
        }

    }

    // console.log(res, resLength)
    return res

};