// Select DOM elements
const generateButtons = document.querySelectorAll('.generate-button');
const copyButton = document.querySelector('#copy-button');
const emojiOutput = document.querySelector('#emoji-output');
const headline = document.querySelector('h1');

// Define the bear emoji character codes
const bearEmojis = [
  String.fromCodePoint(0x1F43B), // bear face
  String.fromCodePoint(0x1F43C), // bear
  String.fromCodePoint(0x1F9A5), // polar bear
  String.fromCodePoint(0x1F98B), // grizzly bear
  String.fromCodePoint(0x1F43A), // panda
];

// Generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a string of a random amount of bear emojis
function generateBearEmoji(min, max) {
  const numBearEmojis = getRandomInt(min, max);
  let bearEmojiString = '';
  for (let i = 0; i < numBearEmojis; i++) {
    const randomIndex = getRandomInt(0, bearEmojis.length - 1);
    bearEmojiString += bearEmojis[randomIndex];
  }
  return bearEmojiString;
}

// Handles the "Generate Bear Emoji" button click
function handleGenerateClick(event) {
  const min = event.target.dataset.min;
  const max = event.target.dataset.max;
  const bearEmoji = generateBearEmoji(min, max);
  emojiOutput.textContent = bearEmoji;
}

// Add event listeners to the "Generate Bear Emoji" buttons
generateButtons.forEach((button) => {
  button.addEventListener('click', handleGenerateClick);
});

// Add event listener to the "Copy Bear Emoji" button
copyButton.addEventListener('click', copyBearEmoji);

// Copies the current bear emoji string to the clipboard
function copyBearEmoji() {
  const range = document.createRange();
  range.selectNode(emojiOutput);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}

// Add event listener to the document to deselect the text on click outside
document.addEventListener('click', () => {
  window.getSelection().removeAllRanges();
});

// Add event listener to the headline to copy the bear emoji string
headline.addEventListener('click', copyBearEmoji);

// Move the emoji output over the buttons
emojiOutput.style.order = '1';
generateButtons.forEach((button) => {
  button.style.order = '2';
});

// Add event listeners to the additional "Generate Bear Emoji" buttons
const generateButton1 = document.querySelector('#generate-button-1');
const generateButton2 = document.querySelector('#generate-button-2');
const generateButton3 = document.querySelector('#generate-button-3');
generateButton1.addEventListener('click', handleGenerateClick);
generateButton2.addEventListener('click', handleGenerateClick);
generateButton3.addEventListener('click', handleGenerateClick);
generateButton1.dataset.min = '1';
generateButton1.dataset.max = '5';
generateButton2.dataset.min = '5';
generateButton2.dataset.max = '20';
generateButton3.dataset.min = '20';
generateButton3.dataset.max = '100';
