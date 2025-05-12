/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    flips = 0;

    // console.log('1 | 1 ', 1|1);
    // console.log('0 | 1 ', 0|1);
    // console.log('1 | 0 ', 1|0);
    // console.log('0 | 0 ', 0|0);

    while(a > 0 || b >0 || c>0){
        bit_a = a & 1;
        bit_b = b & 1;
        bit_c = c & 1;
        
        // console.log(bit_a, bit_b, bit_c)

        if ((bit_a | bit_b) == bit_c){
            // console.log('Do ntg')
        }else if(bit_c === 0 && bit_a === 1 && bit_b === 1){
            flips += 2
            // console.log('+2' , flips)
        }else{
            flips++
            // console.log('+1 ', flips)
        }
        a >>= 1
        b >>= 1
        c >>= 1
    }
    // console.log(flips)
    return flips
};