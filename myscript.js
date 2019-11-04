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


function addButton() {
    const inputValue = document.getElementById('input').value;
    let text;
    const select = document.getElementById('select1').value;
    const select2 = document.getElementById('select2').value;

    switch (select) {
        case "kb":
            text = inputValue * 1024;
            break;
        case "mb":
            text = inputValue * 1024 * 1024;
            break;
        case "gb":
            text = inputValue * 1024 * 1024 * 1024;
            break;
        case "tb":
            text = inputValue * 1024 * 1024 * 1024 * 1024;
            break;
    }

    let text2;
    switch (select2) {
        case "kb2":
            text2 = text / 1024;
            break;
        case "mb2":
            text2 = text / (1024 * 1024);
            break;
        case "gb2":
            text2 = text / (1024 * 1024 * 1024);
            break;
        case "tb2":
            text2 = text / (1024 * 1024 * 1024 * 1024);
            break;
    }
    document.getElementById('message').innerText = text2;
}