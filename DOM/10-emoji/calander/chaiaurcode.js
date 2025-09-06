const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Grab the elements where you want to display month/year and days
const monthDiv = document.getElementById('month');
const daysDiv = document.getElementById('days');

const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
const currentDate = today.getDate();

// Show month and year
monthDiv.textContent = monthNames[currentMonth] + " " + currentYear;

// Find which day the month starts on (0 = Sunday, 6 = Saturday)
const firstDay = new Date(currentYear, currentMonth, 1).getDay();

// Find how many days this month has
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

// Clear any previous days
daysDiv.innerHTML = '';

// Add blank spaces for days before the 1st of the month
for (let i = 0; i < firstDay; i++) {
  const emptyDiv = document.createElement('div');
  emptyDiv.classList.add('empty'); // optional CSS class to style blank days
  daysDiv.appendChild(emptyDiv);
}

// Add each day of the month
for (let day = 1; day <= daysInMonth; day++) {
  const dayDiv = document.createElement('div');
  dayDiv.textContent = day;

  // Highlight today’s date
  if (day === currentDate) {
    dayDiv.classList.add('today'); // style this in your CSS
  }
  
  daysDiv.appendChild(dayDiv);
}
