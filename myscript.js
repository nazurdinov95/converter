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

    const select = document.getElementById('select1').value;
    const select2 = document.getElementById('select2').value;

    if () {
        const resault = inputValue / 1024;
        document.getElementById('message').innerHTML = resault;
    }

}