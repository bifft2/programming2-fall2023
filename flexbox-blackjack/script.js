let userCardSpace1 = document.getElementById("userCard1");
let userCardSpace2 = document.getElementById("userCard2");
let userCardSpace3 = document.getElementById("userCard3");
let userCardSpace4 = document.getElementById("userCard4");
let dealerCardSpace1 = document.getElementById("dealerCard1");
let dealerCardSpace2 = document.getElementById("dealerCard2");
let dealerCardSpace3 = document.getElementById("dealerCard3");
let dealerCardSpace4 = document.getElementById("dealerCard4");
let dealerScoreElement = document.getElementById("dealerScore");
let userScoreElement = document.getElementById("userScore");
let hitButton = document.getElementById("hit");
let standButton = document.getElementById("stand");
let resetButton = document.getElementById("reset");
let messageElement = document.getElementById("message");
let dealerGamesWonElement = document.getElementById("dealer-games-won");
let userGamesWonElement = document.getElementById("user-games-won");

let cardDeck = [];
let userCards = [];
let dealerCards = [];
let userScore = 0;
let dealerScore = 0;
let userGamesWon = 0;
let dealerGamesWon = 0;


function hit() {
	let currentNumCards = userCards.length;
	let userCard = drawCard(cardDeck);
	userCards.push(userCard);
	if(currentNumCards == 2) {
		userCardSpace3.src = "images/" + userCard + ".svg";
	} else if(currentNumCards == 3) {
		userCardSpace4.src = "images/" + userCard + ".svg";
	}
	
	userScore = calculateScore(userCards);
	userScoreElement.innerText = "Score: " + userScore;
}

function stand() {
	hitButton.disabled = true;
	resetButton.disabled = true;
	dealerCardSpace1.src = "images/" + dealerCards[0] + ".svg";

	dealerScore = calculateScore(dealerCards);
	dealerScoreElement.innerText = "Score: " + dealerScore;

	while (dealerScore < 17) {
		let currentNumCards = dealerCards.length;
		let dealerCard = drawCard(cardDeck);
		dealerCards.push(dealerCard);
		if(currentNumCards == 2) {
			dealerCardSpace3.src = "images/" + dealerCard + ".svg";
		} else if(currentNumCards == 3) {
			dealerCardSpace4.src = "images/" + dealerCard + ".svg";
		}
		dealerScore = calculateScore(dealerCards);
		
	}
	dealerScoreElement.innerText = "Score: " + dealerScore;

	determineWinner();
}

function determineWinner() {
	resetButton.disabled = false;
	standButton.disabled = true;

	if(dealerScore > 21 && userScore > 21) {
		messageElement.innerText = "You both lose.";
	} else if(dealerScore == 21 && userScore == 21) {
		messageElement.innerText = "You both win!";
		userGamesWon += 1;
		dealerGamesWon += 1;
	} else if(userScore == 21 || dealerScore > 21) {
		messageElement.innerText = "You win!";
		userGamesWon += 1;
	} else if(dealerScore == 21 || userScore > 21) {
		messageElement.innerText = "You lose.";
		dealerGamesWon += 1;
	} else if(userScore > dealerScore) {
		messageElement.innerText = "You win!";
		userGamesWon += 1;
	} else if(userScore < dealerScore){
		messageElement.innerText = "You lose.";
		dealerGamesWon += 1;
	} else {
		messageElement.innerText = "You tie.";
	}

	userGamesWonElement.innerText = "User Games Won: " + userGamesWon;
	dealerGamesWonElement.innerText = "Dealer Games Won: " + dealerGamesWon;

}

function reset() {
	cardDeck = ['AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS'];
	userCards = [];
	dealerCards = [];
	userScore = 0;
	dealerScore = 0;

	messageElement.innerText = "Your turn."

	dealerCardSpace3.src = "images/blank.svg";
	dealerCardSpace4.src = "images/blank.svg";
	userCardSpace3.src = "images/blank.svg";
	userCardSpace4.src = "images/blank.svg";

	let dealerCard1 = drawCard(cardDeck);
	dealerCards.push(dealerCard1);
	dealerCardSpace1.src = "images/back.png";

	let dealerCard2 = drawCard(cardDeck);
	dealerCards.push(dealerCard2);
	dealerCardSpace2.src = "images/" + dealerCard2 + ".svg";

	let userCard1 = drawCard(cardDeck);
	userCards.push(userCard1);
	userCardSpace1.src = "images/" + userCard1 + ".svg";

	let userCard2 = drawCard(cardDeck);
	userCards.push(userCard2);
	userCardSpace2.src = "images/"  + userCard2 + ".svg";

	userScore = calculateScore(userCards);
	dealerScore = calculateScore(dealerCards);


	userScoreElement.innerText = "Score: " + userScore;
	dealerScoreElement.innerText = "Score: ?";

	hitButton.disabled = false;
	standButton.disabled = false;
}

function calculateScore(cardList) {
	let score = 0;
	for(let i = 0; i < cardList.length; i++) {
		let firstCharacter = cardList[i].charAt(0);

		console.log(firstCharacter);
		if(firstCharacter == "K" || firstCharacter == "Q" || firstCharacter == "J") {
			score += 10;
		} else if(firstCharacter == "A") {
			score += 1;
		} else if(firstCharacter == "1") {
		 	score += 10;
		} else {
			score += parseInt(firstCharacter);
		}
	}
	return score;
}

function drawCard(cardList) {
	let randomNum = Math.floor(Math.random() * cardList.length);
	const drawnCard = cardList.splice(randomNum, 1);
	return drawnCard[0];
}