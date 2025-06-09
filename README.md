# WildFind

## Get to know us 

As a passionate web developer I love to combine fun with learning through interactive, user-driven experiences. This project showcases how data doesn’t have to be static — it can be explored, played with, and discovered.

My aim is to create a site that’s engaging for users of all ages, while also presenting meaningful information about the natural world. Whether you're here to test your skills, learn about wildlife, or just enjoy a beautifully crafted hidden objects rainforest game, I hope this experience brings you something new.

This project was built as part of my journey in learning and applying front-end technologies, and it reflects the following values:

📊 Interactive data presentation

🌿 Environmental awareness

🎮 User-centered design

💡 Creative learning experiences

Thanks for exploring with me — and happy finding! 🦁🦓🦒 

## Mockups

### Phones - Galaxy Z Fold 5
#### Game area portrait
![](assets/mock-ups/GalaxyZFold5-portrait.png)
#### Game area landscape hidden footer
![](assets/mock-ups/GalaxyZFold5-landscape.png)
#### Game area landscape with footer
![](assets/mock-ups/GalaxyZFold5-landscape-footer.png)
#### Info pop-up portrait
![](assets/mock-ups/GalaxyZFold5-info-portrait.png)
#### Info pop-up landscape 
![](assets/mock-ups/GalaxyZFold5-info-landscape.png)
#### Congratulations pop-up portrait
![](assets/mock-ups/GalaxyZFold5-congrats-portrait.png)
#### Congratulations pop-up landscape
![](assets/mock-ups/GalaxyZFold5-congrats-landscape.png)

### Tablets - iPad Air
#### Game area portrait
![](assets/mock-ups/iPadAir-portrait.png)
#### Info pop-up portrait
![](assets/mock-ups/iPadAir-portrait-info.png)
#### Congratulations pop-up portrait
![](assets/mock-ups/iPadAir-portrait-congrats.png)
#### Game area landscape
![](assets/mock-ups/iPadAir-landscape.png)
#### Info pop-up landscape
![](assets/mock-ups/iPadAir-landscape-info.png)
#### Congratulations pop-up landscape
![](assets/mock-ups/iPadAir-landscape-congrats.png)

### Laptop/desktops - NestHubMax
#### Game area
![](assets/mock-ups/NestHubMax.png)
#### Info pop-up
![](assets/mock-ups/NestHubMax-info.png)
#### Congratulations pop-up
![](assets/mock-ups/NestHubMax-congrats.png)

##  Live Demo

