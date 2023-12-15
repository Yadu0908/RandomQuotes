
const button = document.querySelector('.button');

const quote= document.querySelector('.paragraph');
const author= document.querySelector('.author');


const apiUrl= "https://api.quotable.io/random";

async function getQuote(){

    try {

        
        const response= await fetch(apiUrl); //response but have to convt into json.

        const data= await response.json();

        console.log(data);

        quote.innerHTML = data.content;
        author.innerHTML= "~" +data.author;

        
    } 
    
    catch (error) {
        
        quote.innerHTML= "Sorry, we're unable to connect at the moment. There's an issue fetching the requested data. Please try again later.";
        author.innerHTML= "~ Error";
    }

}

button.addEventListener('click', getQuote);