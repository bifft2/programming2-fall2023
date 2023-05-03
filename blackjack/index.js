function openInstructions() {
	const modal = document.getElementById("myModal");
	modal.style.display = "block";
}

function closeInstructions() {
	const modal = document.getElementById("myModal");
	modal.style.display = "none";
}

function hit() {
	alert("hit button presssed!");
	// get a card
	// add it to user's hand
	// add to ui
	// check for bust 
}

function reset() {
	alert("reset button presssed!");
	// reset ui cards
	// reset js variables
	// deal 2 cards to user
	// deal 2 cards to dealer
	// update ui
}

function stay() {
	alert("stay button presssed!");
	// do nothing
	// dealer finishes drawing cards
	// check for end condition
}

function getCard() {
	// draw a card at random
}

function checkForEndCondition() {
	// get user sum and dealer sum
	// if dealer sum > 21 -> user wins
	// else if dealer sum == user sum -> tie
	// else if dealer sum > user sum -> dealer wins
	// else -> user wins
}



