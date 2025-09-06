const displayJoke = document.getElementById('display-joke');
const getJokeBtn = document.getElementById('getJoke');
const shareBtn = document.getElementById('shareBtn');

let currentJoke = '';

getJokeBtn.addEventListener('click', async () => {
  displayJoke.textContent = 'Loading joke...';
  shareBtn.disabled = true;

  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    if (!response.ok) throw new Error('Failed to fetch joke');

    const data = await response.json();
    currentJoke = data.value;
    displayJoke.textContent = currentJoke;
    shareBtn.disabled = false;
  } catch (error) {
    displayJoke.textContent = 'Oops! Could not fetch a joke. Try again later.';
    console.error(error);
    shareBtn.disabled = true;
  }
});

shareBtn.addEventListener('click', () => {
  if (!currentJoke) return;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentJoke + ' #ChuckNorris')}`;
  window.open(twitterUrl, '_blank', 'width=550,height=420');
});
