# ¡Olé Spanish!

![¡Olé Spanish!](readme-files/ms2-amiresponsive.png)

¡Olé Spanish! memory game is a great way to practice Spanish vocabulary while having fun. This memory game will test both your vocabulary and your memory.

You can visit the deployed website [here](https://fernandagil.github.io/ms2-olespanish-game/).

---

## 1. UX

### 1.1. Project Goals

This game was designed for students of all ages learning the Spanish language (or just curious!). 
It works like a simple memory game, with the difference that each picture has the name written on it
and the word's pronunciation for a better learning experience.

This game was also designed for anybody without prior Spanish knowledge or interest, since it's not a requisite to play the game and have a good time.

This project’s main goals are:
- to learn new words
- to strengthen memory
- to have fun!

### 1.2. User Stories

###### Entertainment Goals
- As a user, I’d like to have fun while playing an easy game.
- As a user, I’d like a game that has simple but nice visuals, with easy recognisable pictures.
- As a user playing for the first time, I'd like the game structure to be obvious so I can start playing right away.
- As a user that doesn’t know how the game works, I'd like to be able to find the instructions easily.
- As a competitive user, I’d like to know how much time I needed to complete the game and how many moves I needed.

###### Didactic Goals
- As a teacher, I’d like a game where my students can learn while having fun.
- As a teacher, I'd like a challenging game that my students will want to play at home for fun and learn new words in the process.
- As a student, I’d like to test the new vocabulary I learn in Spanish class while having fun in the process.
- As a student, I’d like to hear the pronunciation of the words I’m learning.

### 1.3. Design Choices

- **Fonts**: as my project has a strong didactical factor, I decided to go with Nixie One for most of the text in the project because it’s a neat and easy to read font that I associate with old typewriters. To create the logo and to emphasize other pieces of text I used Fascinate Inline.
- **Cards**: I chose the fruits as a topic for my cards because it’s one of the first things you learn when studying a new language. I thought this would make the game easier for people with basic or no Spanish knowledge. After choosing a background image to keep some consistency, I used [Canva](https://www.texttomp3.online/) to edit this background image with the vectors obtained from [Pixabay](https://pixabay.com/) to represent every word in the vocabulary.
- **Audio files**: to generate every word’s pronunciation I used [Text 2 MP3](https://www.texttomp3.online/).
- **Colours**: to keep consistency through the project, I first selected an [image](https://pixabay.com/es/illustrations/papel-digital-de-fondo-patr%C3%B3n-5049042/) to be the back of the cards, and from that image I created the colour palette.

![colour palette](readme-files/ms2-palette.png)

### 1.4. Wireframes
The wireframes were designed using [Balsamiq](https://balsamiq.com/). They're accessible in the following links:

|    Desktop   |    Tablet    |    Mobile    |
|    :----:    |     :----:   |    :----:    |
|[Home Page](wireframes/desktop-home.jpg)|[Home Page](wireframes/tablet-home.jpg)|[Home Page](wireframes/mobile-home.jpg)|
|[Instructions Page](wireframes/desktop-instructions.jpg)|[Instructions Page](wireframes/tablet-instructions.jpg)|[Instructions Page](wireframes/mobile-instructions.jpg)|
|[Refresh Vocabulary Page](wireframes/desktop-vocabulary.jpg)|[Refresh Vocabulary Page](wireframes/tablet-vocabulary.jpg)|[Refresh Vocabulary Page](wireframes/mobile-vocabulary.jpg)|
|[Game Page](wireframes/desktop-game.jpg)|[Game Page](wireframes/tablet-game.jpg)|[Game Page](wireframes/mobile-game.jpg)|

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
- **Cards grid**: allows the user to play the game.

**Game Over Modal** that displays once the user has matched all the cards. It includes:
- **Exit button**: closes the modal.
- **Congratulations Message**: it congratulates the player and allows them to know how many moves and how much time they needed to finish the game.
- **Play again button**: allows the user to play another game.

### 2.2. Potential Features

An idea to implement in the future would be adding a new level of difficulty. This new level would consist in matching an image with its name, following the memory game structure. This would be exclusive for students that already have some knowledge of Spanish. 

Another idea would be saving every user's time and moves and do a scoreboard.

---

## 3. Technologies used

- [HTML5](https://html.com/) - provides the content and structure for my website.
- [CSS3](http://www.css3.info/) - provides the styling.
- [JavaScript](https://www.javascript.com/) - provides the functionality and interaction.
- [Bootstrap](https://getbootstrap.com/) - used to create the layout of the project.
- [Balsamiq](https://balsamiq.com/) - used to create the project's wireframes.
- [Gitpod](https://gitpod.io/) - used to develop the website.
- [GitHub](https://github.com/) - used to host the project.
- [Google Fonts](https://fonts.google.com/) - used to provide the fonts Nixie One for the main text, and Fascinate Inline for some headers.
- [Font Awesome](https://fontawesome.com/) - used the Font Awesome icons to hear the voice clip in the Refresh Vocabulary page.
- [Canva](https://www.canva.com/) - used to design all the cards, the game's logo and icon.
- [Favicon](https://www.favicon-generator.org//) - used to create the icon from the design made with Canva.
- [Pixabay](https://pixabay.com/) - used to get images for the project.
- [TinyJPG](https://tinyjpg.com/) - used to compress the size of the images and icon before making it a Favicon.
- [HTML Color Codes](https://html-color-codes.info/): to select colours codes from an image to create the website's colour palette.
- [Text 2 MP3](https://www.texttomp3.online/): to generate the vocabulary words' pronunciation.
- [Coolors.co](https://coolors.co/): to generate the color palette for the project.
- [Autoprefixer](https://autoprefixer.github.io/) - used to parsethe CSS and to add vendor prefixes to CSS rules.
- [Am I Responsive?](http://ami.responsivedesign.is/) - used to show in a quick visual way the responsiveness of the site.

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

I created the timer functionality following [Jade O'Sullivan Memory Game](https://github.com/Jadeosull93/memorygame) and adapting it to my project's requisites.

### 6.2. Media

The pictures used in this site were all obtained from [Pixabay](https://pixabay.com/), specifically from the creators: 
[AnnaliseArt](https://pixabay.com/es/users/annaliseart-7089643/),
[OpenClipart-Vectors](https://pixabay.com/es/users/openclipart-vectors-30363/) and
[Clker-Free-Vector-Images](https://pixabay.com/es/users/clker-free-vector-images-3736/).

They were edited using [Canva](https://www.canva.com/).

### 6.1. Acknowledgments

I would like to thank my Code Institute Mentor [Precious Ijege]() for his advice and guidance on the project.

The Code Institute Tutor Team, Samantha, Scott, Stephen and specially Johann, who were very patient every time I needed guidance.

Emmet, Des, Fati and Marina, who encouraged me through the process and tested the project as many times as I needed.
