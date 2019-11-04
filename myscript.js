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

    const kb = document.getElementById('kb');
    const mb = document.getElementById('mb');
    const kb2 = document.getElementById('kb2');
    const mb2 = document.getElementById('mb2');

    if (kb == mb2) {
        const resault = inputValue / 1024;
        document.getElementById('message').innerHTML = resault;
    }

}