function locateRow(squareNum) {
  if (typeof squareNum !== 'number')
    throw 'Not a number';
  if (squareNum > 80)
    throw 'Square num is too big';
  if (squareNum<0)
    throw 'Square num is to small';
  return Math.floor(squareNum)/9
}



this.poss = the digits that are missing = the digits that it needs



