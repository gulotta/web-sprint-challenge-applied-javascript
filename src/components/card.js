
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

import axios from "axios";

  const Card = (article) => {
    const card1 = document.createElement('div');
    const headline = document.createElement ('div');
    const author = document.createElement('div');
    const img1 = document.createElement('div');
    const photo = document.createElement('img');
    const name = document.createElement('span');

    card1.appendChild(headline);
    card1.appendChild(author);
    author.appendChild(img1);
    author.appendChild(name);
    img1.appendChild(photo);

    card1.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    img1.classList.add('img-container');
    
    
    headline.textContent = article.headline;
    name.textContent = article.authorName;
    photo.src = article.authorPhoto;

    card1.addEventListener('click', () => {
      console.log(article.headline);
    })

    return card1;
}


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cardAppender = (selector) => {

    const cardContainer = document.querySelector(selector);

    axios.get('http://localhost:5001/api/articles').then((res) => {
      for (let i in res.data.articles) {
        res.data.articles[i].forEach((article) => {
          console.log(article);
          cardContainer.appendChild(Card(article));
        });
      }
    });
};

export { Card, cardAppender }
