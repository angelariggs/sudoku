describe('Game', function() {
  describe('game methods', function() {

  })
})

  describe('remaining', function() {
    it('should return the number of squares left to solve', function() {
      expect(game.remaining()).to.be.a.('number');
      expect(game.remaining()).to.be.below('81');
      expect(game.remaining()).to.be.above('-1');

    })
  })

  describe('finished', function() {
    it('should check the sum of all rows, cols, blocks to ensure 45', function() {

    })
    it('should return true or false', function() {
      
    })
  })

  load
    should ingest a string
    should fill in some squares with that string

  solve 
    should fill every square with the right digits

  show
    should produce a string which describes the board

  update square:
    mark square as done
    should remember change for other squares to use

  get
    should return the digit in a given square

  needed
    should determine what digits are missing from a row/col/block

  possibilities
    should determine what possibilities  remain for a square

  lookForDigits
    should find, for a given square, which digits are in the same row/col/block

  lookForSquares
    should find, for a given square, the other sqares in the same row/col/block

  locateRow
    should return the row for a given square

  locateCol
    should return the column for a given square

  locateBlock
    should return the block for a given square

//////////////////////////////////////

Row / Column / Block
  lookForDigits
    should find, for a given square, which digits are in the same row/col/block

  lookForSquares
    should find, for a given square, the other sqares in the same row/col/block

  needed
    should determine what digits are missing from a row/col/block

Square 

  update square:
    mark square as done
    should remember change for other squares to use

  get
    should return the digit in a given square

  possibilities
    should determine what possibilities  remain for a square

  lookForSquares
    should find, for a given square, the other sqares in the same row/col/block

  locateRow
  describe('locateRow', function() {
    it('should return the row for a given square', function() {

    })
    it('should return a number', function() {
      expect.(game.locateRow(squareNum)).to.be.a.('number');
    })
  })
  
  locateCol
    should return the column for a given square

  locateBlock
    should return the block for a given square

//////////////////////////////////////

block = math.floor(sq/3)%3
row = math.floor(sq/9)
col = 


block0 = row0[0,1,2] + row1[0,1,2] + row2[0,1,2]
block1 = row0[3,4,5] + row1[3,4,5] + row2[3,4,5]
block2 = row0[6,7,8] + row1[6,7,8] + row2[6,7,8]








