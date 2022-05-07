/* HTML Layout */
const layoutEN = [
  [
    { main: '`', mod: '~' },
    { main: '1', mod: '!' },
    { main: '2', mod: '@' },
    { main: '3', mod: '#' },
    { main: '4', mod: '$' },
    { main: '5', mod: '%' },
    { main: '6', mod: '^' },
    { main: '7', mod: '&' },
    { main: '8', mod: '*' },
    { main: '9', mod: '(' },
    { main: '0', mod: ')' },
    { main: '-', mod: '_' },
    { main: '=', mod: '+' },
    {
      main: 'Backspace', mod: 'Backspace', dim: 'key_double', id: 'backspace',
    },
  ],
  [
    {
      main: 'Tab', mod: 'Tab', dim: 'key_tab', id: 'tab',
    },
    { main: 'q', mod: 'Q' },
    { main: 'w', mod: 'W' },
    { main: 'e', mod: 'E' },
    { main: 'r', mod: 'R' },
    { main: 't', mod: 'T' },
    { main: 'y', mod: 'Y' },
    { main: 'u', mod: 'U' },
    { main: 'i', mod: 'I' },
    { main: 'o', mod: 'O' },
    { main: 'p', mod: 'P' },
    { main: '[', mod: '{' },
    { main: ']', mod: '}' },
    { main: '\\', mod: '|' },
    { main: 'Del', mod: 'Del', id: 'delete' },
  ],
  [
    {
      main: 'Caps Lock', mod: 'Caps Lock', dim: 'key_double', id: 'capslock',
    },
    { main: 'a', mod: 'A' },
    { main: 's', mod: 'S' },
    { main: 'd', mod: 'D' },
    { main: 'f', mod: 'F' },
    { main: 'g', mod: 'G' },
    { main: 'h', mod: 'H' },
    { main: 'j', mod: 'J' },
    { main: 'k', mod: 'K' },
    { main: 'l', mod: 'L' },
    { main: ';', mod: ':' },
    { main: "'", mod: '"' },
    {
      main: 'Enter', mod: 'Enter', dim: 'key_enter', id: 'enter',
    },
  ],
  [
    {
      main: 'Shift', mod: 'Shift', dim: 'key_double', id: 'shiftleft',
    },
    { main: 'z', mod: 'Z' },
    { main: 'x', mod: 'X' },
    { main: 'c', mod: 'C' },
    { main: 'v', mod: 'V' },
    { main: 'b', mod: 'B' },
    { main: 'n', mod: 'N' },
    { main: 'm', mod: 'M' },
    { main: ',', mod: '<' },
    { main: '.', mod: '>' },
    { main: '/', mod: '?' },
    {
      main: '', mod: '', dim: 'key_arrow', id: 'arrowup',
    },
    {
      main: 'Shift', mod: 'Shift', dim: 'key_enter', id: 'shiftright',
    },
  ],
  [
    {
      main: 'Ctrl', mod: 'Ctrl', dim: 'key_ctrl', id: 'controlleft',
    },
    {
      main: 'Win', mod: 'Win', id: 'metaleft',
    },
    {
      main: 'Alt', mod: 'Alt', id: 'altleft',
    },
    {
      main: '', mod: '', dim: 'key_space', id: 'space',
    },
    {
      main: 'Alt', mod: 'Alt', id: 'altright',
    },
    {
      main: '', mod: '', dim: 'key_arrow', id: 'arrowleft',
    },
    {
      main: '', mod: '', dim: 'key_arrow', id: 'arrowdown',
    },
    {
      main: '', mod: '', dim: 'key_arrow', id: 'arrowright',
    },
    {
      main: 'Ctrl', mod: 'Ctrl', id: 'controlright',
    },
  ],
];

function createKeyboard(layout, mode) {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  layout.forEach((row) => {
    const keyboadRow = document.createElement('div');
    keyboadRow.classList.add('keyboard__row');
    row.forEach((keyContent) => {
      const key = document.createElement('div');
      key.classList.add('key');
      if (mode) {
        key.innerText = keyContent.main;
      } else {
        key.innerText = keyContent.mod;
      }
      if (key.innerText.length !== 1) {
        key.classList.add('key_text');
        if (keyContent.dim) key.classList.add(keyContent.dim);
        if (keyContent.id) key.id = keyContent.id;
      }
      keyboadRow.append(key);
    });
    keyboard.append(keyboadRow);
  });
  return keyboard;
}

function createLayout() {
  const container = document.createElement('div');
  const keyboardWrapper = document.createElement('div');
  const textarea = document.createElement('textarea');

  container.classList.add('container');
  keyboardWrapper.classList.add('keyboard-wrapper');
  textarea.classList.add('keyboard-output');
  textarea.autofocus = true;

  keyboardWrapper.append(textarea);
  container.append(keyboardWrapper);

  return container;
}

const container = createLayout();
const keyboard = createKeyboard(layoutEN, true);
container.append(keyboard);
document.body.prepend(container);

const textarea = document.querySelector('.keyboard-output');

/* Keyboard Handlers */

function onKeyDown(event) {
  const keys = document.querySelectorAll('.key');
  keys.forEach((item) => {
    if (item.innerText.toUpperCase() === event.key.toUpperCase()) {
      item.classList.add('key_pressed');
    }
  });

  let targetElement = document.getElementById(event.code.toLowerCase());
  if (targetElement) {
    targetElement.classList.add('key_pressed');

    // Handle Tab button
    if (targetElement.id === 'tab') {
      event.preventDefault();
      textarea.value += '    ';
    }

    // Handle Shift button
    if (targetElement.id === 'shiftleft'
    || targetElement.id === 'shiftright') {
      document.querySelector('.keyboard').replaceWith(createKeyboard(layoutEN, false));
      targetElement = document.getElementById(event.code.toLowerCase());
      targetElement.classList.add('key_pressed');
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
  if (targetElement) {
    targetElement.classList.remove('key_pressed');

    // Handle Shift button
    if (targetElement.id === 'shiftleft'
    || targetElement.id === 'shiftright') {
      document.querySelector('.keyboard').replaceWith(createKeyboard(layoutEN, true));
    }
  }
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
      // console.log(event.target.id);
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
