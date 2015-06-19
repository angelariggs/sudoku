var chai = require('chai');
var expect = chai.expect;
var game = require('../build-grid.js')


describe('Game', function() {
  describe('game methods', function() {


// LOAD
  describe('load', function() {
    it('should ingest a string and fill in squares with string', function() {
      expect(game.grid.rows[0].sqrs[0].number).to.equal(game.inputString[0]);
      expect(game.grid.rows[8].sqrs[8].number).to.equal(game.inputString[80]);
      expect(game.grid.rows[5].sqrs[6].number).to.equal(game.inputString[51]);
    });
  });

// POSSIBILITIES
  describe('possibilites', function() {
    it ('should know that its row/col/block need an array of [1-9]', function() {
      expect(game.grid.rows[0].sqrs[0].poss).to.contain([1,2,3,4,5,6,7,8,9])
    })
  }) 
    should fill every square with the right digits
    //know that all rows/col/block need an array of [1-9]
    //sqr should check its row/col/block to see what numbers are there
    //sqr should know what possible numbers it could be


  
  




  });// closes game methods
});// CLOSES DESCRIBE GAME
