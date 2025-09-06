// Select the progress bar element
const progress = document.querySelector('.progress');

// Add an event listener to the window for the 'scroll' event
window.addEventListener('scroll', function() {
  // Calculate the total scrollable height
  // (Total document height - viewport height)
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  
  // Get the current scroll position from the top
  const currentScroll = window.pageYOffset;
  
  // Calculate the scroll percentage (0 to 100)
  const scrollPercentage = (currentScroll / totalHeight) * 100;
  
  // Update the width of the progress bar to reflect the percentage
  // This creates a horizontal bar at the top.
  progress.style.width = scrollPercentage + '%';
  
  // ALTERNATIVE for a vertical bar on the side:
  // progress.style.height = scrollPercentage + '%';
});