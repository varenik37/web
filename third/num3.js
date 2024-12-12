// Функция для поиска ученика с минимальным средним баллом
function findStudentWithLowestAverage() {
    // Получение данных из полей ввода
    const namesInput = document.getElementById('names').value; // Имена учеников
    const gradesInput = document.getElementById('grades').value; // Оценки

    // Разделяем строку имен на массив
    const names = namesInput.split(', ');
    // Разделяем строку оценок на массив
    const gradesArray = gradesInput.split(' ');

    let lowestAverage = 100; // Начальное значение для минимального среднего балла
    let studentWithLowestAverage = ''; // Имя ученика с минимальным средним

    // Перебираем каждого ученика
    names.forEach((name, index) => {
        // Разделяем оценки на числа
        const grades = gradesArray[index].split('-').map(Number); 
        let total = 0; // Сумма оценок

        // Суммируем оценки
        grades.forEach(grade => {
            total += grade;
        });

        // Вычисляем средний балл
        const average = total / grades.length;

        // Если нашли более низкий средний балл, обновляем переменные
        if (average < lowestAverage) {
            lowestAverage = average;
            studentWithLowestAverage = name;
        }
    });

    // Выводим результат
    document.getElementById('result').innerHTML = `Ученик с самым низким средним баллом: <br>${studentWithLowestAverage}`;
}
