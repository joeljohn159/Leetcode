/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let maxRow = grid.length -1 ;
    let maxCol = grid[0].length - 1;
    let level = 0

    let queue = []
    let fresh = 0;



    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                fresh++;
            } if (grid[i][j] === 2) {
                queue.push([i,j])
            }
        }
    }

    if(!fresh) return 0;


    function rotAjacentNode(row, col) {
        let x = [[-1, 0], [1, 0], [0, 1], [0, -1]];
        for (let i of x) {
            let adj = [i[0] + row, i[1] + col]
            if (adj[0] < 0 || adj[0] > maxRow || adj[1] < 0 || adj[1] > maxCol) {

                continue;
            } else {
                if (grid[adj[0]][adj[1]] === 1) {

                    grid[adj[0]][adj[1]] = 2
                    queue.push(adj)
                    fresh--;
                }else{
                }

            }
        }
    }


    while (queue.length) {
        length = queue.length
        for (let i = 0; i < length; i++) {
            let item = queue.shift();
            rotAjacentNode(item[0], item[1]);
        }
        level++;
    }

    return fresh === 0 ? level-1 : -1;
};