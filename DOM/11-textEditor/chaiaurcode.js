const inputField = document.getElementById('input-field');
const outputField = document.getElementById('output-field');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let text = inputField.value;

    if (!text) {
      outputField.textContent = 'Output';
      outputField.style.fontWeight = 'normal';
      outputField.style.fontStyle = 'normal';
      outputField.style.textDecoration = 'none';
      return;
    }

    switch (true) {
      case button.classList.contains('uppercase'):
        outputField.textContent = text.toUpperCase();
        break;

      case button.classList.contains('lowercase'):
        outputField.textContent = text.toLowerCase();
        break;

      case button.classList.contains('capitalize'):
        outputField.textContent = text
          .toLowerCase()
          .replace(/\b\w/g, char => char.toUpperCase());
        break;

      case button.classList.contains('bold'):
        outputField.textContent = text;
        outputField.style.fontWeight = outputField.style.fontWeight === 'bold' ? 'normal' : 'bold';
        break;

      case button.classList.contains('italic'):
        outputField.textContent = text;
        outputField.style.fontStyle = outputField.style.fontStyle === 'italic' ? 'normal' : 'italic';
        break;

      case button.classList.contains('underline'):
        outputField.textContent = text;
        outputField.style.textDecoration = outputField.style.textDecoration === 'underline' ? 'none' : 'underline';
        break;
    }
  });
});
