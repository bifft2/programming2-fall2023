
// let usdAmount = prompt("Enter amount in USD:");

function convert() {

    let usdAmount = document.getElementById("currency-amount").value;
    let currency = document.getElementById("currencies").value;
    let convertedResultDiv = document.getElementById("converted-result");

    let exchangeRates = {
        EUR: 0.85,
        GBP: 0.75,
        CAD: 1.28,
        CHF: 0.91,
        JPY: 113.42,
    };

    console.log(currency);

    if(currency == "eur") {
        let newAmount = usdAmount*0.94;
        convertedResultDiv.innerText = newAmount;
    } 
    else if(currency == "gbp") {
        let newAmount = usdAmount*0.75;
        convertedResultDiv.innerText = newAmount;
    }
    else if(currency == "cad") {
        let newAmount = usdAmount*1.28;
        convertedResultDiv.innerText = newAmount;
    }
    else if(currency == "chf") {
        let newAmount = usdAmount*0.91;
        convertedResultDiv.innerText = newAmount;
    }
    else if(currency == "jpy") {
        let newAmount = usdAmount*113.42;
        convertedResultDiv.innerText = newAmount;
    }
    else {
        convertedResultDiv.innerText = "Choose a value!!!!";
    }

    // const displayUSD = document.getElementById("USD");
    // displayUSD.innerText= (usdAmount + " USD");

    // const displayEUR = document.getElementById("EUR");
    // displayEUR.innerText= (usdAmount*exchangeRates.EUR + " EUR");

    // const displayGBP = document.getElementById("GBP");
    // displayGBP.innerText= (usdAmount*exchangeRates.GBP+ " GBP");

    // const displayCAD = document.getElementById("CAD");
    // displayCAD.innerText= (usdAmount*exchangeRates.CAD+ " CAD");

    // const displayCHF = document.getElementById("CHF");
    // displayCHF.innerText= (usdAmount*exchangeRates.CHF + " CHF");

    // const displayJPY = document.getElementById("JPY");
    // displayJPY.innerText= (usdAmount*exchangeRates.JPY+ " JPY");

}
  
