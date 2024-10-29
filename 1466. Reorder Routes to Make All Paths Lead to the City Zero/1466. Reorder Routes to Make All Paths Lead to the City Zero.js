/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let changed = 0;
    let cities = new Map(Array.from({length: n}, (_, i)=>[i,[]]))
    let directedRoad = new Set();
    let visitedCities = new Set();
    connections.forEach(([index0, index1]) => {
        cities.get(index0).push(index1)
        cities.get(index1).push(index0);
        directedRoad.add(`${index0},${index1}`)

    })

    const dfs = (city) => {
        visitedCities.add(city);
        // let adjacentCity = visitedCities.get(city);
        for(let neighbor of cities.get(city)){
            if(!visitedCities.has(neighbor)){
                if(directedRoad.has(`${city},${neighbor}`)){
                    changed++;
                }
                dfs(neighbor)
            }
        }

    }

    dfs(0)
    return changed

};