👉 View the website [here](https://irinaadeniyi.github.io/WildFind/)

## Technologies Used

HTML5

CSS3

Bootstrap

JavaScript

## GitHub User Story Project

A [project](https://github.com/users/IrinaAdeniyi/projects/5/views/1) containing user stories with acceptance criteria was created in GitHub. This was done to easily organize and prioritize work, as well as defining clear requirements and tracking progress.

## Wireframes

The wireframes for this website were created using [Balsamiq](https://balsamiq.com/education/)

*Disclaimer: The wireframes shown are for demonstration purposes only. The final implementation may vary from these initial representations.

### Smartphone view
![Game smartphone view](assets/wireframes/WildFind_smartphone.png)

### iPad view
![Game iPad view](assets/wireframes/WildFind_iPad.png)

### Laptop view
![Game laptop view](assets/wireframes/WildFind_browser.png)

## Building process

I started building my project by creating the structure tree. I then concentrated on the game-area images, which represent the background of the game. I chose to have two themes and challenges. The first theme is **The Big Five** - featuring the African Elephant, African Lion, African Leopard, African Buffalo and the Black Rhinoceros. These animals are five of the most iconic and sought-after animals to see on an African safari. The second theme is **Rainforest Creatures** - featuring the Tree Frog, Blue Morpho Butterfly, Boa Constrictor, Orchid and the Capuchin Monkey. These animals are ideal for learning about tropical ecosystems.

I then proceeded to hide the animals in the two backgrounds. I started with the blue morpho butterfly. I used a "hidden-object" class, and used the pointer value for the cursor attribute in css to change the cursor to a little hand pointing when the user hovers over a hidden object. I used jQuery to make a pop-up appear (alert() funtion) once a hidden object it's clicked and make it disspear after it is clicked.

I continued by adding all the hidden animals/plants to the Rainforest challenge. Once the hidden objects were in and the basic functionality of the game was working (finding object, clicking object, pop-up, object disappears and the word is crossed), I wanted to make the pop-up more interesting by adding a picture of the object, as well as some information. After researching I discovered that the alert() function, which I initially used for the pop-up, has limited functionality and I discovered a modal was more adequate for my needs. Moreover, I realised that I only used jQuery in my project and I needed to use JavaScript as well. Therefore, I proceeded to implement the above changes by using a modal as shown on [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp).

I first added the modal in the HTML file and I then styled it in the css file using mostly info from the above link from W3Schools. I then proceeded to write the JavaScript array, containing the animals/plants with their properties. Finally, I wrote the code to hide the object once it is clicked, to cross the matching name in the footer checklist and to show the modal pop-up with the info about the object. Once this was done I proceeded with writing the code for closing the modal. For this I thought two options would work: an x in the top right corner and clicking the background.

I then worked on the accesibility of the page, such as the text readability using the [ACCESSIBLEWEB checker](https://accessibleweb.com/color-contrast-checker/). 

At this point, I needed to add a counter for the found items, which I did and I corrected the background photo to make sure it doesn't scroll. 

Further, I added a pop up message as well for when all the hidden objects are found. Finally I changed the alert() function with a modal to present the congratulations message at the end of the game in a better way.

I then concentrated on improving the responsiveness of the game. Once I managed to make the background picture show fully in all screen sizes, I started working on the footer. To make it responsive in all sizes and orientations I used different CSS stylings and I used JavaScript to move the counter from the game-area to the footer in portrait mode. In landscape mode I hid the footer and added a button to toggle it (make it appear to see the items that need to be found and dissapear to allow use better view of the background) using JavaScript as well.

I then proceeded to make the pop-ups responsive, which was a quick and easy fix.

I checked that the project is fully responsive. While it is fully responsive when I choose different screen sizes in the inspect mode and when I resize the width of the page manually, it is not fully responsive when I resize both the wisth and height of the page manually.

Once I completed the game, I checked that all links and buttons work as expected. Once I finalised the manual checks, I used tools like HTML and CSS validators, jshint for JavaScript, as well as the Lighthouse feature in Chrome DevTools. The lighthouse tool higlighted some issues that were resolved to the best of my ability. This was also checked in the deployed site.

Finally the README file was updated - this was also updated throughout the development process.

## Project Structure
- **assets**: Contains the static files for the website.
  - **css**: The folder containing the main styles for the site (style.css).
  - **favicon_io**: Favicon folder
  - **images**: Contains all images for the website.
  - **js**: Contains the JavaScript file: script.js
  - **lighthouse**: Contains a printscreen of the lighthouse scores
  - **mock-ups**: Contains different printscreens for different sizes and features
  - **wireframes**: A folder containing the wireframes of this project
- **index.html**: The HTML file
- **README**: A detailed description of the whole project 

## Features

1. Main game area with hidden objects
![](assets/mock-ups/Nest-Hub-max.png)

- The background image is responsive on all devices. 

- The hidden objects keep their position and look good in all screen sizes. 

2. Hidden objects info pop-up
![](assets/mock-ups/NestHubMax-info.png)

- When a user hover on a hidden object the cursor shows as a little pointing hand.
- The info pop-up works well in all screen sizes.
- The pop-up appears when the user clicks on a hidden object.
- To close the pop-up the user can either click the classic x on the top right corner or just click outside of the pop-up.


3. Found hidden objects counter
![](assets/mock-ups/counter.png)

- This section is fully responsive in all screen sizes, in special screen sizes such as Galaxy Z Fold 5 lanscape orientation, the counter also contains a button to help toggle the footer for responsivenes. The button text updates as needed.
![](assets/mock-ups/GalaxyZ-counter.png)
![](assets/mock-ups/GalaxyZ-counter-hide.png)

- The counter updates every time a new hidden object is found

- The counter also moves from the main game area to the footer on phones screens portrait orientation for responsiveness.

4. Footer
![](assets/mock-ups/footer.png)

- This section is responsive, however I would have liked to be able to eliminate the scrolling that happenes in certain screen sizes.

- Every time a hidden object is found the corresponding word in the footer gets crossed.

5. Congratulations pop-up
![](assets/mock-ups/NestHubMax-congrats.png)

- This section is fully responsive.

- Once the user finds all of the hidden objects the pop-up appears.

- It also contains a button, who allows the user to play the game again.

## Possible future features
In the future I would like to implement the remaining user stories (could-have): accesibility and challenges. This means that I would like to add features to offer the user options for dark and bright modes, as well as sounds. In addition, I would have liked to add a timer and add some difficulty levels to the game. Finally, more challenges would have been nice to have as well, such as *Big Five: Savannah Challenge*. Also, once the user finishes one game and chosses to play again, it would be good to have new items hidden around.

## Testing
Detailed testing was done on the website to ensure the website works properly.

| Feature    | Expected behaviour | Outcome  |
| -----------|:------------------:| --------:|
| Page background | Looks good in all screen sizes|  Works as expected  |
| Footer       | Looks good in all screen sizes and the hidden object corresponding word in the footer is crossed once the hidden object is cliked | Works as expected in most screen sizes, with a need for scrolling in very few screen sizes - when the page is manually resized - without breaking the functionality of the website and the logic works without issues in all screen sizes |
| Hidden objects | Responsive with page resizing, little pointer appears when hovered over, the object dissapears when cliked, a pop-up appears with a picture and info regarding the hidden object | Works as expected         |
| Counter | Updates as the hidden objects are found and it is fully responsive in all screen sizes (moving from the main screen to the footer as needed) | Works as expected
| Congratulations modal | Looks good on all screen sizes, appears after all the objects are found and contains a button to refresh the game and play again, which works well and adapts to all scren sizes | Works as expected |

## Troubleshooting
1. The first issue I encountered was the crossing of the words, once the hidden object is found. Initially it didn't work because I did not wrapped it in the $(document).ready(...) function, to ensure it runs after the page is loaded (i.e. the HTML document has been fully loaded).

2. The second issue I encounter, is again the crossing of the word once the hidden object is found. step one worked initially because I didn't have an icon next to the word. After adding the icons I noticed the crossing was not working anymore. Therefore, I assumed it will be the img tag that interferes with the crossing and I enclosed the text in a span tag. This helped resolve the issue.

3. I initially used jQuery to make a pop-up appear when the object was found. I then realised that the project requries JavaScript and I decided to change the code to JavaScript. After researching I realised that the alert() function was not a good idea, because it has limited functionality. Therefore, I proceeded to use a modal.

4. Initially, I declared the hiddenObjects array inside the DOMContentLoaded event listener, so it wasn't accessible outside that function for the click handlers to use it - it was not lighting up in the js file and a message was saying that it wasn't used. As a result the pop-up didn't work. The solution was to move the array outside of the DOMContentLoaded callback, to be accesible everywhere.

5. After I created the pop-up and added all the necessary details, when I tested it was still not working. After several attempts to find the issue, I realised it was a typo: I wrote DOMContentLoade instead of DOMContentLoaded.

6. I then found an issue with the closing of the pop-up, which didn't work. After checking the console, I noticed I was getting an error (document.querySelector('.close-btn').addEventListener('click', function () {document.getElementById('infoModal').style.display = 'none';});). After investigating, the issue was resolved by putting the code inside the DOMContentLoaded event listener.

7. I used the [ACCESIBLEWEB](https://accessibleweb.com/color-contrast-checker/) to check the readability of the footer, as it seemed problematic. This was confirmed and I then changed the footer background color and the text color to ensure readability.

8. The background picture was not fitting inside of the screen and scrolling was needed. This, in my opinion, was not suitable for a game, therefore, I looked up solutions and I tried a couple options such as background-size: contain [stackoverflow](https://stackoverflow.com/questions/33578169/css-make-image-fit-screen-so-no-scroll-bars-appear), but this didn't work. Finally, I discovered the calc() function in CSS ([W3Schools](https://www.w3schools.com/cssref/func_calc.php)), which worked. Initially, this seemed to not do anything, however, after researching I discovered that the *-* needs space before and after ([stackoverflow](https://stackoverflow.com/questions/30678942/does-calc-work-for-background-size-of-image-in-css)). 

9. I initially wrote a function updateCounter() to update the counter and I was calling this function inside the click event listener. I also put an alert (to show a congratulations message once all the hidden objects are found) inside this function. However, this was creating an unwanted behaviour: the congratulation message was showing before the final hidden object pop-up was showing and before the word was crossed. To resolve this, I've updated the function to just return the count and I changed the click event handler to save the count via the function updateCounter(). Finally, I moved the alert message inside the function for the closing of the pop-up with the hidden object info - button and background.

10. I've spent a good amount of time trying to resolve responsiveness issues. The background picture, was being cut and the hidden objects were moving accross the screen. After trying numerous methods to resolve this, I have finally managed to make it acceptable, by using aspect ration ([w3schools](https://www.w3schools.com/cssref/css_pr_aspect-ratio.php)) and numerous media queries where I calculated the hight of the picture using the calc() function to account for the footer size. For mobiles I made sure the game is responsive in both landscape and landscape mode.

11. I encountered an issue where my counter was moving to the footer when resing the screen down, however, when resizing back up the counter would not move back out of the footer. This happened because when the counter was moved to the footer, .footer-counter-placeholder was automatically becoming its parent, and it never returned to the .game-area. To ensure that the code puts it back there I've created a wrapper div .counter-holder for the counter and updates the moveCounter() function to use these fixed containers. 

12. While using the Markup Validator I got an error because in the modal in HTML I did not have a src for the img. Therefore I added # and in-line styling to hide it. However, this was removing all of my photos from the pop-up. To resolve this I just changed the js to show the image (override the display: none used in line in the HTML).

13. I have managed to make the website alsmost fully responsive by playing some more with my CSS and I realised some of the changes I have done to make the footer dissapear on landscape phone screens, were breaking my responsivenes, so I took it out and made the phone landscape responsive without removing the footer. However, there have been some special situations where I had to write code specifically for a device such as Samsung Galaxy A51/71, Surface Duo, Nest Hub and Galaxy ZFold 5 all in landscape. I kept the hidden footer for both Samsung Galaxy A51/71 and Galaxy ZFold 5.

## Remaining bugs
In very few screen sizes, the footer content needs to be scrolled. However, these screen sizes are not standard screens sizes, therefore, the chance of a user having to scroll the footer is very low.Also, this doesn't break the functionality of the website, it is more a UX issue. At this moment, attempting to address this issue might break the rest of the code. In the future this could absolutely be attempted and resolved. Very small screens in landscape are also not fully responsive.

## Website checks using validation tools
### Lighthouse scores
While I tried my best to get very good lighthouse scores (preloading images and links and only necessary CSS, resizing photos to smaller sizes - all well under 300kb), the maximum I could get for performance is 73, as shown below. This could absolutely be looked into in the future for improvement.

![](assets/lighthouse/lighthouse-scores.png)

**Both the W3C Markup Validator and W3C CSS validator returned no errors.**
**JavaScript code checked with JSHint to validate syntax and spot potential issues. All cleared.**

## Deployment

The site was deployed to GitHub pages.

I used the following steps to deploy:

1. Go to repository WildFind github.
2. Settings on the top right corner.
3. Locate Pages in the menu section on the left of the screen.
4. Select main option for the branch.
5. Click save.
6. Reload the page and after a little while a link for the deployed site will appear at the top.
7. When you click the link it will take you to the site.

## Setup Instructions
1. Clone my [repository](https://github.com/IrinaAdeniyi/WildFind.git).

2. Open index.html in your browser, or deploy via GitHub Pages.

## Credits

1. Rainforest challenge background image was downloaded from [here](https://images.app.goo.gl/E2rXu6p7dGurHyfh8)
2. I used [rawpixel](https://www.rawpixel.com/) for svgs and pngs
3. I used [flaticon](https://www.flaticon.com/free-icon/jeep_3251221?term=safari&page=1&position=75&origin=search&related_id=3251221) for the favicon 
4. [favicon](https://favicon.io/favicon-converter/)
5. W3Schools
6. StackOverflow
7. AI
8. Code Institute lessons
9. [accesibleweb](https://accessibleweb.com/color-contrast-checker/)
10. [coolors](https://coolors.co/)
11. [Shrink.media](https://www.shrink.media/upload)
12. My tutor and my mentor's help and suggestions



