// let age = 17;
// let name = "Ryan";

// console.log(age);
// console.log(name);

// age = parseInt(prompt("What is your age: "));
// name = prompt("What is your name: ");

// console.log(age*10);
// console.log(name);

// alert("This is an alert!");

// const nameParagraph = document.getElementById("name");
// console.log(nameParagraph);
// nameParagraph.innerText = name;
// nameParagraph.style.color = "red";


// let place = prompt("Enter a place ");
// const placeSpan = document.getElementById("place");
// placeSpan.innerText = place;

function doConversion() {
	let rate = 0.0;
	let newCurrencyVal = 0;
	const selector = document.getElementById("currencies");
	const selectedCurrency = selector.value;
	if(selectedCurrency == "gbp") {
		rate = 1.8;
	} else if (selectedCurrency == "cad") {
		rate = 3.5
	} else {
		rate = 4;
	}
	alert(rate);

}




