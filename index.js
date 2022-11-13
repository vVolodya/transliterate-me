const morseCode = {
  A: '.-',
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  J: '.---',
  K: '-.-',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  V: '...-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..',
  0: '-----',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
  ' ': ' ',
};

const userInput = document.querySelector('.input');
const goBtn = document.querySelector('.button-enter');
const clearBtn = document.querySelector('.button-clear');
const outputBox = document.querySelector('.output-text-box');
const inputBox = document.querySelector('.input-text-box');

// Function to create words

function toCreateNewWords() {
  if (!userInput.value.length) {
    return alert('It`s empty! Nothing to transliterate!');
  }

  for (let i = 0; i < userInput.value.length; i++) {
    if (!morseCode[userInput.value[i].toUpperCase()]) {
      userInput.value = '';
      return alert('Use only latin letters!');
    }
  }

  // Function to convert to morse code

  function convertToMorse(word) {
    return word.toUpperCase().split('').map((el) => (morseCode[el] ? morseCode[el] : el)).join('');
  }

  const latinWord = document.createElement('p');
  latinWord.classList.add('input-text');
  latinWord.innerText = userInput.value;
  inputBox.insertAdjacentElement('beforeend', latinWord);

  const morseCodeWord = document.createElement('p');
  morseCodeWord.classList.add('output-text');
  morseCodeWord.innerText = convertToMorse(userInput.value);
  outputBox.insertAdjacentElement('beforeend', morseCodeWord);

  userInput.value = '';
}

function toClear() {
  document.querySelectorAll('.output-text, .input-text').forEach((el) => el.remove());
}

// Event Listeners for the Go Button

goBtn.addEventListener('click', toCreateNewWords);
goBtn.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    toCreateNewWords();
  }
});

// Event Listeners for the Clear Button

clearBtn.addEventListener('click', toClear);
clearBtn.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    toClear();
  }
});
