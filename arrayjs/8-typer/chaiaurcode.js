const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const words = ['awesome', 'fun', 'powerful', 'cool', 'easy'];
const typingDelay = 150;
const erasingDelay = 100;
const newWordDelay = 2000; // Delay before typing next word
let wordIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[wordIndex].length) {
    typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newWordDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    wordIndex++;
    if (wordIndex >= words.length) wordIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

// Optional blinking cursor effect
setInterval(() => {
  cursorSpan.classList.toggle('active');
}, 500);

// Start the typing effect on load
document.addEventListener('DOMContentLoaded', () => {
  if(words.length) setTimeout(type, newWordDelay + 250);
});
