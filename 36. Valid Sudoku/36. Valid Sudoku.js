/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
       // row
  for(let i=0; i<9; i++){
    let row = new Set();
    for(let j=0; j<9;j++){
        if(row.has(board[i][j])) return false;
        else if(board[i][j] === '.'){
            continue;
        }
        row.add(board[i][j])
    }
  } 

    // col
  for(let i=0; i<9; i++){
    let row = new Set();
    for(let j=0; j<9;j++){
        if(row.has(board[j][i])) return false;
        else if(board[j][i] === '.'){
            continue;
        }
        row.add(board[j][i])
    }
  } 

  let starts = [[0,0],[0,3], [0,6],
                [3,0], [3,3],[3,6],
                [6,0],[6,3],[6,6]]

//   boxes
  for(let [i,j] of starts){
    let box = new Set();
    for(let k=i; k <i+3; k++){
        for(let l=j; l<j+3; l++){
             if(box.has(board[k][l])) return false;
        else if(board[k][l] === '.'){
            continue;
        }
        box.add(board[k][l])
    }
    }

  }

  return true;
};