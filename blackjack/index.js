let playerHand = [];
let dealerHand = [];
let sum = 0;
let dealerSum = 0;

function openInstructions() {
	const modal = document.getElementById("myModal");
	modal.style.display = "block";
}

function closeInstructions() {
	const modal = document.getElementById("myModal");
	modal.style.display = "none";
}

function hit() {
	// get a card
	let newCard = getCard();
	// add it to user's hand
	playerHand.push(newCard);
	
	// add to ui
	var userCards = document.getElementById("user-cards");
	userCards.innerText = userCards.innerText + ", " + newCard;

	// add new card to our sum
	sum = sum + newCard;
	// display the new sum
	var yourSum = document.getElementById("sum");
	yourSum.innerText = "Your Sum: " + sum;

	// check for bust 
	if(sum > 21) {
		alert("You have busted!!");
	}
}

function reset() {
	// reset js variables
	dealerHand = [];
	playerHand = [];

	// deal 2 cards to user
	let card1 = getCard();
	playerHand.push(card1);
	let card2 = getCard();
	playerHand.push(card2);

	// deal 2 cards to dealer
	let card3 = getCard();
	dealerHand.push(card3);
	let card4 = getCard();
	dealerHand.push(card4);
	dealerSum = card3 + card4;

	var yourSum = document.getElementById("sum");
	var userCards = document.getElementById("user-cards");
	var dealerCards = document.getElementById("dealer-cards");
	sum = 0;
	for(let i = 0; i < playerHand.length; i++) {
		sum = sum + playerHand[i];
	}

	userCards.innerText = "Your Cards: " + playerHand;
	dealerCards.innerText = "Dealer Cards: " + dealerHand;
	yourSum.innerText = "Your Sum: " + sum;

	var hitButton = document.getElementById("hit");
	hitButton.disabled = false;
	var stayButton = document.getElementById("stay");
	stayButton.disabled = false;

	
	// reset ui cards
	// update ui
}

function stay() {
	var dealerCards = document.getElementById("dealer-cards");
	
	while(dealerSum < 16) {
		let dealerNewCard = getCard();
		dealerSum = dealerSum + dealerNewCard;
		dealerHand.push(dealerNewCard);
		dealerCards.innerText = dealerCards.innerText + ", " + dealerNewCard;
	}

	if(dealerSum > 21) {
		alert("You win!");
	} else if (dealerSum == sum) {
		alert("You tied.");
	} else if (dealerSum > sum) {
		alert("Dealer wins!");
	} else {
		alert("You win!");
	}
	// dealer finishes drawing cards
	// check for end condition
}

function getCard() {
	// draw a card at random
	var minInt = 1;
	var maxInt = 10;
	var card = Math.floor(Math.random()*(maxInt-minInt+1)+minInt);
	return card;
}

function checkForEndCondition() {
	// get user sum and dealer sum
	// if dealer sum > 21 -> user wins
	// else if dealer sum == user sum -> tie
	// else if dealer sum > user sum -> dealer wins
	// else -> user wins
}



