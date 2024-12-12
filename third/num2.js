let randomNumber; // Переменная для хранения случайного числа
let attempts; // Переменная для оставшихся попыток
let score = 0; // Начальные баллы

// Функция начала игры
function startGame() {
    const min = parseInt(document.getElementById('min').value); // Получаем минимальное значение
    const max = parseInt(document.getElementById('max').value); // Получаем максимальное значение

    if (isNaN(min) || isNaN(max)) {
        // Проверка валидности ввода
        document.getElementById('errorMessage').textContent = "Введите действительные числа.";
        return;
    }

    if (min >= max) {
        // Проверка логики значений
        document.getElementById('errorMessage').textContent = "Минимальное значение должно быть меньше максимального.";
        return;
    }

    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // Генерация случайного числа
    attempts = 5; // Установка количества попыток

    // Подготовка интерфейса
    document.getElementById('errorMessage').textContent = '';
    document.getElementById('attemptsLeft').textContent = attempts;
    document.getElementById('gameArea').style.display = "block";
}

// Функция для обработки предположения пользователя
function makeGuess() {
    const guess = parseInt(document.getElementById('guess').value); // Получаем введенное число

    if (isNaN(guess)) {
        // Проверка ввода
        document.getElementById('guessErrorMessage').textContent = "Введите число.";
        return;
    }

    attempts--; // Уменьшаем количество попыток
    document.getElementById('attemptsLeft').textContent = attempts;

    if (guess === randomNumber) {
        // Если угадали
        score += 100; // Начисляем баллы
        document.getElementById('result').textContent = "Вы угадали!";
    } else if (attempts === 0) {
        // Если попытки закончились
        document.getElementById('result').textContent = `Вы проиграли. Число было ${randomNumber}`;
    } else {
        // Подсказка
        document.getElementById('result').textContent = guess < randomNumber ? "Слишком мало!" : "Слишком много!";
    }
}

// Функция для сброса игры
function resetFields() {
    document.getElementById('min').value = '';
    document.getElementById('max').value = '';
    document.getElementById('guess').value = '';
    document.getElementById('gameArea').style.display = "none";
}
