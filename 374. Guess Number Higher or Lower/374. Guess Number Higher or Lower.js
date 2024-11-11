/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
function getMiddle(start, end){
    middle = Math.ceil((end + start)/2);
    // console.log(middle)
    return middle
}


var guessNumber = function(n) {
    let start = 1;
    let end = n;
    let middle = getMiddle(start, end)
    let num = guess(middle)
    while(num != 0){
        if(num === -1){
            end = middle - 1;
            middle = getMiddle(start, end)
            // console.log('The guessed number is greater so moving to LEFT: ',start, middle, end)
        }else{
            start = middle + 1;
            middle = getMiddle(start, end)
            // console.log('The guessed number is less so moving to RIGHT :',start, middle, end)
        }
        num = guess(middle)
    }
    // console.log(num)
    return middle;
};