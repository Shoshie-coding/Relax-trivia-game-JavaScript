# **Relax trivia game**

The goal of this game is for people to test their knowledge on 4 different subjects and have fun while doing it. The website is aimed at people who are curious about history, geography, movies, and literature 

You can view the live website [here](https://shoshie-coding.github.io/Relax-trivia-game-JavaScript/).

![Amiresponsive screenshot](assets/images/am-i-responsive-screenshot.png) 


## **Features**
### **Existing Features**
- **Homepage play and scores buttons** 
The Homepage features the Play game and scores buttons. This welcomes the user when they first acccess the website and it provides a segway to the actual game. 

![Main page screenshot](assets/images/homepage-screenshot.png) 

- **Navigation menu and footer**
The navigation menu and footer are present on all website pages. They allow users to navigate to the Homepage, Category page and Scores page which are the pages of interest for the user. These have the same color to allow the user not be distracted by the styling but be focused on the game. 

![Header and footer screenhot](assets/images/header-footer-screenshot.png) 

- **Pick a category page**
This page allows the user to pick a category they want to start the game with. There are 4 distinct categories to chose from: history, literature, geography and movies. These are represented by 4 images with similar color pallette that provide a smooth transition into the game. 

![Category page](assets/images/category-page-screenshot.png) 

- **The game page**
This is where the users can play the game and answer the trivia questions. It features an area on the top that displays question counter and the score, it shows the user the questions they need to answer and 4 options to chose from.
When the user answers correctly, the correct option turns green. When the user's answer is incorrect, their selection turns red and the correct selection turns green. 

![Game page](assets/images/game-page-screenshot.png)

- **The scores page and end game page**
The game is designed to store up to 5 scores the users can access from the main homepage as well as from the navigation menu. When the game is finished the users can add a name so the game can be stored in local storage. 

![Scores page](assets/images/scores-page-screenshot.png)
![End page](assets/images/end-page-screenshot.png)


### **Features left to implement**
- Currently the questions are fetched automatically from the game.js file where they are stored. For the sake of this website, we've only added 5 questions per each category but in the future, a goos feature to implement is to fetch questions directly from an API trivia game database which will allow us more questions to the game. 

## Design
- ### **Color Theme and imagery**
[Adobe Color](https://color.adobe.com/create/color-wheel) was used to extract the color theme for the website.
The colors were extracted using the 4 images on the website. This provides consistency all throughout the website. 

- ### **Typography**
'Scheherazade New' style is used on the whole website, with a fall-back on serif.

## **Technologies**
#### **Languages Used**
- [HTML](https://en.wikipedia.org/wiki/HTML5) 
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) 

#### **Frameworks, Libraries & Programs Used**

1. [Google Fonts](https://fonts.google.com/) was used to import the font 'Scheherazade New'.

2. [Adobe color](https://color.adobe.com/mythemes) was used to extract the colors used on the website. 
3. [Git](https://git-scm.com/) was used to used to edit the code on the Gitpod terminal, to commit to Git and Push to GitHub.

4. [GitHub](https://github.com/) is used to store the project code after being pushed from Git. 

## **Testing**
### **Validator Testing**

#### HTML code validator 
The website passed all code validations
![HTML code validator](assets/images/html-validator-1.png)
![HTML code validator](assets/images/html-validator-2.png)
![HTML code validator](assets/images/html-validator-3.png)
![HTML code validator](assets/images/html-validator-4.png)
![HTML code validator](assets/images/html-validator-5.png)


#### CSS code validator
![CSS code validator](assets/images/css-validator-1.png)
![CSS code validator](assets/images/css-validator-2.png)
![CSS code validator](assets/images/css-validator-3.png)
![CSS code validator](assets/images/css-validator-4.png)
![CSS code validator](assets/images/css-validator-5.png)




#### Lighthouse report
The website passed the Lighthouse report for all pages
![Lighthouse report index page](assets/images/lighthouse-1.png)
![Lighthouse report index page](assets/images/lighthouse-2.png)
![Lighthouse report index page](assets/images/lighthouse-3.png)
![Lighthouse report index page](assets/images/lighthouse-4.png)
![Lighthouse report index page](assets/images/lighthouse-5.png)

#### Jshint JavaScript Validator
Validation for JavaScript passed
![Jshint validator](assets/images/jshint-scores-js.png)
![Jshint validator](assets/images/jshint-game-js.png)
![Jshint validator](assets/images/jshint-end-game-js.png)


### **Responsiveness Test**
- I used media queries to make my website responsive and can confirm that the website is responsive on all the screen sizes and devices I used as well as various browsers as listed below. 

### **Browser compatibility**
- I tested my website on various browsers and screen sizes as shown below. The website works well and is responsive on monitors and laptop screens. 
- I also tested the website using Chrome dev tools device toolbar, by adjusting the size of the window and by selecting the pre-set devices available there. 
- All links are clickable and open in a new tab. 
- Pictures resize accurately and are clear, nor blurry or pixelated. 

#### Browsers
- Chrome
- Microsoft Edge 
- Internet Explorer
- Mozilla Firefox
- Safari

#### Devices:
- Desktop
- Laptop
- Samsung S10 Plus
- Huawei P30
- iPhone 8
- iPhone XS
- Samsung tablet
- Lenovo tablet

### **Bugs** 
#### **Known Bug - header image on home page not displayed on tablet**
- On the game page, when clicking the option a, b, c or d - sometimes the buttons are not responsive, this is sporadic currently, therefore not trully a bug per se. 

## **Deployment**
### GitHub Pages
The project was deployed to GitHub Pages using the following steps:
1. Go to GitHub and locate the repository to be deployed [GitHub Repository](https://github.com/Shoshie-coding/project-1)
2. On the top right-hand side - click Settings
3. Scroll down until you locate the Pages tab on the left-hand side navigation menu. 
4. Under Source - click on the drop-down called None and select Main and leave the /(root) option as it is. 
5. Click Save 
6.  The Page refreshes itself - message " Your site is ready to be published at https://shoshie-coding.github.io/project-1/. 
7. Refresh page - notice message -  Your site is published at https://shoshie-coding.github.io/project-1/. 

### Clone a repository using these steps:
1. On GitHub, navigate to the main page of the repository.

2. Above the list of files, click the Code button.
3. To clone the repository using HTTPS, under "Clone with HTTPS", click the clone symbol. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the clone symbol next to it. To clone a repository using GitHub CLI, click Use GitHub CLI, then click the same clone symbol .
4. Open Git Bash and change the current working directory to the location where you want the cloned directory.

5. Type git clone, and then paste the URL you copied earlier.

6. You will see a message confirmation that the command was successul. 


## **Credits**

### **Content**
The following resources were used as sources of information and inspiration for the content on my website:

- [Open trivia database](https://opentdb.com/api_config.php) - this online trivia database was used to generate questions for the game 


### **Media**
All pictures from my website were downloaded for free from unspalsh


### **Code**
YouTube Tutorials for building a game quizz 
- [Brian Design - How to Make a Quiz App using HTML CSS Javascript - Vanilla Javascript Project for Beginners Tutorial](https://www.youtube.com/watch?v=f4fB9Xg2JEY&list=PLeh6WLy2bEMGGBIU4y-aKyqJ-gIbIZfSU&index=1&t=2995s&ab_channel=BrianDesign).

- [James Q Quick - Build a Quiz App](https://www.youtube.com/watch?v=3aKOQn2NPFs&list=PLeh6WLy2bEMGGBIU4y-aKyqJ-gIbIZfSU&index=2&ab_channel=JamesQQuick)

## Acknowledgements
My mentor for feedback and guiding me throughout the process and everyone at Code Institute who provided helpful tips along the way.  































