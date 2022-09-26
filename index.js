class Person {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];
    }
}

let player1 = new Person('German');
console.log(player1);

let player2 = new Person('Lucy');
console.log(player2);

let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
let suits = ['hearts', 'diamonds', 'spades', 'clubs'];
let ranks = [2, 3, 4, 5, 6, 7 , 8, 9, 10, 11, 12, 13, 14];

class Card {
    constructor(value, suit, rank) {
        this.value = value;
        this.suit = suit;
        this.rank = rank;
    }
}

class Deck {
    constructor() {
        this.deck = [];
    }    
        createDeck() {
            for(let valueIndex = 0; valueIndex < values.length; valueIndex++) {
                for(let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
                    this.deck.push(new Card(values[valueIndex], suits[suitIndex], ranks[valueIndex]))
                }
            }
            
        }

        shuffleDeck() {
            for (let i = this.deck.length -1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
            }
        }

        dealDeck() {
            player1.hand = this.deck.slice(0, 26);
            player2.hand = this.deck.slice(26, 52);
        }
 }

 let newDeck = new Deck();
 newDeck.createDeck();
 newDeck.shuffleDeck();
 newDeck.dealDeck();

 class Game {
    constructor(){

    }

    compareCards() {
        for (let round = 0; round < 26; round++) {
            if (player1.hand[round].rank > player2.hand[round].rank) {
                player1.score = player1.score + 1;
                console.log('player 1 wins the round', round);
                console.log('player 1 played card:', player1.hand[round].rank)
                console.log('player 2 played card:', player2.hand[round].rank)
                console.log('player 1 score: ', player1.score)
                console.log('player 2 score: ', player2.score)
            } else if(player2.hand[round].rank > player1.hand[round].rank) {
                player2.score = player2.score + 1;
                console.log('player 2 wins the round', round);
                console.log('player 1 played card:', player1.hand[round].rank)
                console.log('player 2 played card:', player2.hand[round].rank)
                console.log('player 1 score: ', player1.score)
                console.log('player 2 score: ', player2.score)

            } else {
                console.log('tie round!!', round);
                console.log('player 1 played card:', player1.hand[round].rank)
                console.log('player 2 played card:', player2.hand[round].rank)
                console.log('player 1 score: ', player1.score)
                console.log('player 2 score: ', player2.score)
            }
            console.log('Player 1 final score: ', player1.score);
            console.log('Player 2 final score: ', player2.score);

        }
    }
 }

 let newGame = new Game();
 newGame.compareCards()