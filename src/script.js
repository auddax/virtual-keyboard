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
    { main: 'Del', mod: 'Del', id: 'del' },
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

const layoutRU = [
  [
    { main: 'ё', mod: 'Ё' },
    { main: '1', mod: '!' },
    { main: '2', mod: '»' },
    { main: '3', mod: '№' },
    { main: '4', mod: ';' },
    { main: '5', mod: '%' },
    { main: '6', mod: ':' },
    { main: '7', mod: '?' },
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
    { main: 'й', mod: 'Й' },
    { main: 'ц', mod: 'Ц' },
    { main: 'у', mod: 'У' },
    { main: 'к', mod: 'К' },
    { main: 'е', mod: 'Е' },
    { main: 'н', mod: 'Н' },
    { main: 'г', mod: 'Г' },
    { main: 'ш', mod: 'Ш' },
    { main: 'щ', mod: 'Щ' },
    { main: 'з', mod: 'З' },
    { main: 'х', mod: 'Х' },
    { main: 'ъ', mod: 'Ъ' },
    { main: '\\', mod: '/' },
    { main: 'Del', mod: 'Del', id: 'del' },
  ],
  [
    {
      main: 'Caps Lock', mod: 'Caps Lock', dim: 'key_double', id: 'capslock',
    },
    { main: 'ф', mod: 'Ф' },
    { main: 'ы', mod: 'Ы' },
    { main: 'в', mod: 'В' },
    { main: 'а', mod: 'А' },
    { main: 'п', mod: 'П' },
    { main: 'р', mod: 'Р' },
    { main: 'о', mod: 'О' },
    { main: 'л', mod: 'Л' },
    { main: 'д', mod: 'Д' },
    { main: 'ж', mod: 'Ж' },
    { main: 'э', mod: 'Э' },
    {
      main: 'Enter', mod: 'Enter', dim: 'key_enter', id: 'enter',
    },
  ],
  [
    {
      main: 'Shift', mod: 'Shift', dim: 'key_double', id: 'shiftleft',
    },
    { main: 'я', mod: 'Я' },
    { main: 'ч', mod: 'Ч' },
    { main: 'с', mod: 'С' },
    { main: 'м', mod: 'М' },
    { main: 'и', mod: 'И' },
    { main: 'т', mod: 'Т' },
    { main: 'ь', mod: 'Ь' },
    { main: 'б', mod: 'Б' },
    { main: 'ю', mod: 'Ю' },
    { main: '.', mod: ',' },
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

let keyboardLayout;
let cursorDiff;
let capslock;

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
        if (capslock && keyContent.main.length === 1) {
          key.innerText = keyContent.mod.toLowerCase();
        } else {
          key.innerText = keyContent.mod;
        }
      }
      if (!mode) {
        if (capslock && keyContent.main.length === 1) {
          key.innerText = keyContent.main.toUpperCase();
        } else {
          key.innerText = keyContent.main;
        }
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
  textarea.setAttribute('placeholder', 'Virtual keyboard was made in Windows operating system \nPress Shift+Alt to switch layout');
  textarea.autofocus = true;

  keyboardWrapper.append(textarea);
  container.append(keyboardWrapper);

  return container;
}

function renderKeyboard(layout, event, mode) {
  const keyboard = createKeyboard(layout, mode);
  document.querySelector('.keyboard').replaceWith(keyboard);
  const targetElement = document.getElementById(event.code.toLowerCase());

  if (targetElement.id === 'capslock') {
    if (capslock) targetElement.classList.add('key_pressed');
  }
  if (targetElement.id === 'shiftleft') {
    targetElement.classList.add('key_pressed');
    if (capslock) document.querySelector('#capslock').classList.add('key_pressed');
  }
  if (targetElement.id === 'shiftright') {
    targetElement.classList.add('key_pressed');
    if (capslock) document.querySelector('#capslock').classList.add('key_pressed');
  }

  keyboard.addEventListener('mousedown', onMouseDown);
  keyboard.addEventListener('mouseup', onMouseUp);
}

function renderKeyboardOnMouse(layout, event, mode) {
  const keyboard = createKeyboard(layout, mode);
  document.querySelector('.keyboard').replaceWith(keyboard);

  if (event.target.id === 'capslock') {
    if (capslock) document.querySelector('#capslock').classList.add('key_pressed');
  }
  if (event.target.id === 'shiftleft') {
    document.querySelector('#shiftleft').classList.add('key_pressed');
    if (capslock) document.querySelector('#capslock').classList.add('key_pressed');
  }
  if (event.target.id === 'shiftright') {
    document.querySelector('#shiftright').classList.add('key_pressed');
    if (capslock) document.querySelector('#capslock').classList.add('key_pressed');
  }

  keyboard.addEventListener('mousedown', onMouseDown);
  keyboard.addEventListener('mouseup', onMouseUp);
}

if (localStorage.getItem('lang')) {
  if (localStorage.getItem('lang') === 'ru') keyboardLayout = createKeyboard(layoutRU, false);
  if (localStorage.getItem('lang') === 'en') keyboardLayout = createKeyboard(layoutEN, false);
} else {
  keyboardLayout = createKeyboard(layoutEN, true);
  localStorage.setItem('lang', 'en');
}

const container = createLayout();
container.append(keyboardLayout);
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

  const targetElement = document.getElementById(event.code.toLowerCase());
  if (targetElement) {
    targetElement.classList.add('key_pressed');

    // Handle Tab button
    if (targetElement.id === 'tab') {
      event.preventDefault();
      const tab = '\t';
      const cursorPositionStart = textarea.selectionStart;
      const content = textarea.value;

      textarea.value = content.substring(0, cursorPositionStart)
      + tab
      + content.substring(cursorPositionStart, content.length);
    }

    // Handle CapsLock button
    if (targetElement.id === 'capslock') {
      if (!capslock) {
        capslock = !capslock;
        if (localStorage.getItem('lang') === 'ru') {
          renderKeyboard(layoutRU, event, false);
        } else {
          renderKeyboard(layoutEN, event, false);
        }
      } else {
        capslock = !capslock;
        if (localStorage.getItem('lang') === 'ru') {
          renderKeyboard(layoutRU, event, false);
        } else {
          renderKeyboard(layoutEN, event, false);
        }
      }
    }

    // Handle Shift button
    if (targetElement.id === 'shiftleft'
    || targetElement.id === 'shiftright') {
      if (localStorage.getItem('lang') === 'ru') {
        renderKeyboard(layoutRU, event, true);
      } else {
        renderKeyboard(layoutEN, event, true);
      }
    }

    // Handle Shift+Alt
    if (event.altKey && event.shiftKey) {
      if (localStorage.getItem('lang') === 'ru') {
        renderKeyboard(layoutEN, event, false);
        localStorage.setItem('lang', 'en');
      } else {
        renderKeyboard(layoutRU, event, false);
        localStorage.setItem('lang', 'ru');
      }
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

    // Handle CapsLock button
    if (targetElement.id === 'capslock') {
      capslock = !capslock;
      if (localStorage.getItem('lang') === 'ru') {
        renderKeyboard(layoutRU, event, false);
      } else {
        renderKeyboard(layoutEN, event, false);
      }
    }

    // Handle Shift button
    if (targetElement.id === 'shiftleft'
    || targetElement.id === 'shiftright') {
      if (localStorage.getItem('lang') === 'ru') {
        renderKeyboard(layoutRU, event, false);
      } else {
        renderKeyboard(layoutEN, event, false);
      }
      document.getElementById(targetElement.id).classList.remove('key_pressed');
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
      const symbol = event.target.innerText;
      const cursorPositionStart = textarea.selectionStart;
      const content = textarea.value;

      textarea.value = content.substring(0, cursorPositionStart)
      + symbol
      + content.substring(cursorPositionStart, content.length);
    } else {
      const targetElement = event.target;

      // Handle Tab button
      if (targetElement.id === 'tab') {
        const tab = '\t';
        const cursorPositionStart = textarea.selectionStart;
        const content = textarea.value;

        textarea.value = content.substring(0, cursorPositionStart)
      + tab
      + content.substring(cursorPositionStart, content.length);
      }

      // Handle Backspace button
      if (targetElement.id === 'backspace') {
        const content = textarea.value;
        const cursorPositionStart = textarea.selectionStart;
        const cursorPositionEnd = textarea.selectionEnd;

        if (cursorPositionStart === cursorPositionEnd) {
          textarea.value = content.substring(0, cursorPositionStart - 1)
          + content.substring(cursorPositionStart, content.length);
        } else {
          textarea.value = content.substring(0, cursorPositionStart)
          + content.substring(cursorPositionEnd, content.length);
        }
      }

      // Handle Enter button
      if (targetElement.id === 'enter') {
        const enter = '\n';
        const cursorPositionStart = textarea.selectionStart;
        const content = textarea.value;

        textarea.value = content.substring(0, cursorPositionStart)
      + enter
      + content.substring(cursorPositionStart, content.length);
      }

      // Handle Del button
      if (targetElement.id === 'del') {
        const content = textarea.value;
        const cursorPositionStart = textarea.selectionStart;
        const cursorPositionEnd = textarea.selectionEnd;

        if (cursorPositionStart === cursorPositionEnd) {
          textarea.value = content.substring(0, cursorPositionStart)
        + content.substring(cursorPositionStart + 1, content.length);
        } else {
          textarea.value = content.substring(0, cursorPositionStart)
          + content.substring(cursorPositionEnd, content.length);
        }
      }

      // Handle Space button
      if (targetElement.id === 'space') {
        const content = textarea.value;
        const space = ' ';
        const cursorPositionStart = textarea.selectionStart;

        textarea.value = content.substring(0, cursorPositionStart)
        + space
        + content.substring(cursorPositionStart, content.length);
      }

      // Handle Arrow buttons
      if (targetElement.id === 'arrowleft') {
        const content = textarea.value;
        const arrow = '←';
        const cursorPositionStart = textarea.selectionStart;

        textarea.value = content.substring(0, cursorPositionStart)
        + arrow
        + content.substring(cursorPositionStart, content.length);
      }

      if (targetElement.id === 'arrowright') {
        const content = textarea.value;
        const arrow = '→';
        const cursorPositionStart = textarea.selectionStart;

        textarea.value = content.substring(0, cursorPositionStart)
        + arrow
        + content.substring(cursorPositionStart, content.length);
      }

      if (targetElement.id === 'arrowup') {
        const content = textarea.value;
        const arrow = '↑';
        const cursorPositionStart = textarea.selectionStart;

        textarea.value = content.substring(0, cursorPositionStart)
        + arrow
        + content.substring(cursorPositionStart, content.length);
      }

      if (targetElement.id === 'arrowdown') {
        const content = textarea.value;
        const arrow = '↓';
        const cursorPositionStart = textarea.selectionStart;

        textarea.value = content.substring(0, cursorPositionStart)
        + arrow
        + content.substring(cursorPositionStart, content.length);
      }

      // Handle CapsLock button
      if (targetElement.id === 'capslock') {
        if (!capslock) {
          capslock = !capslock;
          if (localStorage.getItem('lang') === 'ru') {
            renderKeyboardOnMouse(layoutRU, event, false);
          } else {
            renderKeyboardOnMouse(layoutEN, event, false);
          }
        } else {
          capslock = !capslock;
          if (localStorage.getItem('lang') === 'ru') {
            renderKeyboardOnMouse(layoutRU, event, false);
          } else {
            renderKeyboardOnMouse(layoutEN, event, false);
          }
        }
      }

      // Handle Shift button
      if (targetElement.id === 'shiftleft'
      || targetElement.id === 'shiftright') {
        if (localStorage.getItem('lang') === 'ru') {
          renderKeyboardOnMouse(layoutRU, event, true);
        } else {
          renderKeyboardOnMouse(layoutEN, event, true);
        }
      }

      // Handle Shift+Alt
      if ((targetElement.id === 'shiftleft'
      || targetElement.id === 'shiftright') && event.altKey) {
        if (localStorage.getItem('lang') === 'ru') {
          renderKeyboardOnMouse(layoutEN, event, false);
          localStorage.setItem('lang', 'en');
        } else {
          renderKeyboardOnMouse(layoutRU, event, false);
          localStorage.setItem('lang', 'ru');
        }
      }

      if ((targetElement.id === 'altleft'
      || targetElement.id === 'altright') && event.shiftKey) {
        if (localStorage.getItem('lang') === 'ru') {
          renderKeyboardOnMouse(layoutEN, event, false);
          localStorage.setItem('lang', 'en');
        } else {
          renderKeyboardOnMouse(layoutRU, event, false);
          localStorage.setItem('lang', 'ru');
        }
      }
    }
  }
}

function onMouseUp(event) {
  const targetElement = event.target;

  if (targetElement.tagName.toLowerCase() === 'textarea') {
    cursorDiff = textarea.value.length - textarea.selectionEnd;
  }

  if (targetElement.classList.contains('key')) {
    if (targetElement.id !== 'capslock') {
      targetElement.classList.remove('key_pressed');
    } else if (targetElement.id === 'capslock' && !capslock) {
      targetElement.classList.remove('key_pressed');
    }
    textarea.focus();

    if (cursorDiff && cursorDiff !== 0) {
      if (targetElement.id === 'del') cursorDiff -= 1;
      const newCursor = textarea.selectionEnd - cursorDiff;
      textarea.setSelectionRange(newCursor, newCursor);
      if (textarea.selectionEnd === 0) cursorDiff = 0;
    }
  }

  // Handle Shift button
  if (targetElement.id === 'shiftleft'
  || targetElement.id === 'shiftright') {
    if (localStorage.getItem('lang') === 'ru') {
      renderKeyboardOnMouse(layoutRU, event, false);
    } else {
      renderKeyboardOnMouse(layoutEN, event, false);
    }
    document.getElementById(targetElement.id).classList.remove('key_pressed');
  }
}

keyboardLayout.addEventListener('mousedown', onMouseDown);
keyboardLayout.addEventListener('mouseup', onMouseUp);
textarea.addEventListener('mouseup', onMouseUp);
