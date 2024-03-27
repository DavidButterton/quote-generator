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
    //check if author field is blank and replace it with 'unknown'
    if(!newQuote.author) {
        quoteAuthor.textContent = "unknown"
    } else {
        quoteAuthor.textContent = newQuote.author;
    }
    //check the quote length to determine styling
    if(newQuote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = newQuote.text;
    
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

//to tweet a quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl, '_blank');
}

twittterButton.addEventListener('click', tweetQuote);
newQuoteButton.addEventListener('click', generateQuote);