var numberString = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413'

var delimiter = /[.,_]/g;

var replaceString = numberString.replace(delimiter, ' ');

// console.log('"%s"', replaceString);
//document.write(replaceString);

// console.log("|" + replaceString.substr(0,3) + "|" + replaceString.substr(3,3) + "|" + replaceString.substr(6,3) + "|\n");

// console.log("|" + replaceString.substr(9,3) + "|" + replaceString.substr(12,3) + "|" + replaceString.substr(15,3) + "|\n");

// console.log("|" + replaceString.substr(18,3) + "|" + replaceString.substr(21,3) + "|" + replaceString.substr(24,3) + "|\n");


// function displayGrid () {
//   for (var i = 0; i < replaceString.length; i +=9) {
//     console.log("+---------+---------+---------+");
//     console.log("|" + replaceString.substr(i, 3) + "|" + replaceString.substr(i+3, 3) + "|" + replaceString.substr(i+6, 3) + "|\n");
//   }
//   console.log("+---------+---------+---------+");
// }

// displayGrid();

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

displayGrid();