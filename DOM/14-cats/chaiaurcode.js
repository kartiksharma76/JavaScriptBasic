const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

btn.addEventListener('click', async () => {
  btn.textContent = 'Loading...';
  try {
    // Using The Cat API (no API key required for basic usage)
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    if (!response.ok) throw new Error('Failed to fetch cat image');

    const data = await response.json();
    const catImageUrl = data[0].url;

    // Create or update image element
    container.innerHTML = `<img src="${catImageUrl}" alt="Random Cat" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" />`;
  } catch (error) {
    container.textContent = 'Oops! Could not fetch a cat image.';
    console.error(error);
  } finally {
    btn.textContent = 'Get Random Cat';
  }
});
