const massa = ['Тонна', 'Килограмм', 'Грамм', 'Милиграм'];
const massaValues = ['tn', 'kg', 'gr', 'ml'];
const info = ['Килобайт', 'Мегабайт', 'Гигабайт', 'Терабайт'];
const infoValues = ['kb', 'mb', 'gb', 'tb'];
const dlina = ['Миллиметр', 'Сантиметр', 'Метр', 'Километр'];
const dlinaValues = ['mlt', 'st', 'mt', 'km'];
const addSelect = document.getElementById('addMassivsToOption');

addSelect.addEventListener('change', () => {
  addMassivsToOption();
});

function addMassivsToOption() {
  const countryObj = document.getElementById('addMassivsToOption');
  const resortObj = document.getElementById('resort');
  const resortObj2 = document.getElementById('resort2');
  const selInd = countryObj.options.selectedIndex;

  function fillOptions(select, options, optionsValues) {
    select.options.length = 0;

    for (let n = 0; n < options.length; n++) {
      select[n] = new Option(options[n], optionsValues[n]);
    }
  }

  switch (selInd) {
    case 1: {
      fillOptions(resortObj, massa, massaValues);
      break;
    }

    case 2: {
      fillOptions(resortObj, info, infoValues);
      break;
    }

    case 3: {
      fillOptions(resortObj, dlina, dlinaValues);
      break;
    }
  }

  switch (selInd) {
    case 1: {
      fillOptions(resortObj2, massa, massaValues);
      break;
    }

    case 2: {
      fillOptions(resortObj2, info, infoValues);
      break;
    }

    case 3: {
      fillOptions(resortObj2, dlina, dlinaValues);
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

  const TONA = 1000 * 1000 * 1000;
  const KILO = 1000 * 1000;
  const GRAM = 1000;

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
        result = inputValue * GRAM;
        break;
      case 'kg':
        result = inputValue * KILO;
        break;
      case 'tn':
        result = inputValue * TONA;
        break;
    }

    let result2;

    switch (fromTo) {
      case 'ml':
        result2 = result;
        break;
      case 'gr':
        result2 = result / GRAM;
        break;
      case 'kg':
        result2 = result / KILO;
        break;
      case 'tn':
        result2 = result / TONA;
        break;
    }

    document.getElementById('message').value = result2;

    const MEGA_BAYT = 1024 * 1024;
    const GIGA_BAYT = 1024 * 1024 * 1024;
    const TERA_BAYT = 1024 * 1024 * 1024 * 1024;

    switch (from) {
      case 'kb':
        result = inputValue * 1024;
        break;
      case 'mb':
        result = inputValue * MEGA_BAYT;
        break;
      case 'gb':
        result = inputValue * GIGA_BAYT;
        break;
      case 'tb':
        result = inputValue * TERA_BAYT;
        break;
    }

    switch (fromTo) {
      case 'kb':
        result2 = result / 1024;
        break;
      case 'mb':
        result2 = result / MEGA_BAYT;
        break;
      case 'gb':
        result2 = result / GIGA_BAYT;
        break;
      case 'tb':
        result2 = result / TERA_BAYT;
        break;
    }
    document.getElementById('message').value = result2;

    const METR = 1000;
    const KILOMETR = 1000000;

    switch (from) {
      case 'mlt':
        result = inputValue * 1;
        break;
      case 'st':
        result = inputValue * 10;
        break;
      case 'mt':
        result = inputValue * METR;
        break;
      case 'km':
        result = inputValue * KILOMETR;
        break;
    }

    switch (fromTo) {
      case 'mlt':
        result2 = result;
        break;
      case 'st':
        result2 = result / 10;
        break;
      case 'mt':
        result2 = result / METR;
        break;
      case 'km':
        result2 = result / KILOMETR;
        break;
    }
    document.getElementById('message').value = result2;
  }
}
