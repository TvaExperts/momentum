import './index.css';
import htmlToElement from '../../utils/htmlToElement';
import Quotes from './index.html';



const quotes = htmlToElement(Quotes);


const quoteBlock = quotes.querySelector('.quote');
const autorBlock = quotes.querySelector('.author');
const changeQuoteBlock = quotes.querySelector('.change-quote');




let numQuote = parseInt(localStorage.getItem('numQuote')) || 0 ;

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const getNewNumQuote = (max) => {
    if (max === 1) return 0;
    let newNumQuote = getRandomInt(max);
    while (newNumQuote === numQuote) {
        newNumQuote = getRandomInt(max);
    }
   return newNumQuote;
}

async function getQuotes() {  
    const quotes = `./json/${localStorage.getItem('language')}-quotes.json`;
    const res = await fetch(quotes);
    const data = await res.json(); 
    numQuote = getNewNumQuote(data.length);
    localStorage.setItem('numQuote', numQuote.toString());
    quoteBlock.textContent = data[numQuote].text;
    autorBlock.textContent = data[numQuote].author;
}

const loadQuotes = () => { 
    if (localStorage.getItem('quotes') === 'false') {
        quotes.classList.add('hide');
    }
    getQuotes();
  }


changeQuoteBlock.addEventListener('click', getQuotes);

loadQuotes();


export default quotes;