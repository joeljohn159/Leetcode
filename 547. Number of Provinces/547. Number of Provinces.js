/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    var n = isConnected.length;
    var visited = new Set();
    let provinces = 0;

    const dfs = (i) => {
        visited.add(i)
        for(let j=0; j<n; j++){
            if( !visited.has(j) && isConnected[i][j] === 1){
                console.log('isConnected[i][j] ',i,j,' is ',isConnected[i][j], visited)
                dfs(j)
            }
        }
    }

    for(let i=0; i<n; i++){
        if(!visited.has(i)){
            dfs(i)
            provinces+=1;
    
    }
    }

return provinces;

};