var num = 47;
var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var suits = ["clubs", "diamonds", "hearts", "spades"];

var cardsAndSuits = new Array(52);
var cardsAndSuitsIndex = 0;


for (var cardIndex = 0; cardIndex < cards.length; cardIndex++) {
    for (var suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
        cardsAndSuits[cardsAndSuitsIndex] = cards[cardIndex] + " " + suits[suitsIndex];
        cardsAndSuitsIndex++;
    }
}
console.log(cardsAndSuits.slice(num - 1));