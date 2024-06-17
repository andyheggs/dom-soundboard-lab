/*

Planned Overview
    soundboard
        sounds
        images
        CSS
        JS
        html

Setup project structure:
  - Create directory soundboard/
  - Create subdirectories: sounds/, images/, styles/, scripts/
  - Place sound files in sounds/
  - Place images (logo.png, head.gif) in images/

Create index.html:
  - Create file index.html in soundboard/
  - Add HTML boilerplate
  - Link to styles/main.css
  - Link to scripts/app.js
  - Add <img> tag for logo.png
  - Add buttons with data-sound attributes for each sound file

Create main.css:
  - Create file main.css in styles/
  - Set background color to white
  - Style logo image
  - Style buttons (padding, margin, color)
  - Add hover effect to buttons (scale and background image)

Create app.js:
  - Create file app.js in scripts/
  - Wait for DOMContentLoaded event
  - Select all buttons in .soundboard div
  - For each button:
    - Add click event listener
    - Get data-sound attribute value
    - Create new Audio object with sound file path
    - Play the sound
    - Log the sound file name to console

    */
    document.addEventListener('DOMContentLoaded', () => {

    const soundButtons = document.querySelectorAll('.soundboard button');

    soundButtons.forEach(button => {
      button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        const audio = new Audio(`./sounds/${soundFile}`);
        audio.play();
  
        console.log(`Playing sound: ${soundFile}`);
      });
    });
    })
  