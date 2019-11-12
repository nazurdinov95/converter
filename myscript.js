const massa = ['Тонна', 'Килограмм', 'Грамм', 'Милиграм'];
const massaValues = ['tn', 'kg', 'gr', 'ml'];
const addSelect = document.getElementById('selectMyLove');
let lengthInd;

addSelect.addEventListener('change', () => {
  selectMyLove();
});

function selectMyLove() {
  const countryObj = document.getElementById('selectMyLove');
  const resortObj = document.getElementById('resort');
  const resortObj2 = document.getElementById('resort2');
  const selInd = countryObj.options.selectedIndex;

  switch (selInd) {
    case 0:
      resortObj.options.length = 0;
      break;
    case 1:
      resortObj.options.length = 0;

      lengthInd = massa.length;

      for (let n = 0; n < lengthInd; n++) {
        resortObj[n] = new Option(massa[n], massaValues [n]);
      }
      break;
  }
  switch (selInd) {
    case 0:
      resortObj2.options.length = 0;
      break;
    case 1:
      resortObj2.options.length = 0;

      lengthInd = massa.length;

      for (let n = 0; n < lengthInd; n++) {
        resortObj2[n] = new Option(massa[n], massaValues [n]);
      }
      break;
  }
}

const button = document.getElementById('addButton');

button.addEventListener('click', () => {
  addButton();
});

const input = document.getElementById('input');

input.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    addButton();
  }
});

const select = document.getElementById('resort');
const select2 = document.getElementById('resort2');

const Tona = 1000 * 1000 * 1000;
const Killo = 1000 * 1000;
const Gram = 1000;

function addButton() {
  const inputValue = document.getElementById('input').value;
  const from = select.value;
  const fromTo = select2.value;
  let result;

  switch (from) {
    case 'ml':
      result = inputValue * 1;
      break;
    case 'gr':
      result = inputValue * Gram;
      break;
    case 'kg':
      result = inputValue * Killo;
      break;
    case 'tn':
      result = inputValue * Tona;
      break;
  }

  let result2;

  switch (fromTo) {
    case 'ml':
      result2 = result;
      break;
    case 'gr':
      result2 = result / Gram;
      break;
    case 'kg':
      result2 = result / Killo;
      break;
    case 'tn':
      result2 = result / Tona;
      break;
  }
  document.getElementById('message').value = result2;
}
