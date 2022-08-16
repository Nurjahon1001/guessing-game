const GuessingGame = require('./src/guessing-game.js');

window.game = new GuessingGame();

class GuessingGame {
   constructor() {
     console.log("hello world!");
   }
 
   setRange(min, max) {
     console.log(min, max);
     console.log("hi");
   }
   guess() {}
   
   lower() {}
   
   greater() {}
 }
 setRange(15, 900)
 GuessingGame()