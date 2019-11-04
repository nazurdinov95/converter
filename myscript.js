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
    const inputValue = document.getElementById('input');

    const kb = document.getElementById('kb');
    const mb = document.getElementById('mb');
    const kb1 = document.getElementById('kb1');
    const mb1 = document.getElementById('mb1');

    if (kb[0].checked) {
        const resault = inputValue*1024;
        document.getElementById('message').innerHTML =resault;
    }

}