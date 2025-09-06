// chaiaurcode.js

// Select all color buttons
const buttons = document.querySelectorAll('.button');

// Add click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the id of the clicked button (e.g., "grey", "white", "blue", "yellow")
    const color = button.id;
    
    switch(color) {
      case 'grey':
        document.body.style.backgroundColor = '#888'; // medium grey
        break;
      case 'white':
        document.body.style.backgroundColor = '#fff'; // white
        break;
      case 'blue':
        document.body.style.backgroundColor = '#007BFF'; // bootstrap blue
        break;
      case 'yellow':
        document.body.style.backgroundColor = '#FFD700'; // gold/yellow
        break;
      default:
        document.body.style.backgroundColor = '#fff';
    }
  });
});
