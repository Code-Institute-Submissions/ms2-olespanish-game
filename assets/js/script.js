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

let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

// Global variables
let firstGuess = '';
let secondGuess = '';
let cardsChosen = [];
let cardsWon = [];
let count = 0;
let previousTarget = null;
let delay = 1000;

const game = document.getElementById('game');
const grid = document.createElement('section');
const resultDisplay = document.getElementById('result');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

// For each item in the cardsArray array
gameGrid.forEach(function (item) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = item.name; 

  // Create back of card
  const back = document.createElement('div');
  back.classList.add('back');

  // Create front of card
  const front = document.createElement('div');
  front.classList.add('front');
  front.style.backgroundImage = `url(${item.img})`;

  // Append card to grid, and front and back to each card
  grid.appendChild(card);
  card.appendChild(back);
  card.appendChild(front);
});

// Add match CSS
const match = function match() {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.add('match');
  });
}

const resetGuesses = function resetGuesses() {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;
  
  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.remove('selected');
  });
}

// Add event listener to grid
grid.addEventListener('click', function clickCard (event) {
  let clicked = event.target; // The event target is our clicked item

  // Do not allow the grid section itself to be selected; only select divs inside the grid
  if (
    clicked.nodeName === 'SECTION' || 
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected')) {
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

    // If both guesses are not empty
    if (firstGuess !== '' && secondGuess !== '') {
      // and the first guess matches the second match
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
        cardsWon.push(cardsChosen);
      } else {
        setTimeout(resetGuesses, delay);
      }
    }
    // Set previous target to clicked
    previousTarget = clicked;

    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.lenght === cardsArray.length) {
      resultDisplay.textContent = 'Congratulations!';
    }
  }
});

// Set timer and call the function every second
// const startingMinutes = 1;
// let time = startingMinutes * 60;
// const countdownEl = document.getElementById('time');
// let interval = setInterval(updateCountdown, 1000);

// function updateCountdown() {
//   const minutes = Math.floor(time / 60);
//   let seconds = time % 60;

//   seconds = seconds < 10 ? '0' + seconds : seconds;

//   countdownEl.innerHTML = `${minutes}: ${seconds}`;
//   time !== 0 ? time-- : time;
// }
