/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies)
    let results = []
    for(let i = 0; i < candies.length; i++){
        candies[i] + extraCandies >= max ? results.push(true) : results.push(false)
    }
    return results
};