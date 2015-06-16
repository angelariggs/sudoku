var numberString = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413'

var delimiter = /[.,_]/g;

var replaceString = numberString.replace(delimiter, ' ');

/*create display for sudoku; not interactive, just display grid*/
function displayGrid () {
  for (var i = 0; i<replaceString.length; i+=9) {
    if (i%27 === 0) {
      console.log("+---------+---------+---------+");
    }
    
    console.log("| " + replaceString[i] + "  " + replaceString[i+1] + "  " + replaceString[i+2] + " | "
    + replaceString[i+3] + "  " + replaceString[i+4] + "  " + replaceString[i+5] + " | "
    + replaceString[i+6] + "  " + replaceString[i+7] + "  " + replaceString[i+8] + " |")
  }
  console.log("+---------+---------+---------+")
}

// displayGrid();

/*creating columns and rows out of the display*/
var row0 = replaceString.substr(0,8);
var row1 = replaceString.substr(9,17);
var row2 = replaceString.substr(18,26);
var row3 = replaceString.substr(27,35);
var row4 = replaceString.substr(36,44);
var row5 = replaceString.substr(45,53);
var row6 = replaceString.substr(54,62);
var row7 = replaceString.substr(63,71);
var row8 = replaceString.substr(72,80);

var arrayOfRows = [row0, row1, row2, row3, row4, row5, row6, row7, row8];

var arrayOfColumns = [[],[],[],[],[],[],[],[],[]];

var j = 0;
for (var i = 0; i < 9; i++) {
  j=i;
  for(j; j < replaceString.length; j += 9) {
    arrayOfColumns[i].push(replaceString[j]);
  }
  console.log(j);
  console.log("hi")
}

console.log(arrayOfColumns);



