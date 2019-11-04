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

    switch (select){
        case "kb":
            text =inputValue*1024;
            break;
    }
    document.getElementById('message').innerHTML = text;
}