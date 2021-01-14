// cards Array
const cardsArray = [
  {
    name: 'coco',
    img: 'assets/images/text-and-img-coco.png',
    audio: 'assets/audio/coco.mp3'
  },
  {
    name: 'fresa',
    img: 'assets/images/text-and-img-fresa.jpg',
    audio: 'assets/audio/fresa.mp3'
  },
  {
    name: 'kiwi',
    img: 'assets/images/text-and-img-kiwi.png',
    audio: 'assets/audio/kiwi.mp3'
  },
  {
    name: 'limon',
    img: 'assets/images/text-and-img-limon.jpg',
    audio: 'assets/audio/limon.mp3'
  },
  {
    name: 'manzana',
    img: 'assets/images/text-and-img-manzana.jpg',
    audio: 'assets/audio/manzana.mp3'
  },
  {
    name: 'melocoton',
    img: 'assets/images/text-and-img-melocoton.png',
    audio: 'assets/audio/melocoton.mp3'
  },
  {
    name: 'naranja',
    img: 'assets/images/text-and-img-naranja.jpg',
    audio: 'assets/audio/naranja.mp3'
  },
  {
    name: 'pera',
    img: 'assets/images/text-and-img-pera.png',
    audio: 'assets/audio/pera.mp3'
  },
  {
    name: 'platano',
    img: 'assets/images/text-and-img-platano.jpg',
    audio: 'assets/audio/platano.mp3'
  },
  {
    name: 'sandia',
    img: 'assets/images/text-and-img-sandia.jpg',
    audio: 'assets/audio/sandia.mp3'
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
let movesCounter = document.getElementById('moves-counter');
let moves;
let second = 0,
    minute = 0,
    hour = 0,
    interval,
    totalGameTime;
let totalGameMovesEl = document.getElementById('total-game-moves');
let totalGameTimeEl = document.getElementById('total-game-time');
let timeCounter = document.getElementById('time-counter');
let modalEl = document.getElementById('game-over-modal');
let closeModalIcon = document.getElementById('close-modal');

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

function startGame() {
// For each item in the cardsArray array
  gameGrid.forEach(function (item) {
    const { name, img, audio } = item;

    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = name; 
    card.dataset.audio = audio; 

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

  // Reset moves
  moves = 0;
  movesCounter.innerText = `${moves} move(s)`;

  // Reset time
  timeCounter.innerHTML = '0 : 0';
  clearInterval(interval);
}

// Add match CSS
const match = function match() {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.add('match');
    card.style.pointerEvents = 'none';
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

grid.addEventListener('click', function clickCard(event) {
  let clicked = event.target; // The event target is our clicked item

  // Do not allow the grid section itself to be selected; only select divs inside the grid
  if (
    clicked.nodeName === 'SECTION' || 
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected')) {
      return;
  }

  if (count < 2) {
    moveCounter();
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

    if (cardsWon.length === 10) {
      endGame();
    }
  }
});

function moveCounter() {
  moves++;
  movesCounter.innerHTML = `${moves} move(s)`;
  
  if (moves == 1) {
    second = 0;
    minute = 0;
    hour = 0;
    startTimer();
  }
}

function startTimer() {
  interval = setInterval(function() {
    timeCounter.innerHTML = `${minute} : ${second}`;
    second++;

    if (second == 60) {
      minute++;
      second = 0;
    }
    if(minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
}

function endGame() {
  // Show modal on game end
  setTimeout(function() {
    modalEl.classList.add("show-modal"); 

    // Show totalGameTime and moves
    totalGameMovesEl.innerHTML = moves;
    totalGameTimeEl.innerHTML = totalGameTime;
  }, 1500);
 
  cardsWon = [];
  closeModal();
}

function closeModal() {
  closeModalIcon.addEventListener("click", function() {
    modalEl.classList.remove("show-modal");
    startGame();
  });
}

function playAgain() {
  modalEl.classList.remove("show-modal");

  startGame();
}

// window.onload = function () {
//   setTimeout(function() {
//     startGame();
//   }, 1000);
// }

startGame();