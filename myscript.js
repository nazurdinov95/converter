const button = document.getElementById('addButton');

button.addEventListener('click', () => {
    addButton();
})

const input = document.getElementById('input');

input.addEventListener('keydown', (e) => {
    if(e.keyCode === 13
)
{
    addButton();
}
})

const select = document.getElementById('select1');
const select2 = document.getElementById('select2');

const KYLO_BYTE = 1024;
const MEGA_BYTE = KYLO_BYTE * 1024;
const GEGA_BYTE = MEGA_BYTE * 1024;
const TERA_BYTE = GEGA_BYTE * 1024;

function addButton() {
    const inputValue = document.getElementById('input').value;
    const from = select.value;
    const fromTo = select2.value;

    let result;

    switch (from) {
        case "kb":
            result = inputValue * KYLO_BYTE;
            break;
        case "mb":
            result = inputValue * MEGA_BYTE;
            break;
        case "gb":
            result = inputValue * GEGA_BYTE;
            break;
        case "tb":
            result = inputValue * TERA_BYTE;
            break;
    }

    let result2;
    switch (fromTo) {
        case "kb2":
           result2 = result / KYLO_BYTE;
            break;
        case "mb2":
            result2 = result / MEGA_BYTE;
            break;
        case "gb2":
            result2 = result / GEGA_BYTE;
            break;
        case "tb2":
            result2 = result / TERA_BYTE;
            break;
    }
    document.getElementById('message').value = result2;
}