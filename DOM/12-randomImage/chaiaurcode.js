const contentDiv = document.querySelector('.content');
const button = document.querySelector('button');

function addRandomImage() {
  const img = document.createElement('img');
  // Get a random image 400x300 from Unsplash Source
  img.src = `https://source.unsplash.com/random/400x300?sig=${Date.now()}`;
  img.alt = 'Random Image';
  img.style.margin = '10px';
  img.style.borderRadius = '8px';
  img.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
  img.loading = 'lazy';

  contentDiv.appendChild(img);
}

// Add one image at start
addRandomImage();

// Add new image each time button is clicked
button.addEventListener('click', addRandomImage);
