const consoleLog = document.querySelector('#consoleLog');
const alertParagraph = document.querySelector('#alert');
const promptParagraph = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщений в консоль');
} );

alertParagraph.addEventListener('click', () => {
    alert('Метод для вывода модального окна с сообщением.');
});

promptParagraph.addEventListener('click', () => {
    alert('Метод для вывода модального окна с полем для ввода данных.');
});