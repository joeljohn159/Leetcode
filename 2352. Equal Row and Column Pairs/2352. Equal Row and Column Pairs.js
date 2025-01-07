/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let colHashMap = new Map();
    let rowHashMap = [];
    let n = grid.length;

    for(let i=0; i<n; i++){
        let final=''
        grid[i].map((item) => {
            final+=String(' '+item)
        })
        rowHashMap.push(final)
    }
    for(let i=0; i<n; i++){
        grid[i].map((item, idx) =>{
            colHashMap.set(idx, (colHashMap.get(idx) || '') + ' '+ JSON.stringify(item))
        } )
    }

    let colArray = Array.from(colHashMap.values())
    let count=0
    for(let i=0; i<n; i++){
        for(let j=0 ; j<n; j++){
            if(colArray[i] === rowHashMap[j]){count++}
        }
    }
    return count
};