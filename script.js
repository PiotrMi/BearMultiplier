function generateEmoji() {
    const emojiOutput = document.querySelector('.emoji-output');
    const randomCount = Math.floor(Math.random() * 10) + 1; // Generates a random count between 1 and 10
    const bearEmoji = '🐻';
    const bearEmojis = bearEmoji.repeat(randomCount);
    emojiOutput.textContent = bearEmojis;
  }
  
  function copyEmoji() {
    const emojiOutput = document.querySelector('.emoji-output');
    const emojiString = emojiOutput.textContent;
    navigator.clipboard.writeText(emojiString).then(() => {
      alert(`Copied ${emojiString} to clipboard!`);
    });
  }
  
  document.querySelector('.generate-button').addEventListener('click', generateEmoji);
  document.querySelector('.copy-button').addEventListener('click', copyEmoji);
  window.addEventListener('load', generateEmoji);
  