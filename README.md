# ¡Olé Spanish!

![¡Olé Spanish!](readme-files//)


¡Olé Spanish! memory game is a great way to practice Spanish vocabulary while having fun. This memory game will test both your vocabulary and your memory.

You can visit the deployed website [here](https://fernandagil.github.io/ms2-olespanish-game/).

---

## 1. UX

#### 1.1. Project Goals

This game was designed for students of all ages learning the Spanish language (or just curious!). 
It works like a simple memory game, with the difference that each picture has the name written on it
and the words pronunciation for a better learning experience.

This game was also designed for anybody without prior Spanish knowledge or interest, since it's not a requisite to play the game and have a good time.

This project’s main goals are:
- to learn new words
- to strengthen memory
- to have fun!

#### 1.2. User Stories

###### Entertainment Goals
- As a user, I’d like to have fun while playing an easy game.
- As a user, I’d like a game that has simple but nice visuals, with easy recognisable pictures.
- As a user playing for the first time, I'd the game structure to be obvious so I can start playing right away.
- As a user that doesn’t know how the game works, I'd like to be able to find the instructions easily.
- As a competitive user, I’d like to know in how much time I completed the game.

###### Didactic Goals
- As a teacher, I’d like a game where my students can learn while having fun.
- As a teacher, I'd like a challenging game that my students will want to play at home for fun and learn new words in the process.
- As a student, I’d like to test the new vocabulary I learn in Spanish class while having fun in the process.
- As a student, I’d like to hear the pronunciation of the words I’m learning.


#### 1.3. Wireframes
The wireframes were designed using [Balsamiq](https://balsamiq.com/). They're accessible in the following links:

|    Desktop   |    Tablet    |    Mobile    |
|    :----:    |     :----:   |    :----:    |
|[Home Page](readme-files/wireframes/desktop-home.jpg)|[Home Page](readme-files/wireframes/tablet-home.jpg)|[Home Page](readme-files/wireframes/mobile-home.jpg)|
|[Instructions Page](readme-files/wireframes/desktop-instructions.jpg)|[Instructions Page](readme-files/wireframes/tablet-instructions.jpg)|[Instructions Page](readme-files/wireframes/mobile-instructions.jpg)|
|[Refresh Vocabulary Page](readme-files/wireframes/desktop-vocabulary.jpg)|[Refresh Vocabulary Page](readme-files/wireframes/tablet-vocabulary.jpg)|[Refresh Vocabulary Page](readme-files/wireframes/mobile-vocabulary.jpg)|
|[Game Page](readme-files/wireframes/desktop-game.jpg)|[Game Page](readme-files/wireframes/tablet-game.jpg)|[Game Page](readme-files/wireframes/mobile-game.jpg)|

---

## 2. Features

### 2.1. Existing features

**Home Page** includes:
- **Game's name**: allows users to identify where they are and the kind of game they're about to play.
- **Navigation Menu**: allows users to navigate the site in an easy and intuitive way.

**Instructions Page** includes:
- **Game's name**: this works as a logo sticked to the top to add consistency through the site. It also works as a link back to the Home Page.
- **Instructions**: allows users to know how to play the game.
- **Refresh vocabulary button**: links to the Refresh Vocabulary Page and acts as a shortcut for the user.
- **Start playing button**: links to the Game Page and acts as a shortcut for the user to start playing right away.

**Refresh Vocabulary Page** includes:
- **Game's name**: this works as a logo sticked to the top to add consistency through the site. It also works as a link back to the Home Page.
- **Vocabulary**: allows the user to get to know the cards that they'll find in the game. They include:
-- A picture: to easily recognise each word. 
-- The name: includes each word's article that allows the user to understand which word is feminine and which is masculine.
-- The word's pronunciation: allows the user to not only learn the word's name but also the way it sounds.  

**Game Page** includes:
- **Game's name**: this works as a logo sticked to the top to add consistency through the site. It also works as a link back to the Home Page.
- **Timer**: times how long it takes to finish the game starting from the first move.
- **Moves counter**: counts how many moves the user needs to finish the game. 
- **Exit button**: allows the user to interrupt the game and go back to the Home Page.

**Game Over Modal** that displays once the user has matched all the cards. It includes:
- **Exit button**: closes the modal.
- **Congratulations Message**: it congratulates the player and allows them to know how many moves and how much time they needed to finish the game.
- **Play again button**: allows the user to play another game.

### 2.2. Potential Features

An idea to implement in the future would be adding a new level of difficulty. This new level would consist in matching an image with its name, following the memory game structure. This would be exclusive for students that already have some knowledge of Spanish. 

---

## 3. Technologies used

- [HTML5](https://en.wikipedia.org/wiki/HTML5) - provides the content and structure for my website.
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - provides the styling.
- [Bootstrap](https://getbootstrap.com/) - used to create the layout of the project.
- [Balsamiq](https://balsamiq.com/) - used to create the project's wireframes.
- [Gitpod](https://gitpod.io/) - used to develop the website.
- [GitHub](https://github.com/) - used to host the project.
- [Google Fonts](https://fonts.google.com/) - used to provide the fonts Nixie One for the main text, and Fascinate Inline for some headers.
- [Font Awesome](https://fontawesome.com/) - used the Font Awesome icons to hear the voice clip in the Refresh Vocabulary page.
- [Canva](https://www.canva.com/) - used to design all the cards for all levels, the game's logo and icon.
- [Favicon](https://www.favicon-generator.org//) - used to create the icon from the design made with Canva.
- [Pixabay](https://pixabay.com/) - used to get images for the project.
- [TinyJPG](https://tinyjpg.com/) - used to compress the size of the images and icon before making it a Favicon.
- [HTML Color Codes](https://html-color-codes.info/): to select colours codes from an image to create the website's colour palette.
- [Text 2 MP3](https://www.texttomp3.online/): to generate the vocabulary words' pronunciation.
- [Autoprefixer](https://autoprefixer.github.io/) - used to parsethe CSS and to add vendor prefixes to CSS rules.

---

## 4. Testing

The testing process can be seen [here](TESTING.md).

---

## 5. Deployment

**To deploy the project**

This project is hosted in GitHub Pages

1. On the menu on the top of the project’s repository on GitHub select **Settings**.
2. Scroll down to the **GitHub Pages** section.
3. Inside that section, click on the drop-down menu under **Source** and select **Master Branch**.
4. Click on the second drop-down to select **/(root)**.
5. Click on **Save**.
6. The link to the webpage is just in the same **GitHub Pages** section.

Only one branch has been used for this project.

**To run the project locally**

To clone this project from GitHub:

1. Under the repository’s name, click **Clone or download**.
2. In the **Clone with HTTPS** section, copy the given URL.
3. In your IDE of choice, open **Git Bash**.
4. Change the current working directory to the location where you want the cloned directory to be made.
5. Type **git clone**, and then paste the URL copied from GitHub.
6. Press **enter** and the local clone will be created.

---

## 6. Credits

### 6.1. Content

I took inspiration from [Diogo Realles' CodePen](https://codepen.io/SoftwaRealles/pen/dExjRW) to style the header.

The neon effect buttons were created following [Coding Tuting](https://www.codingtuting.com/2019/09/neon-buttons-pure-css.html) and style to suit the project's needs.

The sound effects were implemented with help from [Button Sound Effects Tutorial](https://www.youtube.com/watch?v=VlwSz2dXK_8&ab_channel=AdamKhoury).

The basic game functionalities were creating following the tutorials from [Tania Rascia](https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/) 
and [Michelle Aniuchi](https://aadaobi.medium.com/building-a-memory-matching-game-in-javascript-48e792c7b563).


### 6.2. Media

The pictures used in this site were all obtained from [Pixabay](https://pixabay.com/), specifically from the creators: 
[AnnaliseArt](https://pixabay.com/es/users/annaliseart-7089643/),
[OpenClipart-Vectors](https://pixabay.com/es/users/openclipart-vectors-30363/) and
[Clker-Free-Vector-Images](https://pixabay.com/es/users/clker-free-vector-images-3736/).

### 6.1. Acknowledgments
