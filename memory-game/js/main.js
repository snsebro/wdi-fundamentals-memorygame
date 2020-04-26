let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne = cards[0];
cardsInPlay.push(cardOne)
console.log("User flipped " + cardOne);

let cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    alert ("theres a match")
} else { alert ("not a match")
};


// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);