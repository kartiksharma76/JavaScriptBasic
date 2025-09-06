console.log('Project 5');
const insert = document.getElementById('insert');

window.addEventListener('keydown', function(event) {
  insert.innerHTML = `
    <div class="key">You pressed: <span style="color: orange; font-weight: bold;">${event.key}</span></div>
    <div class="keycode">KeyCode: <span style="color: orange; font-weight: bold;">${event.keyCode}</span></div>
    <div class="code">Code: <span style="color: orange; font-weight: bold;">${event.code}</span></div>
  `;
});
