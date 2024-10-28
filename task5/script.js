const inputField = document.querySelector('input');
const duplicateField = document.querySelector('#duplicateField');
const button = document.querySelector('button');

inputField.addEventListener('input', () => {
    duplicateField.textContent = inputField.value;
});

function sendToConsole () {
    console.log(inputField.value);
    inputField.value = '';
    duplicateField.textContent = '';
} 

button.addEventListener('click', (event) => {
    sendToConsole();
    event.preventDefault();
});

inputField.addEventListener('submit', sendToConsole); // это вариант для обработки по нажатию кнопки

// Если для верного решения задания нужно следить именно за кнопкой Enter, то можно сделать так:

// inputField.addEventListener('keypress', (event) => {
//     if(event.key === 'Enter') {
//         sendToConsole();
//     }
// });