let userHand = [];
let dealerHand = [];

let modal = document.getElementById("myModal");
let userCardsParagraph = document.getElementById("user-cards");
let dealerCardsParagraph = document.getElementById("dealer-cards");
let startGameButton = document.getElementById("start-game");
let hitButton = document.getElementById("hit");
let stayButton = document.getElementById("stay");

function openInstructions() {
	modal.style.display = "block";
}

function closeInstructions() {
	modal.style.display = "none";
}

function hit() {
	// get a card
	let card = getCard();
	// add it to user's hand
	userHand.push(card);
	// add to ui
    userCardsParagraph.innerText += " " + card;
	// check for bust
	checkForEndCondition(); 
}

function reset() {
	// reset ui cards
    userCardsParagraph.innerText = "Your Cards: ";
    dealerCardsParagraph.innerText = "Dealer's Cards: ";
	// reset js variables
	userHand = [];
	dealerHand = [];
	// deal 2 cards to user
	let card1 = getCard();
	let card2 = getCard();
	userHand.push(card1);
	userHand.push(card2);

	// deal 2 cards to dealer
	let card3 = getCard();
	let card4 = getCard();
	dealerHand.push(card3);
	dealerHand.push(card4);

	// update ui
    userCardsParagraph.innerText += " " + card1 + " " + card2;
    dealerCardsParagraph.innerText += " X " + card4;

    startGameButton.style.display = "none";

    hitButton.disabled = false;
    stayButton.disabled = false;
}

function stay() {
	// do nothing
    hitButton.disabled = true;

    // dealer finishes drawing cards
    let dealerSum = dealerHand.reduce(function(a, b) { return a + b; }, 0);
    dealerCardsParagraph.innerText = "Dealer's Cards: " + String(dealerHand[0]) + " " + String(dealerHand[1]);
    while (dealerSum < 16) {
    	const card = getCard();
    	dealerHand.push(card);
    	dealerCardsParagraph.innerText += " " + String(card);
    	dealerSum = dealerHand.reduce(function(a, b) { return a + b; }, 0);
	}

	
	// check for end condition
	checkForEndCondition();
}

function getCard() {
	// draw a card at random
	var minInt = 1;
	var maxInt = 10;
	var randomNumber = Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
	return randomNumber;
}

function checkForEndCondition() {
	// get user sum and dealer sum
	const userSum = userHand.reduce(function(a, b) { return a + b; }, 0);
	const dealerSum = dealerHand.reduce(function(a, b) { return a + b; }, 0);
	
	if(userSum > 21 && hitButton.disabled == false) {
		alert("You bust! and lose.")
    	startGameButton.innerText = "New Game";
    	startGameButton.style.display = "block";
	} else if (hitButton.disabled == true) {

		// if dealer sum > 21 -> user wins
		if(dealerSum > 21) {
			alert("Dealer busts! and you win :)");
		}
		// else if dealer sum == user sum -> tie
		else if(dealerSum == userSum) {
			alert("You tie at " + String(dealerSum) + "!")
		}
		// else if dealer sum > user sum -> dealer wins
		else if(dealerSum > userSum) {
			alert("Dealer wins. You lose :(");
		} 
		// else -> user wins
		else {
			alert("You win!");
		}
		
		startGameButton.innerText = "New Game";
	    startGameButton.style.display = "block";
	    hitButton.disabled = true;
	    stayButton.disabled = true;
	}
}



