# Define Me
#### Video Demo: youtube.com/
#### Description:
Define Me is a multi-browser extension that can look up the definition to any word you can click on the internet. By pulling from [Dictionaryapi.dev](https://dictionaryapi.dev/) this extension uses [p5.js](https://p5js.org/) to generate definitions on the fly.

# Contents of the Define Me folder

*icons folder
  *icon16.png
  *icon48.png
  *icon128.png
*sketch folder
  *index.html
  *p5.min.js
  *sketch.js
*background.js
*content.js
*manifest.json

## icon folder

The icon folder includes icons formatted to 16x16, 48x48, and 128x128 which are needed for the extension to display correctly on browser.

## sketch folder

For this project I thought using p5.js to manipulate the extension's popup DOM would be a neat idea. The sketch folder holds index.html, p5.min.js, and sketch.js all necessary files for p5.js.

## index.html

index.html is the base page for the popup window. This index.html loads and executes the p5.js and sketch.js scripts and sets the size and background color of the popup page.

## p5.min.js

This file is a minified version of the p5.js file. It is a lighter version, with the same functionalities, but smaller file size.

## sketch.js

The sketch.js is a template for the p5.js sketch. This script is ultimately responsible for displaying the definition of the selected word to the user. After receiving the selected word from background.js, sketch.js sends a query to dictionaryapi.dev. Once it receives the results back a message will be generated on the popup based on if a valid definition is found.

## background.js

background.js is a script that runs on the background page of the extension. Its job is to receive the selected word from the content.js and pass it's info to the sketch.js to be queried.

## content.js

content.js is responsible for reading the word that the user highlights with their mouse in their browser and sending that information to the background.js.

## manifest.json

manifest.json provides important information that is necessary for the extension to run.


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------