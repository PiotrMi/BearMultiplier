const generateButton = document.querySelector('.generate-button');
const copyButton = document.querySelector('.copy-button');
const emojiOutput = document.querySelector('.emoji-output');

// Generates a random number between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generates a string of bear emojis with a random length between 1 and 10
function generateBearEmoji() {
  const bearEmoji = '🐻';
  const length = getRandomInt(1, 10);
  return bearEmoji.repeat(length);
}

// Copies the bear emoji string to the clipboard
function copyBearEmoji() {
  const emojiString = emojiOutput.textContent;
  navigator.clipboard.writeText(emojiString)
    .then(() => {
      console.log('Emoji string copied to clipboard:', emojiString);
      //alert('Bear emoji string copied to clipboard!');
    })
    .catch((err) => {
      console.error('Failed to copy emoji string:', err);
      //alert('Failed to copy bear emoji string :(');
    });
}

generateButton.addEventListener('click', () => {
  const bearEmojiString = generateBearEmoji();
  emojiOutput.textContent = bearEmojiString;
});

copyButton.addEventListener('click', () => {
  copyBearEmoji();
});
