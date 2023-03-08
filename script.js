function generateEmoji() {
    const emojiOutput = document.querySelector('.emoji-output');
    const randomCount = Math.floor(Math.random() * 10) + 1; // Generates a random count between 1 and 10
    const bearEmoji = '🐻';
    const bearEmojis = bearEmoji.repeat(randomCount);
    emojiOutput.textContent = bearEmojis;
  }
  
  window.addEventListener('load', generateEmoji);
  