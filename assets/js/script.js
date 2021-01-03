// cards 

const cardBeginner = [
    {
      name: 'coco',
      img: '..images/text-and-img-coco.png'
    },
    {
      name: 'fresa',
      img: '..images/text-and-img-fresa.jpg'
    },
    {
      name: 'kiwi',
      img: '..images/text-and-img-kiwi.png'
    },
    {
      name: 'limon',
      img: '..images/text-and-img-limon.jpg'
    },
    {
      name: 'manzana',
      img: '..images/text-and-img-manzana.jpg'
    },
    {
      name: 'melocoton',
      img: '..images/text-and-img-melocoton.png'
    },
    {
      name: 'naranja',
      img: '..images/text-and-img-naranja.jpg'
    },
    {
      name: 'pera',
      img: '..images/text-and-img-pera.png'
    },
    {
      name: 'platano',
      img: '..images/text-and-img-platano.jpg'
    },
    {
      name: 'sandia',
      img: '..images/text-and-img-sandia.jpg'
    }
  ];

  // game boards

  const grid = document.querySelector('.grid');

  function intermediateBoard() {
    for (let i = 0; i < cardBeginner.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'assets/images/back-card.png');
      card.setAttribute('data-id', i);
      grid.appendChild(card)
    }
  }

  intermediateBoard();