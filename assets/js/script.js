// cards Array
const cardsArray = [
  {
    name: 'coco',
    img: 'assets/images/text-and-img-coco.png'
  },
  {
    name: 'fresa',
    img: 'assets/images/text-and-img-fresa.jpg'
  },
  {
    name: 'kiwi',
    img: 'assets/images/text-and-img-kiwi.png'
  },
  {
    name: 'limon',
    img: 'assets/images/text-and-img-limon.jpg'
  },
  {
    name: 'manzana',
    img: 'assets/images/text-and-img-manzana.jpg'
  },
  {
    name: 'melocoton',
    img: 'assets/images/text-and-img-melocoton.png'
  },
  {
    name: 'naranja',
    img: 'assets/images/text-and-img-naranja.jpg'
  },
  {
    name: 'pera',
    img: 'assets/images/text-and-img-pera.png'
  },
  {
    name: 'platano',
    img: 'assets/images/text-and-img-platano.jpg'
  },
  {
    name: 'sandia',
    img: 'assets/images/text-and-img-sandia.jpg'
  }
];

// Global variables
let count = 0;
let firstGuess = '';
let secondGuess = '';
let previousTarget = null;
  let delay = 900;

// Duplicate array to create a match for each card
let gameGrid = cardsArray.concat(cardsArray);
// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random());

// Grab the div with an id of root
const game = document.getElementById('game');
// Create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
// Append the grid section to the game div
game.appendChild(grid);

// For each item in the cardsArray array
gameGrid.forEach((item) => {
  const card = document.createElement('div'); // Create a div
  card.classList.add('card'); // Apply a card class to that div
  card.dataset.name = item.name; // Set the data-name attribute of the div to the cardsArray name
  
  // Create back of card
  const back = document.createElement('div');
  front.classList.add('back');

  // Create front of card, which contains
  const front = document.createElement('div')
  back.classList.add('front');
  back.style.backgroundImage = `url(${item.img})`;

  // Append card to grid, and front and back to each card
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

// Add match CSS
const match = () => {
  var selected = document.querySelectorAll('.selected');
  selected.forEach((card) => {
    card.classList.add('match');
  });
}

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  
  var selected = document.querySelectorAll('.selected');
  selected.forEach((card) => {
    card.classList.remove('selected');
  });
}

// Add event listener to grid
grid.addEventListener('click', function (event) {
  let clicked = event.target; // The event target is our clicked item

  // Do not allow the grid section itself to be selected; only select divs inside the grid
  if (
    clicked.nodeName === 'SECTION' || 
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected')
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      // Assign first guess
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      // Assign second guess
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }
    // If both guesses are not empty...
    if (firstGuess !== '' && secondGuess !== '') {
      // and the first guess matches the second match...
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
      } else {
        setTimeout(resetGuesses, delay);
      }
    }
    // Set previous target to clicked
      previousTarget = clicked;
  }
});