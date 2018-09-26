// get data from json file
const request = new XMLHttpRequest();
request.open("GET", "./assets/json/quotes.json", false);
request.send(null);

// parse as javascript object
const quotesData = JSON.parse(request.responseText);

const quote = document.getElementsByClassName("quote")[0];
const author = document.getElementsByClassName("author")[0];

// generate a random number for selecting a random quote

function generateQuote() {
	const random = Math.round(Math.random() * 103);
	quote.innerHTML = `${quotesData.quotes[random].quote}`;
	author.innerHTML = `~ ${quotesData.quotes[random].author}`;
}

const button = document.getElementsByClassName("button")[0];
button.addEventListener("click", function() {
	generateQuote();
});

generateQuote();
