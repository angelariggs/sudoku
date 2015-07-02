try {
  var _ = require('lodash');
} catch(err) {
}

//values for starting unsolved sudoku puzzle. Dots are unsolved squares
var inputString = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413'

  //block = smaller 3x3 grid within larger 9x9 grid
  function Block(grid) {
    this.grid = grid;
    this.sqrs = [];
  }

  function Col(grid) {
    this.grid = grid;
    this.sqrs = [];
  }

  function Row(grid) {
    this.grid = grid;
    this.sqrs = [];
  }

  // sqr = individual number or empty cell within 9x9 grid
  function Sqr(row, col, blockNum, inputChar) {
    this.number = inputChar;
    this.row = row;
    this.col = col;
    this.block = this.row.grid.blocks[blockNum];
    this.poss = ['1','2','3','4','5','6','7','8','9'];
    row.sqrs.push(this);
    col.sqrs.push(this);
    this.row.grid.blocks[blockNum].sqrs.push(this);

    this.narrowRowPoss = function() {
      if (this.number === '.') {
        var currentRow = [];
        for (var j = 0; j < this.row.sqrs.length; j++) {
          currentRow.push(this.row.sqrs[j].number);
        }
        this.poss = (_.difference(this.poss, currentRow));
      }
    }
    this.narrowColPos = function() {
      if (this.number === '.') {
        var currentCol = [];
        for (var k = 0; k < this.col.sqrs.length; k++) {
          currentCol.push(this.col.sqrs[k].number);
        }
        this.poss = (_.difference(this.poss, currentCol));
      }
    }
    this.narrowBlockPoss = function() {
      if (this.number === '.') {
        var currentBlock = [];
        for (var m = 0; m < this.block.sqrs.length; m++) {
          currentBlock.push(this.block.sqrs[m].number);
        }
        this.poss = (_.difference(this.poss, currentBlock));
      }
    }
    this.narrowAllPoss = function() {
      this.narrowRowPoss();
      this.narrowColPos();
      this.narrowBlockPoss();

      if (this.poss.length === 1) {
        this.number = this.poss[0];
        this.row.grid.numberOfSquaresKnown++;
        this.poss.pop();
      }
    }
  }

  function Grid(size) {
    this.numberOfSquaresKnown = 0;
    this.rows = [];
    this.cols = [];
    this.blocks = [];
    for (var i=0; i<size; i++) {
      this.blocks[i] = new Block(this);
      this.rows[i] = new Row(this);
      this.cols[i] = new Col(this);
    }
    var i = 0
    for (var r=0; r<size; r++) {
      for (var c=0; c<size; c++) {
        blockNum = (Math.floor(r/3)*3) + Math.floor(c/3);
        inputChar = inputString[i]
        if (inputChar !== '.') {
          this.numberOfSquaresKnown++
        }
        new Sqr(this.rows[r], this.cols[c], blockNum, inputChar);
        i++
      }
    }
    this.calcGridState = function() {
      var gridState = '';
      for (var i = 0; i < this.rows.length; i++) {
        for (var j = 0; j < this.rows[i].sqrs.length; j++) {
          gridState += this.rows[i].sqrs[j].number;
        }
      } return gridState;
    }
    this.solve = function() {
      while (this.numberOfSquaresKnown < 81) {
        this.rows.forEach(function(rowObj) {
          rowObj.sqrs.forEach(function(sqrObj) {
            sqrObj.narrowAllPoss();
          });
        });
      }
    }
  }// closes grid constructor

var grid = new Grid(9);

grid.solve();

var solvedGrid = grid.calcGridState();
var solvedString = solvedGrid.toString();
console.log(solvedString);
var finalGrid = "";
//var finalGrid = "<p> +------+------+-------+<br />";
function displayGrid () {

  for (var i = 0; i<solvedString.length; i+=9) {
      if (i%27 === 0) {
        finalGrid += "+------+------+-------+<br/>";
      }
      finalGrid += " | " + solvedString[i] + " " + solvedString[i+1] + " " + solvedString[i+2] + " | " + solvedString[i+3] + "  " + solvedString[i+4] + "  " + solvedString[i+5] + " | " + solvedString[i+6] + "  " + solvedString[i+7] + "  " + solvedString[i+8] + " | <br/>";
  }// closes for loop
  finalGrid += "+------+------+-------+";
};// closes function displayGrid
displayGrid();
console.log(finalGrid);

$("#sudokuDiv").html(finalGrid);





// console.log(grid.rows[1].sqrs[3].poss);
// console.log(grid.rows[1].sqrs[5].poss);

//grid.rows[1].sqrs[3].narrowAllPoss();
// console.log(grid.rows[0].sqrs[3].poss);

// grid.rows[0].sqrs[3].narrowRowPoss();
// grid.cols[3].sqrs[0].narrowColPos();
// console.log(grid.blocks[1]);
//console.log(grid.blocks[1].sqrs[0].narrowBlockPoss());



// module.exports = {
//   'grid': grid,
//   'inputString': inputString
// }















