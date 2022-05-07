const textarea = document.querySelector('.keyboard-output');
const keyboard = document.querySelector('.keyboard');

/* Keyboard Handlers */

function onKeyDown(event) {
  const keys = document.querySelectorAll('.key');
  keys.forEach((item) => {
    if (item.innerText.toUpperCase() === event.key.toUpperCase()) {
      item.classList.add('key_pressed');
    }
  });

  const targetElement = document.getElementById(event.code.toLowerCase());
  if (targetElement) {
    targetElement.classList.add('key_pressed');

    // Handle Tab button
    if (targetElement.id === 'tab') {
      event.preventDefault();
      textarea.value += '    ';
    }
  }
}

function onKeyUp(event) {
  const keys = document.querySelectorAll('.key');
  keys.forEach((item) => {
    if (item.innerText.toUpperCase() === event.key.toUpperCase()) {
      item.classList.remove('key_pressed');
    }
  });

  const targetElement = document.getElementById(event.code.toLowerCase());
  if (targetElement) targetElement.classList.remove('key_pressed');
}

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

/* Mouse Handlers */

function onMouseDown(event) {
  if (event.target.classList.contains('key')) {
    event.target.classList.add('key_pressed');
    if (!event.target.classList.contains('key_text')) {
      textarea.value += event.target.innerText.toLowerCase();
    } else {
      console.log(event.target.id);
    }
  }
}

function onMouseUp(event) {
  if (event.target.classList.contains('key')) {
    event.target.classList.remove('key_pressed');
    textarea.focus();
  }
}

keyboard.addEventListener('mousedown', onMouseDown);
keyboard.addEventListener('mouseup', onMouseUp);
