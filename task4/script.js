const link = document.querySelector('a')

link.addEventListener('click', (event) => {
    let userInput = prompt('Введите текст для изменения ссылки');
    link.textContent = userInput;
    event.preventDefault('click');
});