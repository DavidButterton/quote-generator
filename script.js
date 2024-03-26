const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
apiQuotes = []
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twittterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote')
console.log(newQuoteButton);

function generateQuote() {
    const newQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteText.textContent = newQuote.text;
    quoteAuthor.textContent = newQuote.author;
    console.log(newQuote)
}

async function getQuotes() {
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        generateQuote();
        console.log(apiQuotes)
    } catch(error) {
        //hanlde error message
    }
}


//on load
getQuotes();

// //another option using quotes inside the quote.js file with the local quotes variable
// function newQuoteLocal() {
//     const localQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
//     console.log(localQuote)
// }

// newQuoteLocal();