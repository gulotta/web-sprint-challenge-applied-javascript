
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const Header = (title, date, temp) => {

    const head = document.createElement('div');
    const date1 = document.createElement('span');
    const title1 = document.createElement('h1');
    const temp1 = document.createElement('span');

    head.appendChild(date1);
    head.appendChild(title1);
    head.appendChild(temp1);

    head.classList.add('header');
    date1.classList.add('date');
    temp1.classList.add('temp');

      date1.textContent = date;
      title1.textContent = title;
      temp1.textContent = temp;
    
    return head;
}

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!

const headerAppender = (selector) => {
const headerContainer = document.querySelector(selector);
headerContainer.appendChild(Header('Bloomtech Times', 'January 6, 2021', '26˚'))
}

export { Header, headerAppender }
