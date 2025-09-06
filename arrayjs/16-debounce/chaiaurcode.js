const input = document.getElementById('user-input');
const userCard = document.getElementById('user-card');
let debounceTimeout = null;

input.addEventListener('input', () => {
  clearTimeout(debounceTimeout);

  const query = input.value.trim();
  if (!query) {
    userCard.innerHTML = '';
    return;
  }

  // Debounce: wait 500ms after user stops typing
  debounceTimeout = setTimeout(() => {
    fetchUser(query);
  }, 500);
});

async function fetchUser(username) {
  // Updated regex: allows letters, numbers, hyphens, underscores, and dots
  const usernameRegex = /^[a-zA-Z0-9-_.]+$/;
  if (!usernameRegex.test(username)) {
    userCard.innerHTML = '<p style="color: red;">Please enter a valid GitHub username.</p>';
    return;
  }

  userCard.innerHTML = 'Loading...';

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error('User not found');
    }

    const data = await response.json();
    displayUser(data);
  } catch (error) {
    userCard.innerHTML = `<p style="color: red;">${error.message}</p>`;
  }
}

function displayUser(user) {
  userCard.innerHTML = `
    <img src="${user.avatar_url}" alt="${user.login}" />
    <h2>${user.name || user.login}</h2>
    <p><strong>Followers:</strong> ${user.followers}</p>
    <p><strong>Following:</strong> ${user.following}</p>
    <p><strong>Public Repos:</strong> ${user.public_repos}</p>
    <a href="${user.html_url}" target="_blank" rel="noopener noreferrer">View Profile</a>
  `;
}
