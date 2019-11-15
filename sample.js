const weightTexts = ['Тонна', 'Килограмм', 'Грамм', 'Милиграм'];
const weightValues = ['tn', 'kg', 'gr', 'ml'];

const unitFrom = document.getElementById('unitFrom');
const unitTo = document.getElementById('unitTo');
const convertButton = document.getElementById('convert');

const input = document.getElementById('input');
const output = document.getElementById('output');

const unitsSelect = document.getElementById('unitsSelect');
unitsSelect.addEventListener('change', onChangeUnitsSelect);

function fillOptions(select, optionTexts, optionValues) {
  select.options.length = 0;

  for (let n = 0; n < optionTexts.length; n++) {
    select[n] = new Option(optionTexts[n], optionValues[n]);
  }
}

function onChangeUnitsSelect(e) {
  const select = e.target;
  const selectedIndex = select.selectedIndex;

  switch (selectedIndex) {
    case 1: {
      fillOptions(unitFrom, weightTexts, weightValues);
      fillOptions(unitTo, weightTexts, weightValues);

      convertButton.onclick = convertWeight;

      break;
    }

    case 2: {
      convertButton.onclick = convertInfo;
      // other Units
      break;
    }
  }
}

// // Converting weight

const MILLIGRAM = 1;
const GRAM = MILLIGRAM * 1000;
const KILO = GRAM * 1000;
const TON = KILO * 1000;

function convertWeight() {
  const inputValue = input.value;
  const from = unitFrom.value;
  const to = unitTo.value;

  let result;

  switch (from) {
    case 'ml': {
      result = inputValue * MILLIGRAM;
      break;
    }

    case 'gr': {
      result = inputValue * GRAM;
      break;
    }

    case 'kg': {
      result = inputValue * KILO;
      break;
    }

    case 'tn': {
      result = inputValue * TON;
      break;
    }
  }


  switch (to) {
    case 'ml': {
      result /= MILLIGRAM;
      break;
    }

    case 'gr': {
      result /= GRAM;
      break;
    }

    case 'kg': {
      result /= KILO;
      break;
    }

    case 'tn': {
      result /= TON;
      break;
    }
  }

  output.value = result;
}

// / Converting information units

function convertInfo() {
  // TODO как пример выше написать другие функции
}

