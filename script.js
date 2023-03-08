// Get the buttons and emoji container elements
const copyButton = document.getElementById('copy-button');
const smallButton = document.getElementById('small-button');
const mediumButton = document.getElementById('medium-button');
const largeButton = document.getElementById('large-button');
const emojiContainer = document.getElementById('emoji-container');

// Generate a random number of bear emojis
function generateBearEmoji(num) {
  let bearEmojis = '';
  for (let i = 0; i < num; i++) {
    bearEmojis += '🐻';
  }
  return bearEmojis;
}

// Generate a random number of bear emojis on page load
var randomNum = Math.floor(Math.random() * 50) + 1;
var bearEmojis = generateBearEmoji(randomNum);
emojiContainer.textContent = bearEmojis;

// Add event listeners to the buttons
copyButton.addEventListener('click', copyBearEmoji);
smallButton.addEventListener('click', function() {
  generateAndDisplayBearEmojis(1, 5);
});
mediumButton.addEventListener('click', function() {
  generateAndDisplayBearEmojis(5, 20);
});
largeButton.addEventListener('click', function() {
  generateAndDisplayBearEmojis(20, 100);
});

// Generate and display a random number of bear emojis within a range
function generateAndDisplayBearEmojis(min, max) {
  var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  var bearEmojis = generateBearEmoji(randomNum);
  emojiContainer.textContent = bearEmojis;
}

// Copy the emoji string to the clipboard
function copyBearEmoji() {
  navigator.clipboard.writeText(emojiContainer.textContent);
  alert('Bear emoji string copied to clipboard!');
}
