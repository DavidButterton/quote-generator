const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//get quote from API
async function getQuote() {
    showloadingSpinner();
    const proxyUrl = 'https://lychee-sundae-08468-3a4cc859c6a5.herokuapp.com/'
    const APIUrl = `http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`;
    try {
        const response = await fetch(proxyUrl + APIUrl);
        const data = await response.json();
        quoteText.innerText = data.quoteText;
        // unknownAuthor();
        //if auhtor is blank, add 'unknown'
        if (data.quoteAuthor === '') {
                    quoteAuthor.innerText = "unknown";
                } else {
                    quoteAuthor.innerText = data.quoteAuthor;
                }
        //reduce font size for long quotes
        if (data.quoteText.length > 120) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote')
        }
       removeLoadingSpinner();
    } catch(error) {
        getQuote();
        console.log('whoops, no quote', error)
    }
};

//on load run function
getQuote();

//write a function with an if statement for unknown author and length > 120
// function unknownAuthor() {
//     if (data.quoteAuthor === '') {
//         quoteAuthor.innerText = "unknown";
//     } else {
//         quoteAuthor.innerText = data.quoteAuthor;
//     }
// }

//write a function to open a new page to tweet a quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${quoteAuthor.innerText}`;
    window.open(twitterUrl, '_blank');
};

//add event listeners to the twittter button
twitterButton.addEventListener('click', tweetQuote);
newQuoteButton.addEventListener('click', getQuote);

//wie a funcion to show loading
function showloadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//write a function to hide loading
function removeLoadingSpinner() {
   if(!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true
   }
}