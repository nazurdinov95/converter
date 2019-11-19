const weightTexts = ['Тонна', 'Килограмм', 'Грамм', 'Милиграм'];
const weightValues = ['tn', 'kg', 'gr', 'ml'];
const infoTexts = ['Килобайт', 'Мегабайт', 'Гегабайт', 'Терабайт'];
const infoValues = ['kb', 'mb', 'gb', 'tb'];
const lengthText = ['Миллиметр', 'Сантиметр', 'Метр', 'Километр'];
const lengthValues = ['mlt', 'st', 'mt', 'kt'];

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
      fillOptions(unitFrom, infoTexts, infoValues);
      fillOptions(unitTo, infoTexts, infoValues);

      convertButton.onclick = convertInfo;

      break;
    }

    case 3: {
      fillOptions(unitFrom, lengthText, lengthValues);
      fillOptions(unitTo, lengthText, lengthValues);

      convertButton.onclick = convertLength;

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

// // Converting information units

const KILOBYTE = 1024;
const MEGABYTE = KILOBYTE * 1024;
const GIGABYTE = MEGABYTE * 1024;
const TERABYTE = GIGABYTE * 1024;

function convertInfo() {
  const inputValue = input.value;
  const from = unitFrom.value;
  const to = unitTo.value;

  let result;

  switch (from) {
    case 'kb': {
      result = inputValue * KILOBYTE;
      break;
    }

    case 'mb': {
      result = inputValue * MEGABYTE;
      break;
    }

    case 'gb': {
      result = inputValue * GIGABYTE;
      break;
    }

    case 'tb': {
      result = inputValue * TERABYTE;
      break;
    }
  }


  switch (to) {
    case 'kb': {
      result /= KILOBYTE;
      break;
    }

    case 'mb': {
      result /= MEGABYTE;
      break;
    }

    case 'gb': {
      result /= GIGABYTE;
      break;
    }

    case 'tb': {
      result /= TERABYTE;
      break;
    }
  }

  output.value = result;
}

// // Converting Length units

const MILLIMETER = 1;
const SANTIMETER = MILLIMETER * 10;
const METER = SANTIMETER * 100;
const KILOMETER = METER * 1000;

function convertLength() {
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

// // Converting information units

const KILOBYTE = 1024;
const MEGABYTE = KILOBYTE * 1024;
const GIGABYTE = MEGABYTE * 1024;
const TERABYTE = GIGABYTE * 1024;

function convertInfo() {
    const inputValue = input.value;
    const from = unitFrom.value;
    const to = unitTo.value;

    let result;

    switch (from) {
        case 'kb': {
            result = inputValue * KILOBYTE;
            break;
        }

        case 'mb': {
            result = inputValue * MEGABYTE;
            break;
        }

        case 'gb': {
            result = inputValue * GIGABYTE;
            break;
        }

        case 'tb': {
            result = inputValue * TERABYTE;
            break;
        }
    }


    switch (to) {
        case 'kb': {
            result /= KILOBYTE;
            break;
        }

        case 'mb': {
            result /= MEGABYTE;
            break;
        }

        case 'gb': {
            result /= GIGABYTE;
            break;
        }

        case 'tb': {
            result /= TERABYTE;
            break;
        }
    }

    output.value = result;
}

// // Converting Length units

const MILLIMETER = 1;
const SANTIMETER = MILLIMETER * 10;
const METER = SANTIMETER * 100;
const KILOMETER = METER * 1000;

function convertLength() {
    const inputValue = input.value;
    const from = unitFrom.value;
    const to = unitTo.value;

    let result;

    switch (from) {
        case 'mlt': {
            result = inputValue * MILLIMETER;
            break;
        }

        case 'st': {
            result = inputValue * SANTIMETER;
            break;
        }

        case 'mt': {
            result = inputValue * METER;
            break;
        }

        case 'kt': {
            result = inputValue * KILOMETER;
            break;
        }
    }


    switch (to) {
        case 'mlt': {
            result /= MILLIMETER;
            break;
        }

        case 'st': {
            result /= SANTIMETER;
            break;
        }

        case 'mt': {
            result /= METER;
            break;
        }

        case 'kt': {
            result /= KILOMETER;
            break;
        }
    }

    output.value = result;
}
