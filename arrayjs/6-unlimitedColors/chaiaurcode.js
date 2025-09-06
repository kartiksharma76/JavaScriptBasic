let intervalId;

document.getElementById('start').addEventListener('click', () => {
  if (intervalId) return; // Prevent multiple intervals running simultaneously

  intervalId = setInterval(() => {
    // Generate a random hex color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = randomColor;
  }, 1000); // Change every 1000ms = 1 second
});

document.getElementById('stop').addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null; // Reset so start can be clicked again
});
