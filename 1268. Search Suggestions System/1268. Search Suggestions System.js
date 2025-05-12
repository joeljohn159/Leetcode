/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort();
    let left = 0;
    let right = products.length - 1;
    let res = [];

    for(let i=0; i<searchWord.length; i++){
        let c = searchWord[i];

        while(left <= right && (products[left].length <= i || products[left][i] != c)){
            left += 1;
        }

        while(left <= right && (products[right].length <= i || products[right][i] != c)){
            right -= 1;
        }

        res.push([])
        let remain = right - left + 1;
        for(let i=0; i<Math.min(3, remain); i++){
            res[ res.length - 1 ].push(products[left + i])
        }
        
    }
        return res
};