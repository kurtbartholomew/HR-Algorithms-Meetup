/*
  Greetings, algorithmics!

  Your task for today is to classify poker hands!  You have two functions to complete:

    - labelHand, which gives the name of a single hand.
    - findWinner, which determines which of several hands is best.

  Hands are 14-character strings that look like "8H TC KS 2C AD", where
    - there are exactly five cards
    - each card is separated by a space
    - each card is represented by a value followed by a suit
    - ace is "A" (remember, aces can be either low or high!)
    - king is "K"
    - queen is "Q"
    - jack is "J"
    - ten is "T"
    - all other cards are represented by their number.
    - the four suits are represented by "H", "C", "S", and "D"

  Hands will be legal, with no duplicate cards.

  Remember, the order of hands, from highest to lowest is
    - Royal flush:      like a straight flush from Ten to Ace
    - Straight flush:   5 cards in a row of the same suit
    - Four of a kind:   4 cards of the same value
    - Full house:       3 cards of the same value and one pair.
    - Flush:            5 cards of the same suit
    - Straight:         5 cards in a row
    - Three of a kind:  3 cards of the same value
    - Two pair:         you got this one.
    - Pair:             this one too.
    - High card:        basically, no hand.

  There are no helper functions provided this time.
  You're on your own, but feel free to write whatever helpers you need!
*/

var poker = {
  // Returns the name of the input hand.
  // See the specs for the required formats.
  labelHand: function(hand) {

    var suitMap = {
      "H": 0,
      "D": 1,
      "S": 2,
      "C": 3
    };

    var rankMap = {
      "A" : 0,
      "2" : 1,
      "3" : 2,
      "4" : 3,
      "5" : 4,
      "6" : 5,
      "7" : 6,
      "8" : 7,
      "9" : 8,
      "T" : 9,
      "J" : 10,
      "Q" : 11,
      "K" : 12
    };

    handMap = [];
    for (var i = 0; i < 4; i++) {
      handMap[i] = [];
    }

    hand = hand.split(" ");

    hand.forEach(function(card) {

      handMap[suitMap[card[1]]][rankMap[card[0]]] = true;

    });

    var totalsArr = [];

    handMap.forEach(function(suit, index) {
      suit.forEach(function(card, i) {
        if(totalsArr[i] === undefined) {
          totalsArr[i] = 1;
        } else {
          totalsArr[i]++;
        }
      });
    });

    console.log(totalsArr);

  },

  // Takes an array of hands and returns the index of the winning hand.
  // If two or more hands tie for the win, instead return an array of the winning hands.
  findWinner: function(hands) {

  }

  function testForMoreThanOne(numberOfSameCards, totalCards) {
    
    if(numberOfSameCards === 3) {
      for(var i = 0; i < totalCards.length; i++) {

      }
    } 
  }


};