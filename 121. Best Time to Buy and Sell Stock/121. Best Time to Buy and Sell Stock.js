/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //BRUTE FORCE
    // let max = 0;
    // for(let i = 0 ; i<prices.length-1; i++){
    //     for(let j=i+1; j < prices.length; j++){
    //         let x = prices[j] - prices[i];
    //         if(x > max){
    //             max = x
    //         }
    //     }
    // }
    // return max

    //SLIDING WINDOW , 2 pointers
    let left = 0, right = 1, max =0;
    while(right < prices.length){
        if(prices[left] < prices[right]) {
            let profit =  (prices[right] - prices[left])
            max = Math.max(max, profit)
        }else{
            left = right;
        }
        right++;
    }
    return max

};