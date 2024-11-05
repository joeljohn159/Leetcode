let nearestExit = (maze, entrance) => {
  const EMPTY = ".", WALL = "+";
  let getNeighbors = (row,col) => {
    let neighbors = [];
    let shifts = [[0,1],[0,-1],[1,0],[-1,0]];
    let inBounds = (row, col) => row >= 0 && row < maze.length && col >= 0 && col < maze[0].length;
    for (let [rShift,cShift] of shifts) {
      let [nRow,nCol] = [row + rShift, col + cShift];
      if (inBounds(nRow,nCol) && maze[nRow][nCol] !== WALL) neighbors.push([nRow,nCol]);
    }
    return neighbors;
  }

  let isExit = (row,col) => {
    let atBorder = (row === 0 || col === 0 || row === maze.length - 1 || col === maze[0].length - 1);
    let notEntrance = !(row === entrance[0] && col === entrance[1]);
    return atBorder && notEntrance;
  }

  let count = 0;
  let queue = [entrance];
  maze[entrance[0]][entrance[1]] = 1;
  while (queue.length) {
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      let [row,col] = queue.shift();
      if (isExit(row,col)) return count;
  
      let neighbors = getNeighbors(row,col);
      for (let [nRow, nCol] of neighbors) {
        if (maze[nRow][nCol] === EMPTY) {
          maze[nRow][nCol] = 1;
          queue.push([nRow,nCol]);
        }
      }
    }
    count++;
  }
  return -1;
}