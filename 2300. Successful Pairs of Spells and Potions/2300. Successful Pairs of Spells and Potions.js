/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {


    let final = []
    potions.sort((a,b)=>a-b)
    // console.log(potions)
    for (let i = 0; i < spells.length; i++) {
        let left = 0;
        let right = potions.length - 1;
        let idx = potions.length;
        // console.log('ITERATION ', i, spells[i])
        while (left <= right) {
            let middle = Math.ceil((right + left) / 2);
            // console.log('I am left, right, middle =', left, right, middle)

            if (spells[i] * potions[middle] >= success) {
                right = middle - 1;
                idx = middle;
                // console.log('right updated to = ', right, ' IDX is ', idx)
            }
            else if (spells[i] * potions[middle] < success) {
                left = middle + 1;
                // console.log(' Left updates to = ', left)
            }
        }
        final.push(potions.length - idx)
    }
    return final;
};