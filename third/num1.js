// Функция для проверки, является ли строка палиндромом
function isPalindrome(str) {
    // Приводим строку к нижнему регистру и убираем все символы, кроме букв и цифр
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Сравниваем строку с ее зеркальной копией
    return str === str.split('').reverse().join('');
}

// Функция, которая срабатывает при нажатии кнопки "Проверить"
function checkPalindrome() {
    const input = document.getElementById('inputString').value; // Получаем введенную строку
    const result = document.getElementById('result'); // Элемент для вывода результата
    
    // Проверяем, является ли строка палиндромом
    if (isPalindrome(input)) {
        result.textContent = "Это палиндром!"; // Выводим положительный результат
        result.style.color = "green"; // Меняем цвет текста на зеленый
        document.getElementById('inputString').style.color = "green"; // Красим текст в поле ввода
    } else {
        result.textContent = "Это не палиндром!"; // Выводим отрицательный результат
        result.style.color = "red"; // Меняем цвет текста на красный
        document.getElementById('inputString').style.color = "red"; // Красим текст в поле ввода
    }
}
