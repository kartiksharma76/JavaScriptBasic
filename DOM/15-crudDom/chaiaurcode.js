const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get input values
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const year = document.getElementById('year').value.trim();

  // Simple validation
  if (!title || !author || !year) {
    alert('Please fill in all fields');
    return;
  }

  // Create a new book row
  const bookRow = document.createElement('section');
  bookRow.classList.add('table-section');

  bookRow.innerHTML = `
    <div>${title}</div>
    <div>${author}</div>
    <div>${year}</div>
  `;

  // Append to book list
  bookList.appendChild(bookRow);

  // Clear form inputs
  bookForm.reset();
});
