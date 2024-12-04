/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(let i=0; i < flowerbed.length; i++){
        if(flowerbed[i] === 1) continue;
        else{
            //non edge cases
            if(i-1 >= 0 && i+1 <= flowerbed.length-1){
                if(flowerbed[i-1] === 0 && flowerbed[i+1] === 0){
                    flowerbed[i] = 1;
                    n--;
                }
                continue;
            }
            //edge cases
            else{
                if(i === 0 && flowerbed[i+1] === 0 || i === flowerbed.length-1 && flowerbed[i-1] === 0 || i === 0 && flowerbed.length === 1){
                    flowerbed[i] = 1;
                    n--;
                }
                continue;
            }
        }
    }
    return n <= 0 ? true : false;
};