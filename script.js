function generateEmoji() {
    let numOfEmojis = Math.floor(Math.random() * 10) + 1;
    let emojiString = "";
  
    for (let i = 0; i < numOfEmojis; i++) {
      emojiString += "🐻";
    }
  
    let emojiOutput = document.querySelector(".emoji-output");
    emojiOutput.innerHTML = emojiString;
    emojiOutput.style.display = "block";
    navigator.clipboard.writeText(emojiString);
  }
  