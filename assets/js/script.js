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

// Grab the div with an id of root
const game = document.getElementById('game');

// Create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

// Append the grid section to the game div
game.appendChild(grid);

// For each item in the cardsArray array
cardsArray.forEach(item => {
  const card = document.createElement('div'); // Create a div
  card.classList.add('card'); // Apply a card class to that div
  card.dataset.name = item.name; // Set the data-name attribute of the div to the cardsArray name
  card.style.backgroundImage = `url(${item.img})`; // Apply the background image of the div to the cardsArray image

  grid.appendChild(card); // Append the div to the grid section
});