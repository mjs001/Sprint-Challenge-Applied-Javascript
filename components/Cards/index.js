// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
function EachnewArticle(data){
    const newCard = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const imgSrc = document.createElement('img');
    const authorName = document.createElement('span')

    newCard.appendChild(headlineDiv);
    newCard.appendChild(authorDiv)
    newCard.appendChild(imgContainer);
    newCard.appendChild(imgSrc)
    newCard.appendCard(authorName)

    authorDiv.appendChild(imgContainer);
    authorDiv.appendChild(imgSrc)
    authorDiv.appendChild(authorName)

    
}
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response)
    const responseArray = Object.responseArray(response);
    responseArray.data.articles.forEach(item => {
        const newArticle = eachArticle(item)
        entryPoint.appendChild(newArticle)
    })  
})
.catch(error => {
    console.log('the data was not returned', error)
})
const entryPoint = document.querySelector('.cards-container')

