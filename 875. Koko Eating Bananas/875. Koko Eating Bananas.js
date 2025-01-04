/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    // The min hours is len(piles) 
    // The max rate will be max(piles)


    let left = 1;
    let right = Math.max(...piles);
    let res = right
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let reduced = 0
        for (let i = 0; i < piles.length; i++) {
            reduced += Math.ceil(piles[i] / mid)
        }
        if (reduced <= h) {
            res = Math.min(res, mid)
            right = mid - 1;
        } else {
            left = mid + 1;
        }

    }
    return res

};