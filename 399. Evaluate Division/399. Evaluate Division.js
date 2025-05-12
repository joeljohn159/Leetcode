/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let graph = new Map();
    Array.from({length:equations.length},(_,i)=>{
        if(graph.has(equations[i][0])){
            graph.get(equations[i][0]).push([equations[i][1], values[i] ])
        }else{
            graph.set(equations[i][0], [[equations[i][1], values[i]]])
        }
        if(graph.has(equations[i][1])){
            graph.get(equations[i][1]).push([equations[i][0], 1/values[i] ])
        }else{
            graph.set(equations[i][1], [[equations[i][0], 1/values[i]]])
        }
    })


    console.log(graph)

    let results = []
    for(let i=0; i<queries.length;i++){
        // check if valid 
        let [src, dest] = queries[i];
        if(!graph.has(src) || !graph.has(dest)) {results.push(-1);continue};
        let visited = new Set()
        function dfs(src, multiplier){

            if(src === dest) return multiplier;
            visited.add(src);

            for(let [neighbor, value] of graph.get(src)){
                if(!visited.has(neighbor)){
                    let result = dfs(neighbor, value * multiplier);
                    if(result !== -1) return result;
                }
            }
            return -1;
        }
    results.push(dfs(src,1))
    }
    return results
};