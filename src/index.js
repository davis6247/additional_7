//solving Sudoku problem using backtracking
module.exports = function solveSudoku(matrix) { 

    solveSudokuByBacktracking(matrix);

    return matrix;
}

function solveSudokuByBacktracking(matrix){
  var rowCol = [0, 0];

  //if empty  location wasn't found then sukodu is solved
  if(!findEmptyLocation(matrix, rowCol)) return true; 

  var row = rowCol[0], col = rowCol[1];

  for(var number = 1; number <= 9; number++){

     if(!isNumberInRow(matrix, row, number)) 
       if(!isNumberInColumn(matrix, col, number))
         if(!isNumberInRegion(matrix, row, col, number)){
             matrix[row][col] = number;

              //solveSudoku return true only when there's no empty location, if that's so, sudoku solved
             if(solveSudokuByBacktracking(matrix))
               return true;

                //
                matrix[row][col] = 0;
          }      
    }
    return false;
}

//if location empty location was found return true, else return false
function findEmptyLocation(matrix, rowCol){
  for(var row = rowCol[0]; row < matrix.length; row++){
    for(var col = rowCol[1]; col < matrix[row].length; col++){
        if(matrix[row][col] == 0){
          rowCol[0] = row;
          rowCol[1] = col;
          return true;
        } 
    }
  }
  return false;
}

function isNumberInRow(matrix, row, number){    //return boolean which indicate if there is given number in row
  for(var i = 0; i < matrix[row].length; i++)
    if(matrix[row][i] == number) return true;

    return false;
}

function isNumberInColumn(matrix, col, number){ //return boolean which indicate if there is given number in column
  for(var i = 0; i < matrix.length; i++)
    if(matrix[i][col] == number) return true; 

    return false
}

function isNumberInRegion(matrix, row, col, number){  //return boolean which indicate if there is given number in 3x3 area
  var areaStartRow = (Math.floor(row / 3)) * 3;
  var areaStartCol = (Math.floor(col / 3)) * 3;

  for(var i = areaStartRow; i < areaStartRow + 3; i++)
        for(var j = areaStartCol; j < areaStartCol + 3; j++)
            if(matrix[i][j] == number) return true;

  return false;
}
